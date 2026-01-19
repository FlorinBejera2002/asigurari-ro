import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica GDPR - Protecția Datelor Personale | Asigurari.ro',
  description: 'Politica de protecție a datelor personale conform GDPR. Aflați cum procesăm și protejăm datele dumneavoastră personale.',
};

export default function GDPRPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Politica de Protecție a Datelor Personale (GDPR)</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">1. Introducere</h2>
            <p className="mb-3">
              Wilson Insurance Broker SRL (denumită în continuare "WIB", "noi" sau "Compania") respectă confidențialitatea datelor cu caracter personal ale utilizatorilor și se angajează să protejeze aceste date în conformitate cu Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date (GDPR) și Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR.
            </p>
            <p>
              Prezenta politică descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră personale atunci când utilizați site-ul Asigurari.ro și serviciile noastre.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">2. Operator de date</h2>
            <p className="mb-2">Operatorul de date cu caracter personal este:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Wilson Insurance Broker SRL</strong></p>
              <p>CUI: 37193806</p>
              <p>Nr. Reg. Com.: J35/722/13.03.2017</p>
              <p>Adresă: Strada Coriolan Brediceanu 10, Clădire B, Mezanin, Timișoara 300011, România</p>
              <p>Email: suport@asigurari.ro</p>
              <p>Telefon: +40 314 257 000</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">3. Categorii de date personale prelucrate</h2>
            <p className="mb-3">În funcție de serviciile solicitate, putem prelucra următoarele categorii de date personale:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date de identificare:</strong> nume, prenume, CNP/CIF, seria și numărul actului de identitate</li>
              <li><strong>Date de contact:</strong> adresă de email, număr de telefon, adresă poștală</li>
              <li><strong>Date financiare:</strong> informații despre cont bancar (pentru plăți și rambursări)</li>
              <li><strong>Date despre vehicul:</strong> număr de înmatriculare, marca, modelul, anul fabricației (pentru asigurări auto)</li>
              <li><strong>Date despre proprietate:</strong> adresa proprietății, suprafața, anul construcției (pentru asigurări de locuință)</li>
              <li><strong>Date de navigare:</strong> adresă IP, tip de browser, pagini vizitate, durata vizitei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">4. Scopurile și temeiurile prelucrării</h2>
            <p className="mb-3">Prelucrăm datele dumneavoastră personale pentru următoarele scopuri:</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">4.1. Executarea contractului</h3>
                <p>Prelucrăm datele pentru a vă oferi servicii de intermediere în asigurări, a emite polițe de asigurare și a gestiona relația contractuală cu dumneavoastră.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">4.2. Obligații legale</h3>
                <p>Prelucrăm datele pentru a respecta obligațiile legale care ne revin, inclusiv obligațiile fiscale, contabile și de raportare către autoritățile competente.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">4.3. Interese legitime</h3>
                <p>Prelucrăm datele pentru îmbunătățirea serviciilor noastre, prevenirea fraudelor, marketing direct și analiză statistică.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">4.4. Consimțământ</h3>
                <p>Pentru anumite activități de prelucrare, cum ar fi trimiterea de comunicări de marketing prin email sau utilizarea cookie-urilor analitice, vom solicita consimțământul dumneavoastră explicit.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">5. Destinatarii datelor personale</h2>
            <p className="mb-3">Datele dumneavoastră personale pot fi divulgate următorilor destinatari:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Societăți de asigurare:</strong> pentru emiterea polițelor de asigurare și gestionarea daunelor</li>
              <li><strong>Furnizori de servicii:</strong> pentru servicii de hosting, procesare plăți, marketing și analiză</li>
              <li><strong>Autorități publice:</strong> atunci când este necesar pentru respectarea obligațiilor legale</li>
              <li><strong>Consultanți și auditori:</strong> pentru servicii profesionale de consultanță și audit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">6. Transferul datelor în afara UE</h2>
            <p>
              În general, datele dumneavoastră personale sunt stocate și prelucrate în Uniunea Europeană. În cazul în care este necesar să transferăm date în afara UE, vom asigura implementarea garanțiilor adecvate conform GDPR (de exemplu, clauze contractuale standard aprobate de Comisia Europeană).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">7. Perioada de stocare a datelor</h2>
            <p className="mb-3">
              Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate sau pentru respectarea obligațiilor legale:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Date contractuale: pe durata contractului și 10 ani după încetarea acestuia (conform legislației în domeniul asigurărilor)</li>
              <li>Date fiscale și contabile: 10 ani de la încheierea exercițiului financiar</li>
              <li>Date de marketing: până la retragerea consimțământului sau 3 ani de la ultima interacțiune</li>
              <li>Date de navigare (cookie-uri): conform politicii de cookie-uri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">8. Drepturile dumneavoastră</h2>
            <p className="mb-3">Conform GDPR, aveți următoarele drepturi:</p>
            
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul de acces</h3>
                <p className="text-sm">Puteți solicita informații despre datele personale pe care le prelucrăm despre dumneavoastră.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul la rectificare</h3>
                <p className="text-sm">Puteți solicita corectarea datelor personale inexacte sau incomplete.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul la ștergere ("dreptul de a fi uitat")</h3>
                <p className="text-sm">Puteți solicita ștergerea datelor personale în anumite condiții.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul la restricționarea prelucrării</h3>
                <p className="text-sm">Puteți solicita restricționarea prelucrării datelor în anumite situații.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul la portabilitatea datelor</h3>
                <p className="text-sm">Puteți primi datele personale într-un format structurat și puteți solicita transferul acestora către alt operator.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul de opoziție</h3>
                <p className="text-sm">Puteți vă opune prelucrării datelor pentru marketing direct sau pe baza intereselor legitime.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrare automatizată</h3>
                <p className="text-sm">Puteți solicita intervenția umană în procesul decizional automatizat.</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-bold mb-1">Dreptul de a depune o plângere</h3>
                <p className="text-sm">Puteți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
              </div>
            </div>

            <p className="mt-4">
              Pentru exercitarea acestor drepturi, vă rugăm să ne contactați la adresa
              {' '}
             <Link href="mailto:suport@asigurari.ro" className="text-blue-600 hover:underline font-semibold">suport@asigurari.ro</a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">9. Securitatea datelor</h2>
            <p className="mb-3">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva pierderii, distrugerii, accesului neautorizat, modificării sau divulgării:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptarea datelor în tranzit și în repaus</li>
              <li>Controale stricte de acces la date</li>
              <li>Monitorizarea și auditarea regulată a sistemelor</li>
              <li>Instruirea personalului în domeniul protecției datelor</li>
              <li>Proceduri de răspuns la incidente de securitate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">10. Modificări ale politicii</h2>
            <p>
              Ne rezervăm dreptul de a modifica prezenta politică de confidențialitate. Orice modificare va fi publicată pe această pagină, iar modificările semnificative vor fi comunicate prin email sau prin notificare pe site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-800">11. Contact</h2>
            <p className="mb-3">Pentru orice întrebări referitoare la prelucrarea datelor dumneavoastră personale, ne puteți contacta:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong><Link href="mailto:suport@asigurari.ro" className="text-blue-600 hover:underline">suport@asigurari.ro</a></p>
              <p><strong>Telefon:</strong><Link href="tel:+40314257000" className="text-blue-600 hover:underline">+40 314 257 000</a></p>
              <p><strong>Adresă:</strong> Strada Coriolan Brediceanu 10, Clădire B, Mezanin, Timișoara 300011, România</p>
            </div>
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
