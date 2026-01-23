import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Acte necesare pentru inmatricularea unei masini electrice in 2025 – Ghid complet | asigurari.ro',
  description: 'Ai cumparat o masina electrica noua? ➤ Afla ce acte sunt necesare pentru inmatriculare in 2025, in Romania sau din UE'
}

const articleData: BlogArticleData = {
  title: 'Acte necesare pentru înmatricularea unei mașini electrice în 2025 – Ghid complet',
  image: '/images/asigurari/blog/common/barbat-semneaza-documente.webp',
  image_alt: 'Barbat semneaza documente intr-un showroom auto',
  intro_text: 'Ai achiziționat o mașină electrică nouă și vrei să o înmatriculezi în România? Procesul de înmatriculare poate părea complex, însă cu informațiile potrivite devine mult mai simplu. În 2025, procedura și lista de documente necesare pentru înmatricularea unui vehicul electric nou sunt bine stabilite, iar diferențele apar în funcție de proveniența mașinii – dacă a fost cumpărată din România sau importată din Uniunea Europeană.',
  toc_items: [
    {
      title: 'Documente necesare pentru înmatricularea unei mașini electrice noi în 2025',
      href: '#documente-necesare-pentru-inmatricularea-unei-masini-electrice'
    },
    {
      title: 'Înmatricularea unei mașini electrice noi cumpărate în România',
      href: '#inmatricularea-unei-masini-electrice-cumparate-din-romania'
    },
    {
      title: 'Înmatricularea unei mașini electrice noi cumpărate din UE',
      href: '#inmatricularea-unei-masini-electrice-cumparate-din-ue'
    }
  ],
  content_sections: [
    {
      id: 'documente-necesare-pentru-inmatricularea-unei-masini-electrice',
      heading: 'Documente necesare pentru înmatricularea unei mașini electrice noi în 2025',
      content: 'Pentru a înmatricula o mașină electrică nouă, trebuie să pregătești un dosar de înmatriculare care să conțină toate actele cerute de autorități. Iată lista documentelor necesare pe care trebuie să le ai în vedere, conform reglementărilor valabile în 2025:',
      lists: [
        {
          items: [
            '<strong>Cererea de înmatriculare</strong> – formular tipizat al solicitantului. Acesta se completează cu datele proprietarului și ale vehiculului și reprezintă cererea formală de înregistrare a mașinii.',
            '<strong>Actul de identitate al proprietarului</strong> – buletinul sau cartea de identitate a persoanei fizice care înmatriculează vehiculul. Dacă înmatricularea este realizată de altcineva pe numele tău, acea persoană va avea nevoie de o procura specială notarială din partea ta.',
            '<strong>Dovada plății certificatului de înmatriculare</strong> – chitanța sau dovada achitării contravalorii certificatului de înmatriculare, în valoare de 49 lei. Plata poate fi făcută online sau la ghișeu, iar certificatul de înmatriculare se va elibera după depunerea dosarului.',
            '<strong>Dovada plății plăcuțelor de înmatriculare</strong> – chitanța pentru taxa plăcuțelor cu număr. Costul standard este de 40 lei pentru plăcuțele auto. Dacă dorești un număr preferențial, se achită suplimentar 45 lei. Aceste sume se pot plăti la depunerea documentelor sau anticipat prin virament bancar.',
            '<strong>Polița de asigurare obligatorie RCA</strong> – copie după contractul de asigurare RCA valabil, încheiat pe numele tău. Fără o asigurare RCA în vigoare, autoritățile nu vor înmatricula mașina. Asigură-te că polița acoperă cel puțin perioada de început.',
            '<strong>Documentul de proprietate</strong> – actul care atestă dreptul tău de proprietate asupra mașinii, în original și copie. Pentru o mașină nouă cumpărată de la dealer în România, va fi factura fiscală. Pentru un vehicul nou adus din străinătate, va fi factura sau contractul de vânzare-cumpărare cu vânzătorul extern. <i>Notă:</i> Acest document trebuie înregistrat și la organul fiscal local.',
            '<strong>Cartea de identitate a vehiculului (CIV)</strong> – documentul tehnic emis de Registrul Auto Român care conține datele de identificare ale mașinii. Pentru mașinile noi cumpărate în România, CIV-ul este furnizat de obicei de dealer odată cu autoturismul. În cazul mașinilor aduse din UE, CIV-ul se obține de la RAR în urma verificărilor tehnice. Fără CIV original, mașina nu poate fi înmatriculată.',
            '<strong>Fișa de înmatriculare vizată de organul fiscal</strong> – dovada că ai înregistrat vehiculul la primăria (Direcția Taxe și Impozite locale) de care aparții. Practic, la achiziția unui vehicul, ai obligația să îl declari la organul fiscal local înainte de înmatriculare, pentru evidența impozitului auto. În prezent, această înregistrare fiscală se realizează prin înscrierea mențiunii sau a unui număr de înregistrare pe documentul de vânzare-cumpărare, ori prin completarea unei declarații de impunere auto. Vei primi o dovadă care se include în dosar. <i>Notă:</i> Mașina nouă trebuie declarată la taxe locale în 30 de zile de la cumpărare, altfel riști amendă.',
            '<strong>Certificatul de conformitate</strong> – acest document emis de producător atestă conformitatea mașinii cu standardele UE. Pentru vehiculele noi, RAR solicită certificatul de conformitate CE în original la momentul omologării/întocmirii CIV. Dacă mașina e cumpărată în România, dealerul îți va furniza COC-ul. Dacă este din import, va trebui să obții COC de la vânzător/producător și să îl prezinți la RAR. După ce RAR emite Cartea de Identitate a Vehiculului, nu mai este nevoie să depui COC-ul în dosarul de înmatriculare.',
            '<strong>Documente suplimentare pentru vehicul din UE</strong> – <i>doar dacă mașina este achiziționată nou din alt stat UE</i>. Conform legii, dacă nu ești plătitor de TVA și ai cumpărat intracomunitar un vehicul nou, trebuie să obții de la ANAF un Certificat care atestă plata TVA pentru vehiculul respectiv. Acest certificat se obține de la administrația financiară prezentând factura mașinii și dovada plății TVA conform procedurii ANAF. Practic, autoritățile vor să se asigure că TVA-ul a fost achitat corect în România pentru mașinile noi aduse din UE, înainte de a le înmatricula.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'inmatricularea-unei-masini-electrice-cumparate-din-romania',
      heading: 'Înmatricularea unei mașini electrice noi cumpărate în România',
      content: 'Dacă ți-ai cumpărat mașina electrică de la un dealer sau showroom din România, procedura de înmatriculare este mai simplă, deoarece vehiculul are deja omologare valabilă în România și toate actele de proveniență în limba română. Iată pașii pe care trebuie să îi urmezi:',
      lists: [
        {
          items: [
            '<strong>Obține documentele mașinii de la dealer:</strong> La achiziția unei mașini electrice noi în România, dealerul îți va furniza factura de cumpărare, certificatul de conformitate (COC) și, de obicei, Cartea de Identitate a Vehiculului (CIV) emisă de RAR. Asigură-te că primești și CIV-ul – pentru mașinile noi vândute în țară, CIV-ul este deja întocmit pe baza omologării de tip a vehiculului. Fără acest document esențial nu poți trece la pasul următor. Dacă, din orice motiv, dealerul nu ți-a dat CIV-ul, va trebui să mergi tu la RAR cu COC-ul și actele mașinii pentru emiterea lui, însă în mod normal nu este cazul la vehiculele noi de la producătorii autorizați.',
            '<strong>Înregistrează fiscal vehiculul la primărie:</strong> Înainte de înmatriculare, trebuie să declari mașina la Direcția de Taxe și Impozite locale de la adresa ta. Completezi o declarație de impunere pentru mijloc de transport în care înscrii datele vehiculului și anexez copia actului de proprietate. Funcționarul fiscal va înregistra mașina în evidențele locale și fie va viza <i>“fișa de înmatriculare”</i> sau va nota pe contract numărul de înregistrare în registrul fiscal. Acest pas este obligatoriu – fără dovada înregistrării fiscale, dosarul de înmatriculare nu va fi acceptat.',
            '<strong>Încheie asigurarea RCA pe numele tău:</strong> Asigurarea de răspundere civilă auto este obligatorie și trebuie să fie valabilă la momentul înmatriculării. Dacă nu ai făcut-o deja, alege un asigurator și încheie polița RCA pentru mașina ta electrică nouă. De regulă, poți obține oferte avantajoase pentru EV-uri, iar polița poate fi emisă imediat. Asigură-te că numele tău este pe poliță și că acoperă cel puțin următoarele 30 de zile. Vei atașa copia poliței RCA în dosar.',
            '<strong>Achită taxele necesare:</strong> Plătește contravaloarea certificatului de înmatriculare și taxa pentru plăcuțe. Dacă dorești un număr preferențial, plătește taxa suplimentară de 45 lei. Aceste plăți se pot face online sau la casieria Serviciului Înmatriculări. Păstrează chitanțele sau dovezile plăților pentru dosar.',
            '<strong>Pregătește dosarul de înmatriculare:</strong> Reunește toate actele menționate în secțiunea anterioară în original și copie: cererea completată, actul tău de identitate, dovada plății certificatului, dovada plății plăcuțelor, polița RCA, factura de achiziție, CIV-ul mașinii și eventuale împuterniciri. Pentru o mașină electrică nouă din România, acestea sunt, în principiu, suficiente. Verifică o dată în plus ca toate să fie corect completate și semnate unde e cazul.',
            '<strong>Depune dosarul la Serviciul Înmatriculări:</strong> Programează-te online la serviciul de înmatriculări (pe site-ul DRPCIV) sau mergi la ghișeu, în funcție de modul de lucru al instituției din județul tău. O programare online te scutește de cozi și îți garantează depunerea dosarului la o oră stabilită. La depunere, vei preda toate documentele și vei opta pentru numărul de înmatriculare: aleatoriu sau preferențial. În 2025, plăcuțele pentru mașinile electrice au caractere verzi – asigură-te că soliciți explicit <i>numere verzi</i> pentru a beneficia de acest statut. Odată depus dosarul complet, vei primi o dovadă și ți se vor comunica termenele de eliberare a actelor. De regulă, pentru o mașină nouă, procesarea este rapidă și poți primi talonul și plăcuțele chiar în aceeași zi sau în câteva zile lucrătoare.'
          ],
          ordered: false
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/showroom-auto.webp',
        alt: 'Un barbat si o femeie care zambesc tinand in maini documente intr-un showroom auto'
      }
    },
    {
      id: 'inmatricularea-unei-masini-electrice-cumparate-din-ue',
      heading: 'Înmatricularea unei mașini electrice noi cumpărate din UE',
      content: 'În cazul în care ai achiziționat o mașină electrică nouă dintr-un alt stat al Uniunii Europene, procesul de înmatriculare include câțiva pași suplimentari față de scenariul cumpărării din România. Mașina fiind nouă, se consideră că nu a mai fost niciodată înmatriculată în străinătate. Iată etapele pe care trebuie să le parcurgi pentru a înmatricula în România un vehicul electric nou adus din UE:',
      subsections: [
        {
          heading: 'Obține documentele de la vânzătorul extern',
          content: 'Asigură-te că ai toate actele originale ale mașinii de la dealerul sau vânzătorul din străinătate. Acestea includ: factura de achiziție sau contractul de vânzare-cumpărare, certificatul de conformitate (COC) în original, eventual o carte de identitate tehnică sau brief de la producător, și, dacă ți s-au emis, numere provizorii de export și documentele aferente. Vei avea nevoie și de o traducere autorizată în limba română a contractului/facturii dacă acestea sunt într-o limbă străină.'
        },
        {
          heading: 'Obține numere roșii',
          content: 'Dacă ai adus mașina pe platformă sau pe roți cu numere provizorii străine deja, poți trece direct la pasul următor. Însă dacă mașina a ajuns în România <i>fără plăcuțe valabile</i> pentru circulație, va trebui să soliciți autorizație de circulație provizorie și numere roșii de la autorități, ca să o poți folosi până la înmatricularea definitivă. Pentru numerele roșii, procedura este separată: depui o cerere, copie RCA, actul de proprietate și actul tău de identitate. Prima autorizație provizorie este valabilă 30 de zile.'
        },
        {
          heading: 'Programare și vizită la RAR pentru omologare și CIV',
          content: 'Acesta este pasul esențial pentru mașinile aduse din afara țării. Trebuie să faci o programare la Registrul Auto Român (RAR) pentru o inspecție tehnică și <i>Cărții de Identitate a Vehiculului (CIV)</i> obținerea i pe numele tău. Programarea se poate face online sau telefonic și, în general, se obține în decurs de câteva zile până la câteva săptămâni, în funcție de disponibilitate. La RAR, vei prezenta: actul tău de identitate, cererea de activitate RAR, certificatul COC al mașinii, factura/contractul de achiziție și, dacă mașina a avut plăcuțe provizorii străine, documentele de înmatriculare provizorie din țara de origine. Inspectori RAR vor verifica seria de șasiu, componentele mașinii, conformitatea cu datele din COC și faptul că vehiculul nu e căutat ca furat. Fiind o mașină nouă, nu va necesita inspecție ITP separată, însă RAR oricum va efectua o verificare tehnică pentru omologare. După inspecție:',
          lists: [
            {
              items: [
                'RAR <strong>va emite Cartea de Identitate a Vehiculului (CIV)</strong> pe numele tău de proprietar. <i>Din iulie 2022, CIV-ul pentru vehicule aduse din UE se eliberează doar pe numele achizitorului menționat în documentele de cumpărare</i> – adică exact pe numele tău, dacă tu ai făcut achiziția intracomunitară.',
                '<strong>Certificatul de autenticitate</strong> de la RAR, în principiu, nu este necesar pentru vehiculele neînmatriculate anterior (noi). Certificatul de autenticitate RAR se cere doar pentru vehicule care au avut înmatriculare în altă țară. Deoarece mașina ta electrică este nouă, RAR nu îți va elibera un certificat de autenticitate. La finalul vizitei la RAR, vei pleca acasă cu Cartea de Identitate a Vehiculului (CIV) și cu raportul de inspecție. Tarifele RAR pentru omologare și emitere CIV pentru vehicule noi din UE sunt în jur de câteva sute de lei.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Obține certificatul privind plata TVA de la ANAF',
          content: 'Dacă mașina importată de tine este considerată “vehicul nou” conform legislației, trebuie să reglezi situația TVA-ului. În majoritatea cazurilor, pentru persoane fizice, asta înseamnă că trebuie să plătești TVA în România pe prețul de achiziție, dacă nu a fost deja aplicat. Practic, te prezinți la administrația fiscală (ANAF) de care aparții, cu factura mașinii și actele tale, și soliciți emiterea Certificatului de atestare a plății TVA pentru achiziția intracomunitară a vehiculului. După ce faci dovada plății TVA (sau dacă în anumite situații nu se datorează TVA suplimentar), ANAF îți va elibera certificatul necesar. Acest document trebuie inclus în dosarul de înmatriculare final și confirmă către DRPCIV că totul e în regulă din punct de vedere fiscal. <i>Notă:</i> Dacă ai achitat TVA în țara de origine dintr-o eroare, va trebui să discuți cu acesta recuperarea TVA-ului extern, deoarece în România oricum trebuie prezentat certificatul ANAF. Situația standard însă e ca dealerul extern să emită factura fără TVA iar tu să achiți TVA aici.'
        },
        {
          heading: 'Declară și înregistrează vehiculul la organul fiscal local',
          content: 'Ca și în cazul mașinilor din România, și vehiculul adus din UE trebuie declarat la primăria de domiciliu. După ce ai Cartea de Identitate de la RAR și actul de vânzare, mergi la Direcția Taxe și Impozite locale și declară mașina. Procedura e similară: completezi declarația de impunere, anexezi copii după CIV, actul de identitate, contractul de vânzare-cumpărare <i>cu viza ANAF</i> pe el și obții înregistrarea în evidențe. Primăria va înscrie vehiculul în registrul mijloacelor de transport și va nota pe contract că mașina e înregistrată fiscal. Păstrează dovada, deoarece o vei pune în dosarul de înmatriculare. (Reamintim: pentru mașinile electrice, multe primării aplică scutire 100% la impozitul anual, deci e posibil să nu plătești nimic, însă declararea este obligatorie).'
        },
        {
          heading: 'Încheie polița RCA și achită taxele de înmatriculare',
          content: 'Dacă nu ai făcut-o deja, acum este momentul să faci <a href="https://www.asigurari.ro/asigurare/rca"><strong>RCA</strong></a> pe numele tău pentru mașină. Apoi achită taxa de 49 lei pentru certificatul de înmatriculare și cea pentru plăcuțe (40 lei standard, sau 85 lei dacă vrei număr preferential – fiind 40 lei + 45 lei). Plățile se pot face online sau la ghișeu; dacă plătești online, tipărește dovada de plată, deși sistemul informatic actual oricum permite confirmarea plății fără hârtie.'
        },
        {
          heading: 'Pregătește dosarul final de înmatriculare',
          content: 'Acum ai toate actele necesare. Dosarul va conține, în mare, aceleași documente ca la o mașină cumpărată din țară, plus cele specifice importului. Fă o ultimă verificare că ai următoarele:',
          lists: [
            {
              items: [
                'Cererea de înmatriculare completată;',
                'Actul de identitate (copie + original pentru verificare);',
                'Actul de proprietate (contract/factură) <i>cu viza organului fiscal local</i> pe el (dovada înregistrării în REMTII – registrul fiscal);',
                'Cartea de Identitate a Vehiculului (CIV) emisă de RAR, original + copie;',
                'Certificatul ANAF privind plata TVA, în original;',
                'Polița RCA (copie);',
                'Dovada plății certificatului de înmatriculare și a plăcuțelor;',
                '[Dacă ai circulat cu numere roșii:] Autorizația de circulație provizorie și plăcuțele roșii (ca să le predai);',
                '[Opțional:] Procura notarială, dacă altcineva depune actele în locul tău.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Depune dosarul la DRPCIV și obține numerele verzi',
          content: 'Ultimul pas este să mergi cu dosarul complet la Serviciul Înmatriculări (DRPCIV) din județul tău. Ideal, fă-ți o programare online pentru a scurta timpul de așteptare. La ghișeu, depui toate documentele și vei preda eventualele plăcuțe provizorii pe care le mai ai. Funcționarul va verifica actele și îți va solicita să alegi numărul de înmatriculare. Poți opta pentru o combinație preferențială sau poți lăsa să ți se aloce un număr la rând. Ține minte să soliciți plăcuțe cu caractere verzi – acestea sunt disponibile exclusiv pentru vehiculele 100% electrice sau pe hidrogen. După aprobarea dosarului, ți se va înmâna dovada înmatriculării și fie vei primi pe loc plăcuțele, fie ți se va comunica în cât timp să revii să le ridici. Certificatul de înmatriculare îți poate fi trimis prin curier sau îl ridici de la ghișeu, conform procedurii locale.'
        }
      ],
      additional_content: 'Înmatricularea unei mașini electrice noi în 2025, fie că este cumpărată din România sau adusă din UE, este un proces bine definit, pe care îl poți parcurge fără probleme dacă pregătești din timp toate actele necesare. Am văzut că dosarul de înmatriculare include documente standard, iar în cazul importului se adaugă pași precum omologarea RAR și certificarea plății TVA. Deși poate părea mult de lucru, avantajul este că, odată realizate toate aceste formalități, te vei bucura de condusul mașinii tale electrice în deplină legalitate și fără griji administrative. Mai mult, vei beneficia de scutiri fiscale și de facilități precum numere verzi ce îți pot aduce parcare gratuită sau acces în zone restricționate – recompense binevenite pentru alegerea unui transport nepoluant.'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
