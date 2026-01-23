import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Amenzi si puncte de penalizare in 2025 pentru soferii din Romania | asigurari.ro',
  description: 'Afla totul despre noile amenzi auto 2025 si punctele de penalizare pentru soferii din Romania ➤ Descopera modificarile Codului Rutier 2025 si cum te afecteaza'
}

const articleData: BlogArticleData = {
  title: 'Amenzi și puncte de penalizare în 2025 pentru șoferii din România',
  image: '/images/asigurari/blog/common/masina-oprita-de-politist.webp',
  image_alt: 'Masina oprita de politist pentru incalcarea vitezei admise',
  intro_text: 'În anul 2025, sistemul de sancțiuni pentru șoferii din România a suferit modificări importante, în principal din cauza creșterii salariului minim și a neplafonării valorii punctului de amendă. Valoarea punctului de amendă este stabilită la 5% din salariul minim brut pe economie, iar odată cu majorarea salariului minim, punctul de amendă a crescut. Această modificare a dus la creșterea cu peste 20% a tuturor amenzilor contravenționale rutiere față de anul precedent.',
  toc_items: [
    {
      title: 'Prezentare generală a sistemului de sancțiuni auto în 2025',
      href: '#sistemul-de-sanctiuni-auto-prezentare-generala'
    },
    {
      title: 'Amenzi și puncte de penalizare pentru principalele încălcări',
      href: '#amenzi-si-puncte-de-penalizare'
    },
    {
      title: 'Impactul punctelor de penalizare asupra permisului de conducere',
      href: '#impactul-punctelor-de-penalizare-asupra-permisului'
    },
    {
      title: 'Sfaturi pentru evitarea amenzilor și menținerea legalității',
      href: '#sfaturi-pentru-evitarea-amenzilor'
    }
  ],
  content_sections: [
    {
      id: 'sistemul-de-sanctiuni-auto-prezentare-generala',
      heading: 'Prezentare generală a sistemului de sancțiuni auto în 2025',
      content: 'Contravențiile rutiere sunt împărțite pe <strong>clase de sancțiuni</strong>, în funcție de gravitatea faptei, fiecare clasă corespunzând unui anumit număr de puncte-amendă și, implicit, unui cuantum în lei al amenzii. Pentru persoanele fizice, există patru clase principale de amenzi contravenționale:',
      lists: [
        {
          items: [
            '<strong>Clasa I:</strong> 2–3 puncte-amendă (405 – 607,5 lei)',
            '<strong>Clasa a II-a:</strong> 4–5 puncte-amendă (810 – 1.012,5 lei)',
            '<strong>Clasa a III-a:</strong> 6–8 puncte-amendă (1.215 – 1.620 lei)',
            '<strong>Clasa a IV-a:</strong> 9–20 puncte-amendă (1.822,5 – 4.050 lei)'
          ],
          ordered: false
        }
      ],
      additional_content: 'Pe lângă amenzile în bani, șoferii pot primi și <strong>puncte de penalizare</strong> la permisul de conducere. Acestea sunt puncte de sancțiune administrativă care se acumulează în evidența permisului șoferului, separate de punctele-amendă (valorice). În funcție de gravitatea contravenției, polițistul rutier aplică între 2 și 6 puncte de penalizare pentru o abatere obișnuită . Dacă încălcarea este foarte gravă, se poate dispune și <strong>suspendarea permisului de conducere</strong>, fie ca sancțiune complementară directă pentru fapta respectivă, fie ca urmare a cumulului de puncte de penalizare.'
    },
    {
      id: 'amenzi-si-puncte-de-penalizare',
      heading: 'Amenzi și puncte de penalizare pentru principalele încălcări',
      content: 'După ce am discutat despre sancțiunile generale și structura sistemului de penalizare pentru șoferi în 2025, este important să ne concentrăm acum asupra celor mai frecvente încălcări ale regulilor de circulație.',
      subsections: [
        {
          heading: 'Depășirea vitezei legale',
          content: 'Încălcarea limitelor de viteză este una dintre cele mai frecvente contravenții și, totodată, o cauză majoră a accidentelor rutiere. Conform Codului Rutier actualizat, categoriile de sancțiuni pentru viteză sunt următoarele:',
          lists: [
            {
              items: [
                '<strong>Depășire cu 10–20 km/h</strong> peste limita legală: Amendă din clasa I (2–3 puncte-amendă) și 2 puncte de penalizare',
                '<strong>Depășire cu 21–30 km/h:</strong> Amendă din clasa a II-a (4–5 puncte-amendă) și 3 puncte de penalizare',
                '<strong>Depășire cu 31–40 km/h:</strong> Amendă din clasa a III-a (6–8 puncte-amendă) și 4 puncte de penalizare',
                '<strong>Depășire cu 41–50 km/h:</strong> Amendă din clasa a IV-a (9–20 puncte-amendă) și 6 puncte de penalizare',
                '<strong>Depășire cu peste 50 km/h:</strong> Amendă din clasa a IV-a (9–20 puncte-amendă) și suspendarea permisului de conducere pentru 90 de zile',
                '<strong>Depășire cu peste 70 km/h:</strong> Amendă din clasa a IV-a (9–20 puncte-amendă) și suspendarea permisului pentru 120 de zile'
              ],
              ordered: false
            }
          ],
          additional_content: 'Cuantumul efectiv al amenzii în lei depinde de numărul de puncte aplicat. Rețineți că, dacă depășiți limita de viteză cu mai mult de 50 km/h, pe lângă amenda substanțială, veți rămâne pieton pentru 3 luni, iar dacă depășiți cu peste 70 km/h, pentru 4 luni.'
        },
        {
          heading: 'Conducerea sub influența alcoolului',
          content: 'Legislația rutieră din România prevede <strong>toleranță zero</strong> în privința consumului de alcool la volan. Practic, orice nivel de alcoolemie detectat peste 0,0 poate atrage sancțiuni, însă gravitatea acestora diferă în funcție de concentrația de alcool. Există două categorii principale:',
          lists: [
            {
              items: [
                '<strong>Contravenție (alcool în limite sub pragul penal):</strong> Dacă un șofer este depistat cu o alcoolemie de până la aproximativ 0,40 mg/l alcool pur în aerul expirat, fapta constituie contravenție. Sancțiunea este o amendă din clasa a IV-a și <strong>suspendarea permisului pentru 90 de zile</strong>. Nu există posibilitatea de reducere a perioadei de suspendare prin examen, în cazurile de alcool, deci șoferul sancționat va trebui să aștepte expirarea celor 90 de zile pentru a-și recăpăta permisul,',
                '<strong>Infracțiune (alcool peste limita legală penală):</strong> Dacă concentrația de alcool depășește 0,40 mg/l în aerul expirat (respectiv peste 0,80 g/l în sânge), fapta devine infracțiune conform Codului Penal. În acest caz, șoferul este condus la o unitate medicală pentru recoltare de probe biologice, iar dacă se confirmă alcoolemia peste prag, se întocmește dosar penal. Pedeapsa prevăzută este <strong>închisoarea de la 1 la 5 ani</strong> sau măsuri penale alternative, iar permisul de conducere este suspendat pe durata anchetei și eventual anulat în urma unei condamnări.'
              ],
              ordered: false
            }
          ],
          additional_content: '<strong>Atenție:</strong> Șoferii trebuie să fie conștienți că și o alcoolemie <i>mică</i>, sub limita penală, este aspru sancționată contravențional. Cel mai sigur este ca, dacă ați consumat orice cantitate de alcool, să <strong>nu vă urcați la volan deloc</strong>. De asemenea, rețineți că refuzul de a fi testat (cu etilotestul sau de a da probe de sânge) este și el incriminat de lege și se pedepsește ca infracțiune separat.'
        },
        {
          heading: 'Folosirea telefonului mobil la volan',
          content: 'Utilizarea telefonului mobil în timpul condusului, fără dispozitiv tip hands-free, este interzisă expres prin lege. Ordonanța de Urgență nr. 11/2019 a introdus reguli mai stricte, astfel că este sancționată ținerea în mână sau folosirea cu mâinile a telefonului mobil ori a oricărui dispozitiv electronic în timpul conducerii unui vehicul aflat în mișcare.|Sancțiunile pentru această abatere sunt severe: șoferii prinși că vorbesc, tastează mesaje sau filmează cu telefonul în mână la volan riscă o amendă încadrată în clasa a III-a de sancțiuni și aplicarea a 4 puncte de penalizare. Mai mult, legislația prevede o sancțiune agravantă: dacă șoferul folosește telefonul în mână și <i>concomitent încalcă o altă regulă de circulație</i>, pe lângă amenda și punctele de penalizare menționate, se aplică și <strong>suspendarea permisului pentru 30 de zile</strong>.'
        },
        {
          heading: 'Neacordarea de prioritate',
          content: 'Neacordarea priorității este o abatere care se referă atât la nerespectarea priorității altor vehicule în trafic, cât și la neacordarea priorității pietonilor angajați regulamentar în traversare. Această încălcare a regulilor de circulație este deosebit de periculoasă și este sancționată pe măsură:',
          lists: [
            {
              items: [
                'Dacă un șofer nu acordă prioritate unui alt vehicul care are acest drept sau unui pieton aflat pe trecere, sancțiunea standard este de 5 puncte-amendă și <strong>suspendarea permisului pentru 30 de zile</strong>.',
                '<strong>Agravant:</strong> Dacă neacordarea de prioritate a dus la producerea unui accident de circulație soldat doar cu pagube materiale (tamponare), atunci sancțiunea crește la 6–8 puncte-amendă și <strong>suspendarea dreptului de a conduce pentru 60 de zile</strong>.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Nepurtarea centurii de siguranță',
          content: 'Obligativitatea centurii de siguranță pentru toți ocupanții vehiculului este prevăzută clar de lege, iar nerespectarea acestei obligații constituie contravenție. Sancțiunea pentru nepurtarea centurii de siguranță este încadrată în clasa I: amendă de 2–3 puncte-amendă. Pe lângă amendă, șoferul va primi și puncte de penalizare. Codul Rutier prevede că lipsa centurii se sancționează cu 2 puncte de penalizare pentru conducătorul auto.'
        },
        {
          heading: 'Trecerea pe culoarea roșie a semaforului',
          content: 'Trecerea pe roșu la semafor este una dintre cele mai grave încălcări ale regulilor de circulație, deoarece poate duce la accidente în intersecții, cu urmări deosebit de grave. Legea prevede sancțiuni pe măsură: șoferii care nu respectă culoarea roșie a semaforului vor fi sancționați cu 4 sau 5 puncte de amendă și, suplimentar, cu <strong>suspendarea permisului de conducere pentru 30 de zile</strong>. Sancțiunea este directă și se aplică indiferent dacă a rezultat sau nu un incident; dacă însă trecerea pe roșu a cauzat un accident cu pagube materiale, se va intra în scenariul agravant de <strong>suspendare 60 de zile</strong>. Însă, de regulă, simpla constatare a încălcării culorii roșii de către polițist implică reținerea permisului pe loc.|Există <i>foarte puține situații</i> în care legea permite unui vehicul să treacă pe roșu, cum ar fi cazul când semaforul nu funcționează/corelează cu indicatoare sau dacă există un semafor cu <i>săgeată verde intermitentă la dreapta</i>.'
        },
        {
          heading: 'Lipsa inspecției tehnice periodice (ITP) valabile',
          content: '<strong>Inspecția Tehnică Periodică (ITP)</strong> este verificarea periodică obligatorie a stării tehnice a vehiculului. Fără un ITP valabil, mașina <i>nu are drept de circulație</i> pe drumurile publice. Conducerea unui autoturism aflat în această situație constituie o abatere foarte gravă.|De fapt, șoferul care circulă cu ITP expirat comite <strong>două contravenții simultan</strong>:',
          lists: [
            {
              items: [
                '<strong>Conducerea unui vehicul fără inspecție tehnică valabilă</strong> – sancționată cu amendă între 9 și 20 de puncte-amendă (clasa a IV-a).',
                '<strong>Conducerea unui vehicul cu înmatricularea suspendată</strong> – sancționată separat cu 20 de puncte-amendă (tot clasa a IV-a, la nivelul maxim).'
              ],
              ordered: false
            }
          ],
          additional_content: 'Pe lângă amenda uriașă, poliția va reține <strong>certificatul de înmatriculare</strong> și <strong>plăcuțele de înmatriculare</strong> ale vehiculului. Practic, mașina nu mai poate fi folosită deloc pe drum până la remedierea situației. Proprietarul va trebui să efectueze de urgență inspecția tehnică la R.A.R. și să obțină un ITP valabil, apoi să se prezinte cu dovada la Poliție pentru a-și recupera talonul și plăcuțele.|<strong>Important:</strong> Nu există puncte de penalizare asociate direct pentru lipsa ITP, însă consecințele financiare și administrative sunt extrem de severe. Este esențial să verificați periodic data expirării ITP-ului și să nu circulați dacă a expirat.'
        },
        {
          heading: 'Lipsa asigurării obligatorii (RCA)',
          content: '<strong>Asigurarea de Răspundere Civilă Auto (RCA)</strong> este obligatorie prin lege pentru toate vehiculele care circulă pe drumurile publice. Lipsa unei polițe RCA valide atrage sancțiuni imediate și drastice, chiar dacă nu ați fost implicat în vreun accident. În cadrul oricărui control rutier de rutină, polițiștii vă pot cere dovada existenței asigurării RCA; dacă nu o puteți prezenta, veți fi sancționat contravențional. De asemenea, agenții vor <strong>reține certificatul de înmatriculare</strong> și <strong>plăcuțele de înmatriculare ale vehiculului</strong>. Vehiculul poate rămâne fără drept de circulație pe loc până când se încheie o poliță RCA și se fac demersurile de restituire a actelor. În plus, dacă au trecut peste 90 de zile de la expirarea ultimei polițe RCA, înregistrarea mașinii în circulație poate fi suspendată în evidențele autorităților|Consecințele pot fi și mai grave în cazul producerii unui accident fără <a href="https://www.asigurari.ro/asigurare/rca"><strong>RCA</strong></a>: șoferul neasigurat va fi personal răspunzător pentru toate pagubele produse. În astfel de cazuri, despăgubirea victimei va fi achitată inițial de către un fond special (Fondul de Protecție a Victimelor Străzii), care însă ulterior va recupera integral sumele de la șoferul vinovat. Acest lucru poate însemna datorii de zeci sau chiar sute de mii de lei pentru daune materiale și mai ales vătămări corporale.|Având în vedere riscurile enorme, este imperativ ca toți șoferii să mențină asigurarea RCA activă. Polița RCA se poate achiziționa ușor, 100% online, rapid, prin platforma <a href="https://www.asigurari.ro/"><strong>asigurari.ro</strong></a> unde puteți compara ofertele mai multor asiguratori și alege cea mai convenabilă variantă.'
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/telefonul-mobil-la-volan.webp',
        alt: 'Barbat prins de catre politisti cu telefonul mobil in mana la volan'
      }
    },
    {
      id: 'impactul-punctelor-de-penalizare-asupra-permisului',
      heading: 'Impactul punctelor de penalizare asupra permisului de conducere',
      content: '<strong>Punctele de penalizare</strong> au rolul de a descuraja abaterile repetate și de a identifica șoferii indisciplinați. Fiecare contravenție rutieră (din cele care nu implică direct suspendarea permisului) aduce, cum am menționat, un anumit număr de puncte de penalizare înscrise în evidența șoferului. Aceste puncte se cumulează pe o perioadă determinată.|Limita maximă de puncte de penalizare permise înainte de suspendare este de <strong>15 puncte</strong>. Dacă un conducător auto acumulează <strong>cel puțin 15 puncte de penalizare</strong> într-un interval de 6 luni, el își <strong>pierde dreptul de a conduce pentru 30 de zile</strong>. Procedura este următoarea: poliția rutieră îi transmite șoferului o notificare prin care este informat că a atins plafonul de puncte și este obligat ca, în termen de 5 zile lucrătoare de la primirea înștiințării, să predea voluntar permisul de conducere. Suspendarea dreptului de a conduce începe de la data predării permisului (sau expirarea celor 5 zile, dacă nu l-a predat).|<strong>Atenție:</strong> Dacă șoferul nu predă permisul în acel termen de 5 zile și continuă să conducă, perioada de suspendare se poate prelungi automat cu încă 30 de zile ca sancțiune suplimentară.|Punctele de penalizare însă nu rămân definitive în cazierul conducătorului auto. Dacă, după primirea lor, șoferul nu mai săvârșește alte contravenții, <strong>punctele se anulează automat după 6 luni</strong> de la data aplicării sancțiunii. De asemenea, în momentul în care se dispune suspendarea efectivă a permisului toate punctele de penalizare acumulate se resetează la zero. Astfel, după ce șoferul își redobândește permisul, el pornește cu „cazierul” curat din punctul de vedere al punctelor de penalizare.|Totuși, legea prevede sancțiuni mai dure pentru <strong>repetarea abaterilor</strong> într-un interval scurt. Dacă un conducător auto, după ce și-a recăpătat permisul în urma unei suspendări, acumulează din nou 15 puncte de penalizare în următoarele 12 luni, perioada de suspendare va fi de 60 de zile la a doua abatere cumulativă, iar a treia oară suspendarea va fi de 90 de zile.|<strong>Un alt aspect important:</strong> Pentru unele suspendări de permis legislația permite reducerea perioadei de suspendare prin susținerea unui <strong>test de verificare a cunoștințelor</strong> (examen tip 13 din 15). De regulă, șoferii cu suspendare 60 sau 90 de zile pot, dacă întrunesc condițiile legale, să dea acest test la poliție; dacă îl promovează, li se poate reduce perioada de suspendare cu 30 de zile. Însă, repetăm, în cazurile de suspendare pentru alcool sau refuz de testare, nu există posibilitatea reducerii suspendării.'
    },
    {
      id: 'sfaturi-pentru-evitarea-amenzilor',
      heading: 'Sfaturi pentru evitarea amenzilor și menținerea legalității',
      content: 'Respectarea regulilor de circulație nu numai că vă ferește de amenzi și penalizări, dar, cel mai important, previne accidente și vă protejează viața. Iată câteva sfaturi practice pentru a rămâne în legalitate și a conduce în siguranță:',
      lists: [
        {
          items: [
            '<strong>Respectați limitele de viteză:</strong> Adaptați viteza la condițiile de drum și țineți cont de limitele legale. Folosiți pilotul automat sau alertele de viteză ale mașinii, dacă le aveți, pentru a nu depăși neintenționat limita.',
            '<strong>Nu conduceți sub influența alcoolului sau a substanțelor:</strong> Cel mai sigur este să <i>nu consumați deloc alcool înainte de a conduce</i>. Dacă totuși ați băut, folosiți un taxi, un șofer de rezervă sau alte alternative.',
            '<strong>Evitați orice distragere la volan:</strong> Nu folosiți telefonul mobil decât cu hands-free și doar pentru apeluri esențiale. Nu trimiteți mesaje și nu navigați pe internet în timp ce conduceți. Chiar și dispozitivele GPS trebuie programate înainte de plecare, nu în mers.',
            '<strong>Acordați prioritate și conduceți defensiv:</strong> Fie că e vorba de pietoni la treceri sau alte vehicule în intersecții și sensuri giratorii, respectați prioritatea legală. Fiți prevăzător și anticipați acțiunile celorlalți participanți la trafic, astfel încât să puteți reacționa din timp.',
            '<strong>Purtați centura și asigurați-vă că toți pasagerii o poartă:</strong> Este o măsură simplă care vă poate salva viața. În plus, vă scutește de amenzi. Asigurați și copiilor sisteme de retenție adecvate (scaune speciale), conform legii.',
            '<strong>Respectați semnificația semaforelor și a indicatoarelor:</strong> Opriți complet la culoarea roșie a semaforului și la STOP, respectați limitele de înălțime, accesul interzis, sensurile unice etc.',
            '<strong>Verificați periodic documentele vehiculului:</strong> Țineți evidența scadenței ITP-ului și a poliței RCA. Notați-vă datele de expirare și ocupați-vă din timp de reînnoire. În plus, aveți mereu în mașină actele în original (permis, talon, RCA) sau copii electronice acolo unde e acceptat.',
            '<strong>Fiți informat despre modificările legislative:</strong> Codul Rutier poate suferi modificări - informați-vă periodic din surse oficiale.',
            '<strong>Conduceți preventiv și cu politețe:</strong> Păstrați distanța de siguranță față de vehiculul din față, semnalizați din timp orice manevră, nu bruscați frânele inutil și nu tăiați calea altor mașini.'
          ],
          ordered: false
        }
      ],
      additional_content: 'Respectând aceste sfaturi și legislația rutieră în ansamblu, veți reuși să evitați în mare măsură amenzile și punctele de penalizare. În plus, veți contribui la un trafic mai sigur pentru toată lumea.|În definitiv, regulile rutiere și sancțiunile nu sunt decât un cadru menit să ne protejeze pe toți. Evitând încălcările – prin atenție sporită, disciplină și bun simț în trafic – veți ajunge în siguranță la destinație de fiecare dată. Conducerea prudentă și legală este, pe termen lung, cea mai bună strategie atât pentru confortul personal, cât și pentru siguranța rutieră colectivă. Conduceți cu grijă și rămâneți în legalitate!'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
