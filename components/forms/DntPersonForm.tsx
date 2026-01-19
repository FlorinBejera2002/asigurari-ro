'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const dntPersonSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să conțină cel puțin 2 caractere'),
  cnp_cif: z.string().regex(/^[0-9]{13}$/, 'CNP invalid (trebuie să conțină 13 cifre)'),
  phone: z.string().regex(/^[0-9+\s()-]+$/, 'Număr de telefon invalid'),
  email: z.string().email('Adresă de email invalidă'),
  insurances: z.array(z.string()).min(1, 'Selectați cel puțin un tip de asigurare'),
  income_source: z.string().min(1, 'Selectați sursa de venit'),
  marital_status: z.string().min(1, 'Selectați starea civilă'),
  have_children: z.string().min(1, 'Selectați dacă aveți copii'),
  property: z.string().min(1, 'Selectați dacă dețineți proprietăți'),
  car: z.string().min(1, 'Selectați dacă dețineți autovehicul'),
  travel: z.string().min(1, 'Selectați frecvența călătoriilor'),
  performance_sports: z.string().min(1, 'Selectați dacă practicați sporturi de performanță'),
  pets: z.string().min(1, 'Selectați dacă dețineți animale de companie'),
  profession: z.string().min(2, 'Profesia trebuie să conțină cel puțin 2 caractere'),
});

type DntPersonFormData = z.infer<typeof dntPersonSchema>;

export default function DntPersonForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DntPersonFormData>({
    resolver: zodResolver(dntPersonSchema),
  });

  const onSubmit = async (data: DntPersonFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/dnt-person', {
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
        <h3 className="text-lg text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-user text-blue-700 text-lg md:text-2xl" aria-hidden="true" />
          Date de identificare
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Nume și prenume *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>}
          </div>

          <div>
            <label htmlFor="cnp_cif" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              CNP *
            </label>
            <input
              type="text"
              id="cnp_cif"
              maxLength={13}
              {...register('cnp_cif')}
              className={`w-full px-4 py-3 border ${
                errors.cnp_cif ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.cnp_cif ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.cnp_cif && <div className="text-red-500 text-sm mt-1">{errors.cnp_cif.message}</div>}
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
              } rounded-lg focus:ring-2 ${
                errors.phone ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone.message}</div>}
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
              } rounded-lg focus:ring-2 ${
                errors.email ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200 text-sm md:text-base`}
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg text-2xl font-bold text-gray-800 mb-6">
          <i className="fas fa-shield-alt text-blue-700 text-lg md:text-2xl mt-0.5 md:mt-0 mr-2" aria-hidden="true" />
          Tipuri de asigurări de care sunteți interesat(ă) *
        </h3>
        <div className="p-4 rounded-lg border border-gray-200">
          <div className="space-y-3 text-sm md:text-base">
            <label className="flex items-center gap-3">
              <input type="checkbox" value="auto" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare Auto (RCA/CASCO/CMR/Asistență Rutieră)</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" value="home" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare Locuință</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" value="travel" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare Călătorie</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" value="health" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare Sănătate</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" value="life" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare de Viață</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" value="accidents" {...register('insurances')} className="w-4 h-4" />
              <span>Asigurare de Accidente</span>
            </label>
          </div>
          {errors.insurances && <div className="text-red-500 text-sm mt-1">{errors.insurances.message}</div>}
        </div>
      </div>

      <div>
        <h3 className="text-lg text-2xl font-bold text-gray-800 mb-6">
          <i className="fas fa-user text-blue-700 text-lg md:text-2xl mr-2" aria-hidden="true" />
          Informații suplimentare
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm md:text-base">
          <div>
            <label htmlFor="income_source" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Sursa de venit *
            </label>
            <select
              id="income_source"
              {...register('income_source')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="salary">Salariu</option>
              <option value="business">Afacere proprie</option>
              <option value="pension">Pensie</option>
              <option value="other">Altele</option>
            </select>
            {errors.income_source && <div className="text-red-500 text-sm mt-1">{errors.income_source.message}</div>}
          </div>

          <div>
            <label htmlFor="marital_status" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Stare civilă *
            </label>
            <select
              id="marital_status"
              {...register('marital_status')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="single">Necăsătorit(ă)</option>
              <option value="married">Căsătorit(ă)</option>
              <option value="divorced">Divorțat(ă)</option>
              <option value="widowed">Văduv(ă)</option>
            </select>
            {errors.marital_status && <div className="text-red-500 text-sm mt-1">{errors.marital_status.message}</div>}
          </div>

          <div>
            <label htmlFor="have_children" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Aveți copii? *
            </label>
            <select
              id="have_children"
              {...register('have_children')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="yes">Da</option>
              <option value="no">Nu</option>
            </select>
            {errors.have_children && <div className="text-red-500 text-sm mt-1">{errors.have_children.message}</div>}
          </div>

          <div>
            <label htmlFor="property" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Dețineți proprietăți? *
            </label>
            <select
              id="property"
              {...register('property')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="yes">Da</option>
              <option value="no">Nu</option>
            </select>
            {errors.property && <div className="text-red-500 text-sm mt-1">{errors.property.message}</div>}
          </div>

          <div>
            <label htmlFor="car" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Dețineți autovehicul? *
            </label>
            <select
              id="car"
              {...register('car')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="yes">Da</option>
              <option value="no">Nu</option>
            </select>
            {errors.car && <div className="text-red-500 text-sm mt-1">{errors.car.message}</div>}
          </div>

          <div>
            <label htmlFor="travel" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Călătoriți în străinătate? *
            </label>
            <select
              id="travel"
              {...register('travel')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="frequent">Frecvent</option>
              <option value="occasional">Ocazional</option>
              <option value="rarely">Rar</option>
              <option value="never">Niciodată</option>
            </select>
            {errors.travel && <div className="text-red-500 text-sm mt-1">{errors.travel.message}</div>}
          </div>

          <div>
            <label htmlFor="performance_sports" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Practicați sporturi de performanță? *
            </label>
            <select
              id="performance_sports"
              {...register('performance_sports')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="yes">Da</option>
              <option value="no">Nu</option>
            </select>
            {errors.performance_sports && <div className="text-red-500 text-sm mt-1">{errors.performance_sports.message}</div>}
          </div>

          <div>
            <label htmlFor="pets" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Dețineți animale de companie? *
            </label>
            <select
              id="pets"
              {...register('pets')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            >
              <option value="">Selectați</option>
              <option value="yes">Da</option>
              <option value="no">Nu</option>
            </select>
            {errors.pets && <div className="text-red-500 text-sm mt-1">{errors.pets.message}</div>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="profession" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Profesia *
            </label>
            <input
              type="text"
              id="profession"
              {...register('profession')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm md:text-base"
            />
            {errors.profession && <div className="text-red-500 text-sm mt-1">{errors.profession.message}</div>}
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
