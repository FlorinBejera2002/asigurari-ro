import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | Asigurari.ro',
  description: 'Termenii și condițiile de utilizare a platformei Asigurari.ro pentru servicii de intermediere în asigurări.',
};

export default function TermsConditionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <h1 className="sr-only">Termeni și Condiții Asigurari.ro</h1>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Termeni și Condiții</h2>

        <div className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">1. Informații generale</h3>
            <p className="mb-3">
              Prezentul document stabilește termenii și condițiile de utilizare a site-ului Asigurari.ro, operat de Wilson Insurance Broker SRL (denumită în continuare "WIB" sau "Compania").
            </p>
            <p>
              Prin accesarea și utilizarea acestui site, acceptați în mod expres și fără rezerve termenii și condițiile prezentate mai jos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">2. Despre Wilson Insurance Broker SRL</h3>
            <p className="mb-3">
              Wilson Insurance Broker SRL este o societate cu răspundere limitată, înmatriculată la Registrul Comerțului sub numărul J35/722/13.03.2017, având Cod Unic de Înregistrare 37193806.
            </p>
            <p className="mb-3">
              Compania este înscrisă în Registrul Brokerilor sub numărul RBK - 790/29.09.2017 și este autorizată de către Autoritatea de Supraveghere Financiară (ASF) prin decizia 1367/29.09.2017.
            </p>
            <p>
              Sediul social: Strada Coriolan Brediceanu 10, Clădire B, Mezanin, Timișoara 300011, România.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">3. Servicii oferite</h3>
            <p className="mb-3">
              Asigurari.ro oferă servicii de intermediere și consultanță în domeniul asigurărilor generale și de viață, facilitând accesul clienților la produse de asigurare oferite de diverse societăți de asigurare partenere.
            </p>
            <p>
              Serviciile includ, dar nu se limitează la: compararea ofertelor de asigurare, emiterea de polițe de asigurare, asistență în gestionarea daunelor și consultanță în alegerea produselor de asigurare adecvate.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">4. Obligațiile utilizatorului</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Să furnizeze informații corecte și complete în formularele de solicitare de oferte</li>
              <li>Să utilizeze site-ul în conformitate cu legile și reglementările în vigoare</li>
              <li>Să nu utilizeze site-ul în scopuri ilegale sau frauduloase</li>
              <li>Să păstreze confidențialitatea datelor de autentificare (dacă este cazul)</li>
              <li>Să notifice imediat Compania în cazul oricărei utilizări neautorizate a contului</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">5. Proprietate intelectuală</h3>
            <p className="mb-3">
              Tot conținutul prezent pe site-ul Asigurari.ro, inclusiv dar fără a se limita la texte, grafice, logo-uri, imagini, clipuri audio, clipuri video și software, este proprietatea WIB sau a furnizorilor săi de conținut și este protejat de legile privind drepturile de autor și proprietatea intelectuală.
            </p>
            <p>
              Este interzisă reproducerea, distribuirea, modificarea sau utilizarea în orice mod a conținutului site-ului fără acordul scris prealabil al WIB.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">6. Protecția datelor cu caracter personal</h3>
            <p className="mb-3">
              WIB respectă confidențialitatea datelor cu caracter personal ale utilizatorilor și procesează aceste date în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația națională aplicabilă.
            </p>
            <p>
              Pentru informații detaliate despre modul în care sunt procesate datele dumneavoastră personale, vă rugăm să consultați Politica de Confidențialitate disponibilă pe site.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">7. Limitarea răspunderii</h3>
            <p className="mb-3">
              WIB depune toate eforturile pentru a asigura acuratețea informațiilor prezentate pe site, însă nu poate garanta că toate informațiile sunt complete, corecte sau actualizate în permanență.
            </p>
            <p className="mb-3">
              WIB nu își asumă răspunderea pentru:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eventualele erori sau omisiuni în conținutul site-ului</li>
              <li>Întreruperi temporare ale accesului la site din motive tehnice</li>
              <li>Daune directe sau indirecte rezultate din utilizarea sau imposibilitatea de utilizare a site-ului</li>
              <li>Acțiunile sau omisiunile societăților de asigurare partenere</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">8. Link-uri către site-uri terțe</h3>
            <p>
              Site-ul Asigurari.ro poate conține link-uri către site-uri web ale terților. Aceste link-uri sunt furnizate exclusiv pentru comoditatea utilizatorilor. WIB nu controlează și nu își asumă răspunderea pentru conținutul, politicile de confidențialitate sau practicile site-urilor terțe.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">9. Modificări ale termenilor și condițiilor</h3>
            <p>
              WIB își rezervă dreptul de a modifica prezentii termeni și condiții în orice moment, fără notificare prealabilă. Modificările intră în vigoare imediat după publicarea lor pe site. Utilizarea continuă a site-ului după publicarea modificărilor constituie acceptarea acestora.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">10. Legea aplicabilă și jurisdicția</h3>
            <p className="mb-3">
              Prezentii termeni și condiții sunt guvernați de legea română. Orice litigiu care decurge din sau în legătură cu utilizarea site-ului Asigurari.ro va fi soluționat de instanțele competente din România.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">11. Contact</h3>
            <p className="mb-2">Pentru orice întrebări sau clarificări referitoare la prezentii termeni și condiții, ne puteți contacta la:</p>
            <ul className="list-none space-y-1">
              <li>
                <strong>Email:</strong>
                {' '}
               <Link href="mailto:suport@asigurari.ro" className="text-blue-600 hover:underline">suport@asigurari.ro</a>
              </li>
              <li>
                <strong>Telefon:</strong>
                {' '}
               <Link href="tel:+40314257000" className="text-blue-600 hover:underline">+40 314 257 000</a>
              </li>
              <li>
                <strong>Adresă:</strong>
                {' '}Strada Coriolan Brediceanu 10, Clădire B, Mezanin, Timișoara 300011, România
              </li>
            </ul>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Data ultimei actualizări:</strong>
              {' '}Ianuarie 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
