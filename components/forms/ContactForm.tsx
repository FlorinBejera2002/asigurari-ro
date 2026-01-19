'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

const contactSchema = z.object({
  insurance_type: z.string().min(1, 'Vă rugăm selectați tipul cererii'),
  last_name: z.string().min(2, 'Numele trebuie să conțină cel puțin 2 caractere'),
  first_name: z.string().min(2, 'Prenumele trebuie să conțină cel puțin 2 caractere'),
  phone: z.string().regex(/^[0-9+\s()-]+$/, 'Număr de telefon invalid'),
  email: z.string().email('Adresă de email invalidă'),
  message: z.string().min(10, 'Mesajul trebuie să conțină cel puțin 10 caractere'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const t = useTranslations('asigurari.page.contact');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Mesajul dumneavoastră a fost trimis cu succes!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          A apărut o eroare. Vă rugăm încercați din nou.
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-list-ul text-green-500" aria-hidden="true" />
          Tipul cererii
        </h3>
        <div>
          <label htmlFor="insurance_type" className="block text-gray-700 font-semibold mb-2 text-md">
            Tipul asigurării
          </label>
          <select
            id="insurance_type"
            {...register('insurance_type')}
            className={`w-full px-4 py-3 border ${
              errors.insurance_type ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 ${
              errors.insurance_type ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
            } transition-colors duration-200`}
          >
            <option value="">Selectați tipul asigurării</option>
            <option value="rca">RCA</option>
            <option value="casco">CASCO</option>
            <option value="home">Locuință</option>
            <option value="travel">Călătorie</option>
            <option value="health">Sănătate</option>
            <option value="life">Viață</option>
            <option value="other">Altele</option>
          </select>
          {errors.insurance_type && (
            <div className="text-red-500 text-sm mt-1">{errors.insurance_type.message}</div>
          )}
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-user text-green-500" aria-hidden="true" />
          Informații personale
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label htmlFor="last_name" className="block text-gray-700 font-semibold mb-2 text-md">
              Nume
            </label>
            <input
              type="text"
              id="last_name"
              {...register('last_name')}
              className={`w-full px-4 py-3 border ${
                errors.last_name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.last_name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200`}
            />
            {errors.last_name && (
              <div className="text-red-500 text-sm mt-1">{errors.last_name.message}</div>
            )}
          </div>

          <div>
            <label htmlFor="first_name" className="block text-gray-700 font-semibold mb-2 text-md">
              Prenume
            </label>
            <input
              type="text"
              id="first_name"
              {...register('first_name')}
              className={`w-full px-4 py-3 border ${
                errors.first_name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.first_name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200`}
            />
            {errors.first_name && (
              <div className="text-red-500 text-sm mt-1">{errors.first_name.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-address-book text-green-500" aria-hidden="true" />
          Informații de contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-md">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.phone ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200`}
            />
            {errors.phone && (
              <div className="text-red-500 text-sm mt-1">{errors.phone.message}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-md">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 ${
                errors.email ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-colors duration-200`}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-comment-alt text-green-500" aria-hidden="true" />
          Mesajul dumneavoastră
        </h3>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-md">
            Mesaj
          </label>
          <textarea
            id="message"
            rows={10}
            {...register('message')}
            className={`w-full px-4 py-3 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 ${
              errors.message ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
            } transition-colors duration-200 min-h-32 resize-vertical`}
            style={{ minHeight: '260px' }}
          />
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex-shrink-0">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-900 flex items-center gap-2 text-white px-8 py-4 rounded-md text-lg font-semibold md:hover:bg-blue-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">{isSubmitting ? 'SE TRIMITE...' : 'TRIMITE'}</span>
            <i className="fas fa-paper-plane text-base" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
