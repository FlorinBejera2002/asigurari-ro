'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const suggestionsSchema = z.object({
  suggestion_type: z.string().min(1, 'Vă rugăm selectați tipul cererii'),
  last_name: z.string().min(2, 'Numele trebuie să conțină cel puțin 2 caractere'),
  first_name: z.string().min(2, 'Prenumele trebuie să conțină cel puțin 2 caractere'),
  phone: z.string().regex(/^[0-9+\s()-]+$/, 'Număr de telefon invalid'),
  email: z.string().email('Adresă de email invalidă'),
  message: z.string().min(10, 'Mesajul trebuie să conțină cel puțin 10 caractere'),
});

type SuggestionsFormData = z.infer<typeof suggestionsSchema>;

export default function SuggestionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SuggestionsFormData>({
    resolver: zodResolver(suggestionsSchema),
  });

  const onSubmit = async (data: SuggestionsFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/suggestions', {
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
        <div className="max-w-xs">
          <label htmlFor="suggestion_type" className="block text-gray-700 font-medium mb-3 text-sm">
            Tipul cererii
          </label>
          <select
            id="suggestion_type"
            {...register('suggestion_type')}
            className={`w-full px-4 py-3 border ${
              errors.suggestion_type ? 'border-red-500' : 'border-gray-300'
            } rounded-lg ${
              errors.suggestion_type ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
            } transition-all duration-200 bg-white shadow-sm md:hover:shadow-md`}
          >
            <option value="">Selectați tipul cererii</option>
            <option value="petition">Petiție</option>
            <option value="suggestion">Sugestie</option>
            <option value="complaint">Reclamație</option>
          </select>
          {errors.suggestion_type && (
            <div className="text-red-500 text-sm mt-1">{errors.suggestion_type.message}</div>
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
            <label htmlFor="last_name" className="block text-gray-700 font-medium mb-3 text-sm">
              Nume
            </label>
            <input
              type="text"
              id="last_name"
              {...register('last_name')}
              className={`w-full px-4 py-3 border ${
                errors.last_name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.last_name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-all duration-200 bg-white shadow-sm md:hover:shadow-md`}
            />
            {errors.last_name && (
              <div className="text-red-500 text-sm mt-1">{errors.last_name.message}</div>
            )}
          </div>

          <div>
            <label htmlFor="first_name" className="block text-gray-700 font-medium mb-3 text-sm">
              Prenume
            </label>
            <input
              type="text"
              id="first_name"
              {...register('first_name')}
              className={`w-full px-4 py-3 border ${
                errors.first_name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.first_name ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-all duration-200 bg-white shadow-sm md:hover:shadow-md`}
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
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-3 text-sm">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.phone ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-all duration-200 bg-white shadow-sm md:hover:shadow-md`}
            />
            {errors.phone && (
              <div className="text-red-500 text-sm mt-1">{errors.phone.message}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-3 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg ${
                errors.email ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
              } transition-all duration-200 bg-white shadow-sm md:hover:shadow-md`}
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
          <label htmlFor="message" className="block text-gray-700 font-medium mb-3 text-sm">
            Mesaj
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full px-4 py-3 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg ${
              errors.message ? 'focus:border-red-500 focus:ring-red-200' : 'focus:border-blue-500 focus:ring-blue-200'
            } transition-all duration-200 min-h-32 resize-vertical bg-white shadow-sm md:hover:shadow-md`}
          />
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-shrink-0">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-700 flex items-center gap-2 text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-lg font-semibold md:hover:bg-blue-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'SE TRIMITE...' : 'TRIMITE'}</span>
            <i className="fas fa-paper-plane text-base" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
