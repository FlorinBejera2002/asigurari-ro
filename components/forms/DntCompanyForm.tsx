'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const dntCompanySchema = z.object({
  name: z.string().min(2, 'Numele companiei trebuie să conțină cel puțin 2 caractere'),
  cnp_cif: z.string().regex(/^[0-9]{2,10}$/, 'CUI invalid'),
  phone: z.string().regex(/^[0-9+\s()-]+$/, 'Număr de telefon invalid'),
  email: z.string().email('Adresă de email invalidă'),
  insurances: z.array(z.string()).min(1, 'Selectați cel puțin un tip de asigurare'),
  activity_field: z.array(z.string()).min(1, 'Selectați cel puțin un domeniu de activitate'),
});

type DntCompanyFormData = z.infer<typeof dntCompanySchema>;

export default function DntCompanyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DntCompanyFormData>({
    resolver: zodResolver(dntCompanySchema),
  });

  const onSubmit = async (data: DntCompanyFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/dnt-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full border-t border-gray-200 pt-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Formularul a fost trimis cu succes!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          A apărut o eroare. Vă rugăm încercați din nou.
        </div>
      )}

      <div>
        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-building text-blue-700 text-lg md:text-2xl" aria-hidden="true" />
          Date de identificare companie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Denumire companie *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.name && <div className="text-sm mt-1 text-red-500">{errors.name.message}</div>}
          </div>

          <div>
            <label htmlFor="cnp_cif" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              CUI *
            </label>
            <input
              type="text"
              id="cnp_cif"
              {...register('cnp_cif')}
              className={`w-full px-4 py-3 border ${
                errors.cnp_cif ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.cnp_cif ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.cnp_cif && <div className="text-sm mt-1 text-red-500">{errors.cnp_cif.message}</div>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.phone ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.phone && <div className="text-sm mt-1 text-red-500">{errors.phone.message}</div>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.email ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.email && <div className="text-sm mt-1 text-red-500">{errors.email.message}</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 w-full gap-6 h-full">
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-6">
            <i className="fas fa-shield-alt text-blue-700 text-lg md:text-2xl mr-2" aria-hidden="true" />
            Tipuri de asigurări de care sunteți interesat *
          </h3>

          <div className="p-4 rounded-lg border border-gray-200">
            <div className="space-y-3 text-sm md:text-base">
              <label className="flex items-center gap-3">
                <input type="checkbox" value="auto" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Auto (RCA/CASCO/CMR/Asistență Rutieră)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="property" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Proprietate/Clădiri</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="liability" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Răspundere Civilă Profesională</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="cargo" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Transport Mărfuri (CMR)</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="employees" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Angajați</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="cyber" {...register('insurances')} className="w-4 h-4" />
                <span>Asigurare Cyber</span>
              </label>
            </div>
            {errors.insurances && <div className="text-sm mt-1 text-red-500">{errors.insurances.message}</div>}
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
            <i className="fas fa-briefcase text-blue-700 text-lg md:text-2xl mr-2" aria-hidden="true" />
            Domeniu de activitate
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed font-semibold">
            Domeniu de activitate *
          </p>

          <div className="p-4 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm md:text-base">
              <label className="flex items-center gap-3">
                <input type="checkbox" value="commerce" {...register('activity_field')} className="w-4 h-4" />
                <span>Comerț</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="production" {...register('activity_field')} className="w-4 h-4" />
                <span>Producție</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="services" {...register('activity_field')} className="w-4 h-4" />
                <span>Servicii</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="construction" {...register('activity_field')} className="w-4 h-4" />
                <span>Construcții</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="transport" {...register('activity_field')} className="w-4 h-4" />
                <span>Transport</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="it" {...register('activity_field')} className="w-4 h-4" />
                <span>IT</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="agriculture" {...register('activity_field')} className="w-4 h-4" />
                <span>Agricultură</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" value="other" {...register('activity_field')} className="w-4 h-4" />
                <span>Altele</span>
              </label>
            </div>
            {errors.activity_field && <div className="text-sm mt-1 text-red-500">{errors.activity_field.message}</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-8 pb-8 gap-6">
        <div className="flex justify-center items-center lg:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-700 w-full sm:w-fit h-fit md:hover:bg-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-sm sm:text-base md:text-lg font-semibold">
              {isSubmitting ? 'SE TRIMITE...' : 'TRIMITE'}
            </span>
            <i className="fas fa-envelope text-xs sm:text-sm md:text-base" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
