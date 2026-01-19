import type { Metadata } from 'next';
import DntPersonForm from '@/components/forms/DntPersonForm';

export const metadata: Metadata = {
  title: 'Formular DNT Persoană Fizică | Asigurari.ro',
  description: 'Formular de evaluare a cerințelor și nevoilor clientului pentru persoane fizice conform reglementărilor ASF.',
};

export default function DntPersonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <strong>Formular de evaluare a cerințelor și nevoilor clientului - Persoană Fizică</strong>
        </h1>
      </div>
      <div className="bg-white rounded-xl shadow-sm mx-auto overflow-hidden">
        <div className="px-4 md:px-6 py-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 border-l-4 border-green-500 pl-4 leading-relaxed">
            Conform reglementărilor ASF, brokerii de asigurare au obligația de a evalua cerințele și nevoile clienților înainte de a recomanda produse de asigurare. Vă rugăm să completați formularul de mai jos pentru a ne ajuta să vă oferim cele mai potrivite soluții de asigurare.
          </p>
        </div>
        <div className="px-4 md:px-6">
          <DntPersonForm />
        </div>
      </div>
    </div>
  );
}
