import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Fransiza in asigurari- cum decizi daca sa optezi pentru? | asigurari.ro',
  description: 'Ce este fransiza in asigurari? ➤ Afla cum functioneaza, avantajele si dezavantajele unei polite cu sau fara fransiza, pentru a lua cea mai buna decizie'
}

const articleData: BlogArticleData = {
  title: 'Franșiza în asigurări - cum decizi dacă să optezi pentru o poliță cu sau fără franșiză',
  image: '/images/asigurari/blog/common/barbat-care-scrie.webp',
  image_alt: 'Barbat care scrie',
  intro_text: 'Franșiza la RCA poate fi aplicabilă în două moduri principale:|Franșiza la regres: Dacă asigurătorul RCA oferă protecție extinsă, dar constată ulterior că dauna s-a produs dintr-o culpă majoră a asiguratului (cum ar fi condusul sub influența alcoolului), acesta poate cere asiguratului să suporte o parte din costuri sub formă de franșiză.|Franșiza pentru acoperiri opționale: Unele polițe RCA includ beneficii suplimentare, cum ar fi daune proprii limitate sau asistență rutieră extinsă. În astfel de cazuri, dacă alegi o franșiză, vei plăti mai puțin pentru aceste servicii, dar vei suporta o parte din eventualele daune.|Este important de știut că, indiferent de existența unei franșize, asigurarea RCA continuă să acopere prejudiciile produse terților, conform legislației în vigoare.',
  toc_items: [
    {
      title: 'Franșiza la asigurarea locuinței',
      href: '#fransiza-la-asigurarea-locuintei'
    },
    {
      title: 'Cum să alegi între o poliță cu sau fără franșiză',
      href: '#cum-sa-alegi-intre-o-polita-cu-sau-fara-fransiza'
    }
  ],
  content_sections: [
    {
      id: 'fransiza-la-asigurarea-locuintei',
      heading: 'Franșiza la asigurarea locuinței',
      content: 'În cazul <a href="https://www.asigurari.ro/asigurare/home"><strong>asigurării locuinței</strong></a>, franșiza este mult mai frecvent utilizată și poate influența semnificativ costul poliței. Franșiza la asigurarea locuinței reprezintă suma pe care proprietarul trebuie să o acopere din buzunar înainte ca asigurătorul să intervină în acoperirea daunelor.|Tipurile de franșiză la asigurarea locuinței includ:',
      lists: [
        {
          items: [
            '<strong>Franșiză fixă:</strong> O sumă prestabilită pe care o plătești în caz de daună. De exemplu, dacă ai o franșiză de 500 de lei și paguba este de 5.000 de lei, asigurătorul va plăti doar 4.500 de lei.',
            '<strong>Franșiză procentuală:</strong> Se calculează ca un procent din valoarea totală a daunei. Dacă polița prevede o franșiză de 2% și dauna este de 20.000 de lei, vei acoperi 400 de lei, iar restul va fi suportat de asigurător.'
          ],
          ordered: false
        }
      ],
      additional_content: 'De ce să alegi o franșiză la asigurarea locuinței? Principalele avantaje sunt costurile reduse ale primei de asigurare și descurajarea cererilor de despăgubire pentru daune minore. Totuși, trebuie să te asiguri că franșiza pe care o alegi este una pe care ți-o poți permite în caz de eveniment neprevăzut.|Alegerea unei franșize potrivite la asigurarea locuinței trebuie să fie bazată pe riscurile pe care ești dispus să ți le asumi și pe valoarea totală a locuinței tale. O poliță fără franșiză oferă protecție totală, dar este mai scumpă, în timp ce o poliță cu franșiză este mai accesibilă, dar implică un efort financiar suplimentar în caz de daună.',
      image: {
        src: '/images/asigurari/blog/common/birou-cu-laptop.webp',
        alt: 'Birou cu laptop calculator si breloc'
      }
    },
    {
      id: 'cum-sa-alegi-intre-o-polita-cu-sau-fara-fransiza',
      heading: 'Cum să alegi între o poliță cu sau fără franșiză',
      content: 'Acum că înțelegi cum funcționează franșiza, cum decizi dacă o vrei sau nu în polița ta? Decizia depinde de situația ta. Gândește-te la bugetul tău. Dacă poți plăti o primă mai mare, o poliță fără franșiză îți dă liniștea că nu vei avea costuri în plus la o daună. Dacă vrei să economisești la asigurare și poți risca să plătești mai mult la o daună, alege o poliță cu franșiză.|Ia în calcul și valoarea mașinii tale și cât ar costa reparațiile. Pentru o mașină scumpă, cu piese costisitoare, o franșiză mai mare poate însemna economii bune la primă. Pentru o mașină mai ieftină, diferența de preț între o poliță cu și fără franșiză ar putea fi mică, deci poate preferi fără franșiză.|Gândește-te și cum conduci și dacă ai avut accidente. Dacă ești prudent și rar ai probleme, o poliță cu franșiză poate fi bună. Dacă conduci mult în oraș aglomerat sau în zone riscante, poate preferi liniștea unei polițe fără franșiză.|Franșiza în asigurări poate părea complicată la început, dar acum că ai înțeles conceptul, poți lua decizii mai bune când îți alegi asigurarea. Fie că optezi pentru o poliță cu sau fără franșiză, important e să fie potrivită pentru situația ta financiară și stilul tău de viață. Ține minte: o franșiză mai mare înseamnă o primă mai mică, dar implică riscul de a plăti mai mult în cazul unei daune. Cântărește-ți bine opțiunile, ia în considerare factorii discutați și alege cu încredere polița care îți oferă cel mai bun echilibru între costuri și protecție. Nu uita să revizuiești periodic alegerea ta, pe măsură ce circumstanțele tale se schimbă!|<strong><i>Sursă foto: Shutterstock.com</i></strong>'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
