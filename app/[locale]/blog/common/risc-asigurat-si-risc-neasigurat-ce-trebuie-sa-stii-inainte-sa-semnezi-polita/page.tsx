import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Risc asigurat si risc neasigurat – ce trebuie sa stii inainte sa semnezi polita | asigurari.ro',
  description: 'Esti acoperit in caz de furt sau inundatie? ➤ Invata sa citesti corect o polita si sa recunosti diferentele intre riscurile acoperite si cele excluse'
}

const articleData: BlogArticleData = {
  title: 'Risc asigurat și risc neasigurat – ce trebuie să știi înainte să semnezi polița',
  image: '/images/asigurari/blog/common/persoana-cu-umbrela.webp',
  image_alt: 'Persoana cu umbrela neagra pe pista unui aeroport, tragand un troler, cu un avion in fundal',
  intro_text: 'Te-ai întrebat vreodată cât te poate costa, în realitate, decizia de a conduce fără o poliță RCA valabilă? Mulți șoferi tratează această poliță ca pe o simplă formalitate, neconștientizând consecințele grave. În România, circulația unui automobil pe drumurile publice este condiționată de deținerea unei polițe RCA valabile. Mai mult, Curtea de Justiție a UE a decis că orice vehicul înmatriculat și funcțional trebuie să aibă RCA valabilă, chiar dacă este parcat pe proprietate privată. Prin urmare, indiferent dacă mașina stă în garaj sau circulă zilnic, legea nu face concesii: fără poliță valabilă, rămâi expus sancțiunilor imediat.|Politica RCA se bazează pe solidaritatea tuturor șoferilor: primele plătite de fiecare susțin plățile pentru accidentările celorlalți. Dacă te scoți din acest sistem, nu ai nicio protecție financiară legală în caz de accident. La prima vedere, poate părea că economisești bani, însă fiecare zi fără poliță validă înseamnă riscuri tot mai mari și cheltuieli neprevăzute. Practic, economisirea obținută astăzi prin lipsa RCA se transformă în pierderi semnificative mâine. În cazul unui control rutier, riscurile financiare apar imediat: dacă nu ai poliță valabilă, legea prevede amendă între 1.000 și 2.000 de lei și reținerea certificatului de înmatriculare. În plus, începând din 2025 autoritățile pot trimite amenzile automat la domiciliu (pe poștă sau direct în cont) folosindu-se de camere și baze de date comune. Cu alte cuvinte, nu trebuie să fii oprit neapărat în trafic ca să primești amenda – riști să primești o sancțiune chiar și „la zero kilometri” condus neasigurat.',
  toc_items: [
    {
      title: 'Definiția riscului în poliță și limitele de acoperire',
      href: '#definitia-riscului-in-polita-si-limitele-de-acoperire'
    },
    {
      title: 'Riscuri acoperite și neacoperite în asigurările auto (RCA și CASCO)',
      href: '#riscuri-acoperite-si-neacoperite-in-asigurarile-auto'
    },
    {
      title: 'Riscuri acoperite și neacoperite în asigurările de locuință (PAD și facultativă)',
      href: '#riscuri-acoperite-si-neacoperite-in-asigurarile-de-locuinta'
    },
    {
      title: 'Riscuri acoperite și neasigurate în asigurările de sănătate',
      href: '#riscuri-acoperite-si-neasigurate-in-asigurarile-de-sanatate'
    },
    {
      title: 'Riscuri acoperite și neasigurate în asigurările de viață',
      href: '#riscuri-acoperite-si-neasigurate-in-asigurarile-de-viata'
    },
    {
      title: 'Riscuri acoperite și neasigurate în asigurările de călătorie',
      href: '#riscuri-acoperite-si-neasigurate-in-asigurarile-de-calatorie'
    }
  ],
  content_sections: [
    {
      id: 'definitia-riscului-in-polita-si-limitele-de-acoperire',
      heading: 'Definiția riscului în poliță și limitele de acoperire',
      content: 'În contractul de asigurare găsești exact definiția riscului asigurat. Conform legislației și uzanțelor, „riscul asigurat este evenimentul care, odată produs, determină obligația asigurătorului de a plăti despăgubirea asiguratului”. Așadar, polița descrie acel eveniment (de ex. accident rutier, incendiu, boală acută, deces) care trebuie să se întâmple pentru ca tu să primești bani de la asigurator. Orice alt eveniment – chiar dacă e nefericit – rămâne „neasigurat” (adică neacoperit) dacă nu e trecut în poliță.|Pe lângă definirea riscului, polița stabilește și suma asigurată sau limitele de plată. De exemplu, pentru RCA legea impune limite maxime de despăgubire pentru daune materiale şi vătămări corporale. Practic, asigurătorul plătește daunele până la limita maximă de răspundere, conform contractului. Dacă prejudiciul este mai mare, tu trebuie să acoperi diferența. Acest lucru se întâmplă și la asigurările facultative de locuință, sănătate sau viață, unde suma asigurată este stabilită de comun acord și menționată în poliță. Așadar, trebuie să verifici întotdeauna valoarea asigurată: ea indică cât vei primi în caz de daună totală. În plus, toate contractele includ și franșiza, o sumă fixă sau procent (ex. 5% din daune) pe care o plătești tu în fiecare eveniment – iar asigurătorul restul.|De ce e important? Pentru că excluderile și limitele pot face diferența între a fi despăgubit integral, parțial sau deloc. De multe ori, neclarități apar din „detalii mici” din condiții. În ghidul asigurărilor de călătorie al ASF se atrage atenția: „Fiți atenți la riscurile acoperite de polița de asigurare. Consultați cu mare atenție toate documentele, inclusiv prevederile referitoare la excluderi”. În contractul CASCO vei găsi un capitol special cu „Riscurile neacoperite”. Tu trebuie să citești aceste secțiuni ca să știi clar ce situații nu vei putea despăgubi.'
    },
    {
      id: 'riscuri-acoperite-si-neacoperite-in-asigurarile-auto',
      heading: 'Riscuri acoperite și neacoperite în asigurările auto (RCA și CASCO)',
      content: '<a href="https://www.asigurari.ro/asigurare/rca"><strong>Asigurarea RCA</strong></a> (Răspundere Civilă Auto) este obligatorie și acoperă exclusiv daunele produse terților de autovehiculul tău. Cu alte cuvinte, dacă tu provoci un accident, RCA plătește reparațiile la mașina celorlalți sau tratamentul lor medical. Iată câteva aspecte esențiale:',
      lists: [
        {
          items: [
            '<strong>Riscuri acoperite:</strong> Daunele produs din accidente (inclusiv dacă tu ești vinovat), acțiunile răufăcătoare ale terților (lovirea mașinii de cineva), fenomene naturale (grindină, inundații, cutremur), furtul autovehiculului, pierderea sau distrugerea părților componente ale mașinii. De obicei mai poți asigura și echipamentele adiționale sau te poți proteja contra unor situații speciale (de exemplu, garanție reparare la dealer sau pistă).',
            '<strong>Riscuri neacoperite:</strong> Polițele CASCO diferă de la companie la companie, așa că trebuie să verifici lista de excluderi. Cele mai frecvente excluderi includ defectele tehnice sau uzura mașinii (de exemplu, eșuarea unei piese din vechime), pagube auto-provocate intenționat sau circumstanțe nepermise (fără permis, sub influență). Alţi factori ca neîntreţinerea corectă a vehiculului sau folosirea lui la activităţi comerciale (transport de marfă contra cost, curse) pot fi de asemenea excluse de unele polițe. Un sfat util: citește cu mare atenție clauzele de excluderi din condițiile CASCO.'
          ],
          ordered: false
        }
      ],
      additional_content: 'În schimb, asigurarea CASCO este facultativă și îți protejează propriul autoturism. Această poliță acoperă daunele proprii, indiferent cine e vinovat de accident. În general, <a href="https://www.asigurari.ro/asigurare/casco"><strong>CASCO</strong></a> acoperă:'
    },
    {
      id: 'riscuri-acoperite-si-neacoperite-in-asigurarile-de-locuinta',
      heading: 'Riscuri acoperite și neacoperite în asigurările de locuință (PAD și facultativă)',
      content: 'Pentru locuința ta există două tipuri de polițe: asigurarea obligatorie PAD și <a href="https://www.asigurari.ro/asigurare/home"><strong>asigurarea facultativă a locuinței</strong></a> (opțională). Aceste două tipuri de asigurări acoperă diferit riscurile la domiciliu:',
      lists: [
        {
          items: [
            '<strong>PAD (Poolul de Asigurare Împotriva Dezastrelor Naturale):</strong> Este o poliță minimă și acoperă strict trei riscuri de catastrofă: cutremur, inundații și alunecări de teren. Nimic altceva nu e despăgubit prin PAD. De exemplu, incendii, spargeri, explozii, furtuni sau orice risc obișnuit nu intră în PAD. Aceasta este o limitare deliberată: PAD e gândit doar pentru cataclisme majore. În situația în care locuința ta suferă daune din aceste trei cauze, PAD poate plăti despăgubiri (în limita a 20.000 EUR/poliță). Dacă locuința este mai valoroasă, poți completa cu altă poliță.',
            '<strong>Asigurarea facultativă de locuință:</strong> Se încheie suplimentar (după PAD) și îți oferă acoperire extinsă. În ea pot fi incluse riscuri precum incendiu, trăsnet, explozie, furtuna (unda de șoc provocată de explozii), refulare a apei din canalizare sau de la conducte, furt cu efracție, scurtcircuit electric, dar și calamități (cutremur, inundații) dincolo de limita PAD. Lista exactă de riscuri acoperite depinde de poliță și companie. De obicei, autoritățile solicită să ai <a href="https://www.asigurari.ro/asigurare/pad"><strong>asigurare PAD</strong></a>, iar facultativa completează protecția către valoarea reală a casei/bunurilor tale.',
            '<strong>Riscuri neacoperite:</strong> Chiar și polița facultativă are excluderi specifice. De obicei sunt excluse pagubele produse de uzură și întreținere necorespunzătoare (de exemplu, deteriorări lente ale instalațiilor, mucegai, igrasie), acte intenționate, pierderi deopotrivă ale bunurilor mobiler neasigurate, fenomene excluse explicit (de ex. inundații cauzate de rețelele de apă locale fără o legătură directă cu un risc asigurat) și altele. Brokerii recomandă insistent să verifici rubrica „Excluderi” a poliței tale. De exemplu, un broker român menționa că un risc neacoperit ar putea fi „infiltrația apelor de pe terasa unui bloc la apartamentele ultimului etaj”. Așadar, pentru locuință, diferența este clară: PAD îți ia în grijă doar dezastrele majore, iar facultativa îți asigură restul riscurilor importante. Dacă apelezi doar la PAD, rămâi vulnerabil la incendiile sau furturile obișnuite – deci trebuie să te consulți cu asiguratorul și să îți setezi bine acoperirea și excluderile din polița facultativă.'
          ],
          ordered: false
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/dormitor-modern.webp',
        alt: 'Dormitor modern, lumina calda, ploaie vizibila pe fereastra'
      }
    },
    {
      id: 'riscuri-acoperite-si-neasigurate-in-asigurarile-de-sanatate',
      heading: 'Riscuri acoperite și neasigurate în asigurările de sănătate',
      content: '<a href="https://www.asigurari.ro/asigurare/health"><strong>Asigurarea privată de sănătate</strong></a> îți oferă acces la servicii medicale pe care sistemul public nu le acoperă complet. În general:',
      lists: [
        {
          items: [
            '<strong>Riscuri acoperite:</strong> Asigurările private de sănătate includ, în pachetul de bază, investigații și tratamente medicale de rutină – de exemplu analize de laborator, consultații medicale, investigații imagistice (radiografie, RMN etc.), transport cu ambulanța și unele servicii stomatologice minime. Pe lângă acestea, multe polițe permit opțional extinderea acoperirii cu servicii suplimentare: tratamente stomatologice complexe (coronițe, implanturi), vaccinuri, monitorizarea bolilor cronice, internări și intervenții chirurgicale în spitale private, tratamente de recuperare, transplant de organe, programe de screening etc. Practic, până la un anumit plafon, poți plăti din avans pentru toate costurile medicale acoperite de polița ta.',
            '<strong>Riscuri neacoperite:</strong> În același timp, există restricții și excluderi importante. Foarte frecvent, bolile preexistente (orice afecțiune de care sufereai înainte de semnarea poliței) nu sunt acoperite. Alături de acestea, se exclud de regulă tratamentele pentru anumite boli grave (cancer, hemofilie, tuberculoză etc.), proceduri de medicină alternativă, tratamentele rezultatelor practicării sporturilor extreme și orice servicii care nu sunt recunoscute de standardul medical. De exemplu, un articol de asigurări de sănătate remarca că asiguratorii „nu asigură costurile pentru bolile preexistente, pentru tratamentul necesar în urma practicării unor sporturi extreme sau pentru serviciile din categoria medicinii alternative”. În plus, polița poate impune perioade de observație („carență”) pentru unele servicii sau limite anuale de plată. În concluzie, înainte să alegi un pachet de sănătate, verifică cu atenție lista de beneficii și lista de excluderi: așa știi clar care tratamente și intervenții vor fi compensate de asigurător și pentru ce vei plăti tu din buzunar.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'riscuri-acoperite-si-neasigurate-in-asigurarile-de-viata',
      heading: 'Riscuri acoperite și neasigurate în asigurările de viață',
      content: '<a href="https://www.asigurari.ro/asigurare/life"><strong>Asigurarea de viață</strong></a> este gândită să-ți protejeze familia financiar în caz că tu, ca asigurat, nu mai ești. Caracteristicile principale sunt:',
      lists: [
        {
          items: [
            '<strong>Riscul asigurat (de bază):</strong> Decesul asiguratului. Dacă tu decedezi în perioada de valabilitate a poliței, asigurătorul va plăti beneficiarilor suma asigurată convenită. Sunt și variante mixte: polițe care includ economisire/investiții, sau cele care acoperă și decese din accident (unde plata este dublă/triplă în caz de accident grav), sau care asociază clauze de invaliditate și boli grave. Însă ideea de bază este aceeași – protejezi financiar familia care rămâne în urma ta.',
            '<strong>Riscuri neacoperite:</strong> Ca orice poliță de asigurare, și cea de viață are excluderi. Un caz tipic: sinuciderea asiguratului. Multe polițe de viață stabilesc că sinuciderea (sau tentativa de suicid) nu este despăgubită dacă se întâmplă în primii ani de la încheierea poliței. De asemenea, unele evenimente nu sunt acoperite: decesul survenit ca urmare a comiterii unei infracțiuni de către asigurat, război (acte de agresiune), contuzie datorată sporturilor extreme neacoperite etc. Autoritățile de protecție a consumatorilor menționează expres că „multe polițe de asigurare de viață au excluderi și limitări” – de exemplu, excluderea sinuciderii în primele luni de la contract. În general, dacă există clauze suplimentare (boli grave, invaliditate), acestea vin cu propriile condiții și excluderi. Ca regulă, citește condițiile de asigurare de viață: trebuie să știi exact în ce situații plata intră în contului familiei tale și când nu.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'riscuri-acoperite-si-neasigurate-in-asigurarile-de-calatorie',
      heading: 'Riscuri acoperite și neasigurate în asigurările de călătorie',
      content: '<a href="https://www.asigurari.ro/asigurare/travel"><strong>Asigurarea medicală de călătorie</strong></a> te protejează față de evenimente neprevăzute în timpul vacanțelor sau deplasărilor. În general:',
      lists: [
        {
          items: [
            '<strong>Riscuri acoperite:</strong> Accidentele și problemele medicale în străinătate (spitalizare, tratament, transport medical, repatriere sanitară) sunt acoperite de regulă. În plus, se includ adesea costurile suplimentare precum anularea călătoriei (clauza storno), pierderea bagajelor sau a actelor de identitate (dacă nu sunt acoperite de altă parte), dar și cheltuieli de salvare/evacuare de urgență. Asigurarea de călătorie reduce semnificativ cheltuielile generate de riscuri precum accidente, îmbolnăvire, pierderea zborului, anularea călătoriei, pierderea bagajului, furt, evacuarea de urgență, repatrierea. Practic, dacă ți se întâmplă ceva grav în vacanță (infecție, fractură, accident), asigurătorul plătește o mare parte din costuri.',
            '<strong>Riscuri neacoperite:</strong> Polițele de călătorie au excluderi stricte. Principalul exemplu este afecțiunile preexistente. Dacă te-ai îmbolnăvit cu ceva înainte să cumperi asigurarea (ex: ai diabet cunoscut), tratamentul pentru acea boală nu va fi decontat de asigurător. Alte excluderi pot fi: situații medicale provocate intenționat, epidemii declarate de autorități, acte de terorism (în funcție de poliță), furt din neglijență (de ex. gențile lăsate nesupravegheate) și altele. Din acest motiv, chiar în contextul călătoriilor, ți se recomandă să citești tot ce scrie în contractul de asigurare (perioada de valabilitate, sumele maxime, și lista de excluderi). În final, vei ști că, pe lângă accidente și probleme medicale, poți include opțional și anularea călătoriei sau pierderea actelor, dar niciun tratament medical anterior nu îți va fi decontat.'
          ],
          ordered: false
        }
      ],
      additional_content: 'În concluzie, un risc asigurat este orice eveniment menționat clar în polița ta care, dacă se produce, obligă asigurătorul să plătească despăgubirea. În schimb, un risc neasigurat este acel eveniment care fie nu este inclus în acoperirea standard, fie este exclus în mod explicit prin clauze contractuale. Diferența dintre cele două poate părea subtilă la început, dar ea face toată diferența atunci când te bazezi pe o asigurare pentru protecția financiară.|Pentru a fi cu adevărat protejat, e important să înțelegi ce acoperă polițele tale și ce nu. Nu presupune nimic – verifică și citește atent condițiile generale și speciale ale fiecărei asigurări: RCA, CASCO, PAD, locuință, sănătate, viață sau călătorie. De exemplu, trebuie să știi că RCA nu acoperă daunele proprii, că PAD acoperă doar trei riscuri catastrofale, iar o asigurare medicală privată poate exclude afecțiunile preexistente. În lipsa acestor informații, poți ajunge în situația neplăcută de a plăti din buzunar daune considerabile, deși credeai că ești asigurat.|În final, asumă-ți controlul asupra propriei protecții. Fă-ți timp să înțelegi ce înseamnă fiecare termen din poliță, pune întrebări acolo unde nu e clar și nu ezita să alegi produse care îți oferă acoperire extinsă, chiar dacă costă puțin mai mult. O alegere informată azi te poate scuti de pierderi majore mâine. Asigură-te că ești acoperit exact așa cum ai nevoie.'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
