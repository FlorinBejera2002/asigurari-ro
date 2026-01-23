import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Cum sa vinzi o masina second-hand. Pasi si documente necesare | asigurari.ro',
  description: 'Afla cum sa vinzi o masina second-hand ➤ Pasi esentiali si documente necesare pentru o tranzactie rapida si fara probleme ➤ Informatie despre transferul de proprietate si asigurarea RCA'
}

const articleData: BlogArticleData = {
  title: 'Ghid pentru achiziționarea unei mașini second-hand. Documente necesare',
  image: '/images/asigurari/blog/common/showroom-masini.webp',
  image_alt: 'Showroom cu masini second-hand',
  intro_text: 'Achiziționarea unei mașini second-hand poate fi o alternativă excelentă pentru cei care doresc să evite costurile ridicate ale unei mașini noi. Totuși, acest proces implică atenție sporită la detalii și la documentele necesare pentru ca tranzacția să se desfășoare fără probleme. Indiferent dacă este prima dată când cumperi o mașină second-hand sau ai mai trecut prin această experiență, este important să te asiguri că primești toate actele în regulă și că vehiculul este într-o stare tehnică corespunzătoare.|Acest ghid îți oferă pașii esențiali pe care trebuie să îi urmezi și documentele necesare pentru achiziționarea unei mașini second-hand, astfel încât să ai parte de o tranzacție sigură și transparentă.',
  toc_items: [
    {
      title: 'Ce trebuie să verifici înainte de achiziție',
      href: '#ce-trebuie-sa-verifici-inainte-de-achizitie'
    },
    {
      title: 'Documente necesare la achiziționarea unei mașini second-hand',
      href: '#documente-necesare'
    },
    {
      title: 'Finalizarea tranzacției și procedurile de înmatriculare',
      href: '#finalizarea-tranzactiei-si-inmatriculare'
    },
    {
      title: 'Importanța asigurării RCA pentru noul proprietar',
      href: '#importanta-asigurarii-rca'
    }
  ],
  content_sections: [
    {
      id: 'ce-trebuie-sa-verifici-inainte-de-achizitie',
      heading: 'Ce trebuie să verifici înainte de achiziție',
      content: 'Verificările pe care le faci înainte de achiziție te vor ajuta să ai o imagine clară asupra stării reale a vehiculului și să evaluezi dacă prețul cerut este unul corect. De asemenea, aceste verificări te pot proteja de eventuale riscuri legate de fraudă sau kilometraj falsificat. Pentru a te asigura că faci o alegere bună, este recomandat să fii bine informat și să urmezi câțiva pași esențiali înainte de a încheia tranzacția.',
      subsections: [
        {
          heading: 'Verificarea tehnică a mașinii',
          content: 'Primul pas în achiziționarea unei mașini second-hand este verificarea stării tehnice a vehiculului. Chiar dacă vânzătorul îți spune că mașina este în stare perfectă, este esențial să faci propria verificare sau să consulți un mecanic de încredere. Astfel, vei evita eventualele probleme ascunse care ar putea apărea ulterior. Iată ce trebuie să verifici:',
          lists: [
            {
              items: [
                '<strong>Motorul și sistemele electrice</strong>: Asigură-te că motorul funcționează corect și că toate componentele electrice (faruri, geamuri electrice, aer condiționat etc.) sunt funcționale.',
                '<strong>Caroseria</strong>: Verifică dacă există urme de rugină, zgârieturi sau lovituri majore care ar putea indica accidente anterioare.',
                '<strong>Anvelopele și frânele</strong>: Anvelopele uzate sau frânele care scârțâie pot indica nevoia de reparații imediate.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Istoricul mașinii și kilometrajul',
          content: 'Un alt aspect important este verificarea istoricului mașinii și autenticitatea kilometrajului. Uneori, kilometrajul poate fi modificat pentru a părea că mașina a fost utilizată mai puțin decât în realitate. Poți solicita un raport de istoric auto sau verificări în baza de date online (cum ar fi cele oferite de Registrul Auto Român - RAR) pentru a te asigura că mașina nu a fost implicată în accidente majore și că toate reviziile tehnice au fost efectuate la timp.'
        }
      ]
    },
    {
      id: 'documente-necesare',
      heading: 'Documente necesare la achiziționarea unei mașini second-hand',
      content: 'Pentru a finaliza achiziția unei mașini second-hand, este esențial să primești de la vânzător toate documentele necesare. Aceste documente asigură legalitatea tranzacției și îți permit să înmatriculezi mașina pe numele tău.',
      subsections: [
        {
          heading: 'Contractul de vânzare-cumpărare',
          content: 'Contractul de vânzare-cumpărare este unul dintre cele mai importante documente din procesul de achiziție. Acesta trebuie să fie completat și semnat de ambele părți și să includă informații detaliate despre mașină (marca, modelul, anul de fabricație, numărul de kilometri, seria de șasiu), precum și prețul vânzării. Contractul trebuie să fie redactat în cel puțin două exemplare (unul pentru vânzător și unul pentru cumpărător).'
        },
        {
          heading: 'Cartea de identitate a vehiculului (CIV)',
          content: 'Cartea de identitate a vehiculului (CIV) este un alt document obligatoriu, care conține toate informațiile tehnice despre mașină, precum și istoricul acesteia. Fără această carte, nu vei putea înmatricula mașina pe numele tău. Asigură-te că vânzătorul îți predă originalul acestui document și verifică dacă seria de șasiu corespunde cu cea înscrisă în carte.'
        },
        {
          heading: 'Certificatul de înmatriculare (talonul)',
          content: 'Certificatul de înmatriculare, cunoscut și sub numele de talon, este dovada că mașina a fost înmatriculată legal de către vânzător. Acesta trebuie să fie actualizat și să conțină datele corecte despre proprietarul actual. În momentul achiziției, vânzătorul va completa talonul cu numele tău și va menționa că vehiculul a fost înstrăinat.'
        },
        {
          heading: 'Fişa de înmatriculare și radierea fiscală',
          content: 'Pentru a putea înmatricula mașina pe numele tău, vei avea nevoie de fișa de înmatriculare și de radierea fiscală din evidențele vânzătorului. Fișa de înmatriculare este un document necesar pentru a înregistra vehiculul la serviciul de înmatriculări. De asemenea, radierea fiscală atestă faptul că vânzătorul nu mai are datorii fiscale pentru acel vehicul.'
        },
        {
          heading: 'Asigurarea RCA',
          content: 'Un alt document esențial este polița de asigurare de Răspundere Civilă Auto. Imediat după achiziția mașinii, va trebui să închei o asigurare RCA pe numele tău. RCA-ul este obligatoriu pentru toate vehiculele care circulă pe drumurile publice din România și acoperă eventualele daune pe care le poți provoca terților în cazul unui accident. Polița de <a href="https://www.asigurari.ro/asigurare/rca"><strong>asigurare RCA</strong></a> trebuie să fie activă din momentul în care vehiculul devine proprietatea ta și înainte de a începe să circuli cu el pe drumurile publice.'
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/sofer-verificand-masina.webp',
        alt: 'Sofer verificand masina'
      }
    },
    {
      id: 'finalizarea-tranzactiei-si-inmatriculare',
      heading: 'Finalizarea tranzacției și procedurile de înmatriculare',
      content: 'După ce ai primit toate documentele necesare și ai semnat contractul de vânzare-cumpărare, urmează să finalizezi înmatricularea mașinii pe numele tău. Iată pașii principali:',
      lists: [
        {
          items: [
            '<strong>Înmatricularea la Serviciul de Înmatriculări Auto</strong>: Prezentarea documentelor necesare (contractul de vânzare-cumpărare, cartea de identitate a vehiculului, certificatul de înmatriculare, fișa de înmatriculare și dovada achitării taxelor) la Serviciul de Înmatriculări Auto pentru a înregistra vehiculul pe numele tău.',
            '<strong>Obținerea noului certificat de înmatriculare</strong>: După depunerea documentelor, vei primi noul certificat de înmatriculare pe numele tău. Acest document este obligatoriu pentru a putea circula legal cu mașina.',
            '<strong>Plăcuțele de înmatriculare</strong>: În unele cazuri, poți păstra plăcuțele de înmatriculare vechi, dar dacă dorești un număr personalizat, poți solicita noi plăcuțe la Serviciul de Înmatriculări.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'importanta-asigurarii-rca',
      heading: 'Importanța asigurării RCA pentru noul proprietar',
      content: 'Odată ce ai devenit proprietar, este important să închei RCA-ul cât mai repede, pentru a evita orice situație neplăcută. În plus, poliția te poate amenda dacă circuli fără asigurare valabilă. O soluție rapidă și eficientă pentru a încheia o asigurare RCA este să accesezi <a href="https://www.asigurari.ro/"><strong>asigurari.ro</strong></a> unde vei găsi cele mai bune oferte și vei putea obține o poliță adaptată nevoilor tale.|Achiziționarea unei mașini second-hand poate fi un proces simplu și sigur dacă urmezi toți pașii corecți și te asiguri că primești toate documentele necesare. Verificarea stării tehnice a mașinii, istoricul acesteia, precum și obținerea actelor necesare de la vânzător sunt esențiale pentru o tranzacție fără probleme.|Intră pe site pentru a găsi cele mai bune oferte și pentru a obține rapid asigurarea de care ai nevoie!'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
