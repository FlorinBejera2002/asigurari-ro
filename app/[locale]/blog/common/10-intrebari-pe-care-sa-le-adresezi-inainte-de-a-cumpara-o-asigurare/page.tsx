import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: '10 întrebari esentiale inainte de a cumpara o asigurare | asigurari.ro',
  description: 'Vrei sa alegi asigurarea potrivita? ? Afla cele mai importante 10 intrebari pe care sa le adresezi inainte de a semna o polita ➤ Descopera sfaturi utile'
}

const articleData: BlogArticleData = {
  title: '10 Întrebări pe care să le Adresezi înainte de a Cumpăra o Asigurare',
  image: '/images/asigurari/blog/common/barbati-discutand.webp',
  image_alt: 'Doi barbati discutand',
  intro_text: 'Asigurările sunt esențiale pentru a ne proteja de riscurile neprevăzute, dar alegerea celei mai potrivite polițe poate fi o decizie complexă. Este important să te informezi corect înainte de a cumpăra o asigurare, pentru a te asigura că polița aleasă se potrivește nevoilor tale. În acest ghid, îți prezentăm o listă de întrebări esențiale pe care să le adresezi unui consultant în asigurări înainte de a semna o poliță, astfel încât să poți lua o decizie informată și să înțelegi clar ce beneficii îți oferă.',
  toc_items: [
    {
      title: 'De ce tip de asigurare am nevoie?',
      href: '#de-ce-tip-de-asigurare-am-nevoie'
    },
    {
      title: 'Ce acoperă exact această poliță?',
      href: '#ce-acopera-polita'
    },
    {
      title: 'Care sunt excluderile și limitările poliței?',
      href: '#care-sunt-exluderile-si-limitarile'
    },
    {
      title: 'Cât de mare este franșiza și cum funcționează?',
      href: '#cum-functioneaza-fransiza'
    },
    {
      title: 'Ce opțiuni de personalizare există pentru această asigurare?',
      href: '#optiuni-de-personalizare'
    },
    {
      title: 'Cum se stabilește valoarea despăgubirilor?',
      href: '#cum-se-stabileste-valoarea-despagubirilor'
    },
    {
      title: 'Cum funcționează reînnoirea poliței și ajustările de preț?',
      href: '#reinnoirea-politei-si-ajustarile-de-pret'
    },
    {
      title: 'Care sunt modalitățile de plată?',
      href: '#modalitatile-de-plata'
    },
    {
      title: 'Ce se întâmplă dacă doresc să anulez polița?',
      href: '#anularea-politei'
    },
    {
      title: 'Ce servicii de asistență și suport sunt incluse?',
      href: '#servicii-de-asistenta-si-suport-incluse'
    }
  ],
  content_sections: [
    {
      id: 'de-ce-tip-de-asigurare-am-nevoie',
      heading: 'De ce tip de asigurare am nevoie?',
      content: 'Primul pas înainte de a achiziționa o asigurare este să identifici tipul de protecție de care ai nevoie. Există numeroase tipuri de asigurări – de viață, de sănătate, de locuință, auto, de călătorie, CASCO – iar fiecare oferă acoperire pentru un anumit set de riscuri. Un consultant te poate ajuta să alegi cea mai potrivită asigurare în funcție de situația ta personală și de riscurile la care ești expus.',
      lists: [
        {
          title: 'Întrebări suplimentare pentru clarificare:',
          items: [
            '„Care sunt riscurile specifice pe care le acoperă acest tip de asigurare?”',
            '„Care este diferența între această asigurare și alte opțiuni disponibile?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'ce-acopera-polita',
      heading: 'Ce acoperă exact această poliță?',
      content: 'O întrebare esențială înainte de a cumpăra o asigurare este să înțelegi clar acoperirea pe care o oferă polița respectivă. Este important să știi ce tipuri de daune și situații sunt incluse în asigurare, pentru a evita surprizele neplăcute.',
      lists: [
        {
          title: 'Exemple de acoperiri despre care ar trebui să întreb:',
          items: [
            '<strong>Pentru o asigurare de sănătate</strong>: include consultațiile, investigațiile de specialitate, spitalizarea și intervențiile chirurgicale?',
            '<strong>Pentru o asigurare de locuință</strong>: acoperă daunele provocate de incendii, inundații, cutremure sau furt?',
            '<strong>Pentru o asigurare auto</strong>: include avarii provocate de accidente, furt și acte de vandalism?'
          ],
          ordered: false
        }
      ],
      additional_content: 'Aflarea acoperirilor specifice ale poliței te va ajuta să faci o comparație informată cu alte oferte de pe piață.'
    },
    {
      id: 'care-sunt-exluderile-si-limitarile',
      heading: 'Care sunt excluderile și limitările poliței?',
      content: 'Pe lângă acoperirile poliței, este esențial să întrebi despre excluderile și limitările acesteia. Excluderile reprezintă acele situații în care asiguratorul nu va plăti despăgubiri, iar limitările pot impune un plafon asupra sumei de despăgubire.',
      lists: [
        {
          title: 'Exemple de întrebări despre excluderi și limitări:',
          items: [
            '„Există excluderi de acoperire pentru activități riscante, cum ar fi sporturile extreme?”',
            '„Este acoperită întreaga valoare a daunei, sau există o sumă maximă pe care o pot primi?”',
            '„Care sunt condițiile în care polița nu mai este valabilă?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'cum-functioneaza-fransiza',
      heading: 'Cât de mare este franșiza și cum funcționează?',
      content: 'Franșiza este suma pe care trebuie să o plătești din buzunarul tău înainte ca asiguratorul să acopere restul costului. Nivelul franșizei poate afecta semnificativ costul asigurării și suma pe care o vei primi în caz de daune, așa că este important să înțelegi acest aspect.',
      lists: [
        {
          title: 'Întrebări relevante despre franșiză:',
          items: [
            '„Cât este valoarea franșizei și cum afectează primele de asigurare?”',
            '„Franșiza se aplică pentru fiecare eveniment în parte sau este cumulativă pe toată perioada poliței?”',
            '„Pot alege un nivel de franșiză mai mic sau mai mare în funcție de bugetul meu?”'
          ],
          ordered: false
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/documente-si-cheie-cu-breloc.webp',
        alt: 'Documente si o cheie cu breloc'
      }
    },
    {
      id: 'optiuni-de-personalizare',
      heading: 'Ce opțiuni de personalizare există pentru această asigurare?',
      content: 'O poliță de asigurare flexibilă îți permite să adaugi sau să modifici anumite acoperiri pentru a o adapta mai bine nevoilor tale. De exemplu, la o asigurare auto CASCO, ai putea dori să adaugi protecție împotriva furtului sau vandalismului dacă locuiești într-o zonă mai riscantă.',
      lists: [
        {
          title: 'Întrebări despre personalizare:',
          items: [
            '„Ce acoperiri suplimentare pot adăuga la poliță?”',
            '„Există acoperiri opționale care sunt recomandate pentru zona mea de rezidență sau pentru tipul meu de activitate?”',
            '„Pot ajusta valoarea despăgubirii pentru diferite riscuri?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'cum-se-stabileste-valoarea-despagubirilor',
      heading: 'Cum se stabilește valoarea despăgubirilor?',
      content: 'Pentru a ști cât poți primi în caz de daune, este important să întrebi cum se calculează despăgubirile. În unele cazuri, despăgubirile pot acoperi valoarea completă a pierderilor, în timp ce în altele se pot aplica evaluări sau deprecieri.',
      lists: [
        {
          title: 'Întrebări pentru clarificare:',
          items: [
            '„Despăgubirile se calculează în funcție de valoarea de piață actuală a bunului asigurat sau de valoarea inițială?”',
            '„Sunt necesare evaluări periodice ale bunului pentru a stabili corect valoarea despăgubirilor?”',
            '„Ce documente sunt necesare pentru a solicita despăgubiri în caz de accident?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'reinnoirea-politei-si-ajustarile-de-pret',
      heading: 'Cum funcționează reînnoirea poliței și ajustările de preț?',
      content: 'Asigurările au de obicei o perioadă de valabilitate limitată, după care polița trebuie reînnoită. Este util să știi cum se calculează prețul pentru reînnoirea asigurării și dacă există riscul de majorări ale primei.',
      lists: [
        {
          title: 'Întrebări despre reînnoire și ajustări de preț:',
          items: [
            '„Este posibil să primesc o ofertă mai bună dacă reînnoiesc polița pe termen lung?”',
            '„Prima de asigurare va crește automat la reînnoire?”',
            '„Există avantaje sau reduceri pentru clienții fideli care reînnoiesc anual?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'modalitatile-de-plata',
      heading: 'Care sunt modalitățile de plată?',
      content: 'Flexibilitatea modalităților de plată este un aspect important, mai ales dacă ai nevoie de o asigurare pe termen lung. Mulți asiguratori oferă opțiuni de plată lunare, trimestriale sau anuale, iar unele asigurări oferă și reduceri pentru plata integrală în avans.',
      lists: [
        {
          title: 'Întrebări despre modalitățile de plată:',
          items: [
            '„Există reduceri pentru plata integrală a primei de asigurare?”',
            '„Pot opta pentru plata lunară, fără costuri suplimentare?”',
            '„Ce metode de plată acceptați – transfer bancar, card de credit, online?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'anularea-politei',
      heading: 'Ce se întâmplă dacă doresc să anulez polița?',
      content: 'În cazurile în care planurile tale se schimbă sau descoperi că ai nevoie de un alt tip de asigurare, este esențial să știi care sunt condițiile de anulare a poliței și dacă vei primi un procent din suma plătită în avans.',
      lists: [
        {
          title: 'Întrebări despre anularea poliței:',
          items: [
            '„Există penalizări sau taxe de anulare?”',
            '„Pot primi o rambursare dacă anulez polița înainte de termen?”',
            '„Ce pași trebuie să urmez pentru a anula polița în mod corect?”'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'servicii-de-asistenta-si-suport-incluse',
      heading: 'Ce servicii de asistență și suport sunt incluse?',
      content: 'Unele polițe de asigurare oferă beneficii suplimentare, cum ar fi servicii de asistență rutieră pentru asigurările auto sau acces la consultații medicale pentru asigurările de sănătate. Este important să înțelegi aceste servicii suplimentare, deoarece ele pot face diferența în caz de urgență.',
      lists: [
        {
          title: 'Întrebări relevante despre servicii de asistență:',
          items: [
            '„Serviciul de asistență este disponibil 24/7?”',
            '„Pot primi o rambursare dacă îmi anulez polița înainte de termen?”',
            '„Ce pași ar trebui să urmez pentru a anula polița în mod corect?”'
          ],
          ordered: false
        }
      ],
      additional_content: 'Alegerea unei asigurări este o decizie importantă care îți poate oferi protecție financiară și liniște pe termen lung. Prin adresarea acestor întrebări esențiale, te asiguri că iei o decizie informată și că polița aleasă se potrivește nevoilor tale. Fiecare întrebare te ajută să înțelegi mai bine acoperirile, costurile și avantajele asigurării, astfel încât să faci o alegere pe care să te poți baza în situații neprevăzute.|Pentru a găsi asigurarea potrivită nevoilor tale intră pe <a href="https://www.asigurari.ro"><strong>asigurari.ro</strong></a> și descoperă soluții personalizate și opțiuni flexibile pentru tine și familia ta.'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
