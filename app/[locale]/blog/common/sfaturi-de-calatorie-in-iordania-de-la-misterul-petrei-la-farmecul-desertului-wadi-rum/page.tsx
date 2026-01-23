import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Sfaturi de calatorie in Iordania: de la misterul Petrei la farmecul desertului Wadi Rum | asigurari.ro',
  description: 'Planifici o vacanta in Iordania? ➤ Afla cum obtii viza, unde te cazezi, ce mananci si ce locuri nu trebuie sa ratezi ➤ de la Petra si Wadi Rum pana la Marea Moarta si Aqaba'
}

const articleData: BlogArticleData = {
  title: 'Sfaturi de călătorie în Iordania: de la misterul Petrei la farmecul deșertului Wadi Rum',
  image: '/images/asigurari/blog/common/formatiuni-stancoase-rosii.webp',
  image_alt: 'Formatiuni stancoase rosii si pesteri naturale sculptate de eroziune in desertul Wadi Rum sub un cer senin',
  intro_text: 'Iordania te invită într-o aventură unică, unde istoria străveche se împletește cu peisaje naturale de o frumusețe rară. De la Petra, orașul sculptat în piatră roz acum milenii, până la deșertul Wadi Rum, cu dune aurii și nopți înstelate, această țară din inima Orientului Mijlociu îți oferă experiențe care îți vor rămâne pentru totdeauna în memorie.|Indiferent dacă te atrag misterele civilizațiilor antice, drumețiile printre stânci de nisip roșiatic sau relaxarea pe țărmurile Mării Roșii, Iordania promite o călătorie completă - între aventură, cultură și spiritualitate.|Totuși, pentru ca experiența să fie pe deplin sigură și lipsită de griji, nu uita să închei o asigurare de călătorie înainte de plecare. Aceasta îți oferă protecție în caz de evenimente neprevăzute, precum pierderea documentelor, anularea zborului, întârzierea bagajelor sau probleme medicale apărute pe parcurs. Cu o planificare atentă și o asigurare potrivită, te vei putea bucura în liniște de fiecare pas prin această destinație fascinantă.',
  toc_items: [
    {
      title: 'Documentele necesare și viza pentru Iordania',
      href: '#documente-necesare-si-viza-pentru-iordania'
    },
    {
      title: 'Moneda din Iordania și bugetul pentru călătorie',
      href: '#moneda-din-iordania-si-bugetul-pentru-calatorie'
    },
    {
      title: 'Petra, Iordania - bijuteria antică pe care nu trebuie să o ratezi',
      href: '#petra-bijuteria-anttica-pe-care-nu-trebuie-sa-o-ratezi'
    },
    {
      title: 'Wadi Rum - experiența autentică în deșertul iordanian',
      href: '#wadi-rum-experienta-autentica-in-desertul-iordanian'
    },
    {
      title: 'Iordania, obiective turistice - locurile de neratat',
      href: '#iordania-obiective-turistice'
    },
    {
      title: 'Aqaba, Iordania - relaxarea pe Marea Roșie',
      href: '#aqaba-relaxarea-pe-marea-rosie'
    },
    {
      title: 'Cazarea și mâncarea tradițională în Iordania',
      href: '#cazarea-si-mancarea-traditionala-in-iordania'
    },
    {
      title: 'Sfaturi practice pentru o vacanță sigură în Iordania',
      href: '#sfaturi-practice-pentru-o-vacanta-sigura-in-iordania'
    }
  ],
  content_sections: [
    {
      id: 'documente-necesare-si-viza-pentru-iordania',
      heading: 'Documentele necesare și viza pentru Iordania',
      content: 'Pentru a călători în Iordania, cetățenii români trebuie să dețină un pașaport valabil cel puțin șase luni de la data intrării în țară.|Viza de turist se poate obține la sosirea pe aeroportul internațional Queen Alia din Amman sau la alte puncte principale de trecere a frontierei. Taxa standard este de 40 de dinari iordanieni (aproximativ 56 de euro), iar viza are o valabilitate de 30 de zile.|Există însă modalități prin care poți evita plata acestei taxe:',
      lists: [
        {
          items: [
            'Dacă achiziționezi Jordan Pass online, înainte de sosire, și rămâi cel puțin trei nopți în țară, taxa de viză este inclusă în pachet.',
            'Dacă intri și ieși prin orașul-port Aqaba, care face parte din Zona Economică Liberă, ești scutit de plata vizei.',
            'Grupurile de minimum cinci turiști, care petrec cel puțin două nopți în Iordania și sunt însoțite de un ghid local autorizat, pot beneficia, de asemenea, de scutire.'
          ],
          ordered: false
        }
      ],
      additional_content: 'La plecarea din țară, autoritățile pot verifica dacă ai îndeplinit condițiile pentru scutirea de taxă. Dacă nu ai stat numărul minim de nopți necesar, va trebui să achiți taxa de viză la ieșire. Este recomandat să verifici toate aceste detalii înainte de plecare, pentru a evita neplăcerile.'
    },
    {
      id: 'moneda-din-iordania-si-bugetul-pentru-calatorie',
      heading: 'Moneda din Iordania și bugetul pentru călătorie',
      content: 'Moneda oficială a Iordaniei este dinarul iordanian (JOD), o valută stabilă, ancorată la dolarul american.|Iordania nu este o destinație ieftină - prețurile la cazare și mâncare sunt comparabile cu cele din Europa de Vest, mai ales în zonele turistice. Cu toate acestea, calitatea serviciilor este ridicată, iar experiențele - de la vizitarea Petrei la o noapte sub stele în Wadi Rum - merită investiția.|Jordan Pass este considerat o alegere avantajoasă pentru turiști. Acesta oferă acces la peste 40 de atracții turistice și include scutirea de taxa de viză pentru cei care stau minimum trei nopți.Prețul pachetului variază în funcție de numărul de zile pentru vizitarea sitului Petra, iar informațiile actualizate pot fi consultate pe site-ul oficial.'
    },
    {
      id: 'petra-bijuteria-anttica-pe-care-nu-trebuie-sa-o-ratezi',
      heading: 'Petra, Iordania - bijuteria antică pe care nu trebuie să o ratezi',
      content: 'Cunoscută drept „Orașul Roz”, Petra este simbolul Iordaniei și una dintre Cele Șapte Minuni ale Lumii Moderne. Sculptată în gresia roșiatică de către nabateeni acum peste două milenii, Petra oferă o experiență vizuală, istorică și spirituală de neuitat. Culorile stâncilor se schimbă odată cu lumina zilei - de la roz pal dimineața la roșu intens la apus -, transformând orașul într-un adevărat spectacol natural.|<strong>Ce trebuie să știi înainte de vizită:</strong>',
      lists: [
        {
          items: [
            'Accesul în Petra se face prin Siq, un canion îngust și spectaculos, lung de aproximativ 1,2 km, care creează o atmosferă de mister și anticipare.',
            'La capătul canionului se află Al-Khazneh (Trezoreria) – o fațadă monumentală de 40 de metri înălțime, sculptată cu o precizie uimitoare. Este imaginea iconică a Petrei și una dintre cele mai fotografiate atracții din lume.',
            'Pentru a explora situl în întregime, alocă cel puțin o zi completă, iar dacă vrei să te bucuri pe deplin de peisaj și de liniștea locului, rezervă două zile.',
            'Nu rata Ad-Deir (Mănăstirea) – un monument impresionant, chiar mai mare decât Trezoreria. Urcușul de aproximativ 800 de trepte este solicitant, dar panorama de sus este spectaculoasă.',
            'Alte puncte de interes includ Teatrul Roman, Strada Coloanelor și Complexul Palatului, care ilustrează grandoarea civilizației nabateene.'
          ],
          ordered: false
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/fatada-monumentului-al-khazneh.webp',
        alt: 'Fatada monumentului Al Khazneh din petra sculptata in stanca inconjurata de pereti abrupti'
      }
    },
    {
      id: 'wadi-rum-experienta-autentica-in-desertul-iordanian',
      heading: 'Wadi Rum - experiența autentică în deșertul iordanian',
      content: 'Supranumit „Valea Lunii”, Wadi Rum este unul dintre cele mai spectaculoase locuri din Iordania, cu un peisaj ce pare desprins dintr-un alt univers. Dunele roșiatice, stâncile sculptate de vânt și cerul infinit au transformat acest loc într-un decor preferat pentru filme celebre precum <i>„The Martian”</i> și <i>„Lawrence of Arabia”</i>.|<strong>Ce poți experimenta în Wadi Rum:</strong>',
      lists: [
        {
          items: [
            '<strong>Tururi cu jeep-ul în deșert:</strong> Descoperă cele mai impresionante formațiuni de piatră, arcuri naturale, canioane înguste, picturi rupestre și izvoare ascunse printre stânci. Ghidurile locale beduine îți vor dezvălui legendele locului și poveștile deșertului.',
            '<strong>Plimbări cu cămila:</strong> Trăiește o experiență autentică beduină, la pas lent prin deșert. Călătoria pe cămilă îți oferă o perspectivă diferită asupra peisajului și o conexiune mai profundă cu tradițiile locale.',
            '<strong>Noaptea în deșert:</strong> Petrece o noapte într-un cort beduin tradițional, departe de zgomotul orașelor. Sub cerul plin de stele, vei putea admira Calea Lactee și te vei bucura de o cină preparată în stil Zarb - carne și legume gătite sub nisip, urmată de ceai cu mentă și povești spuse în jurul focului.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'iordania-obiective-turistice',
      heading: 'Iordania, obiective turistice - locurile de neratat',
      content: 'Pe lângă faimoasele Petra și Wadi Rum, Iordania ascunde numeroase locuri spectaculoase, unde istoria, natura și cultura se împletesc armonios.',
      lists: [
        {
          items: [
            '<strong>Amman - capitala vibrantă a Iordaniei:</strong> Un oraș unde antichitatea se întâlnește cu modernitatea. Vizitează Cetatea din Amman pentru o panoramă superbă asupra capitalei și oprește-te la Teatrul Roman, una dintre cele mai bine conservate construcții din perioada romană.',
            '<strong>Jerash - Pompeiul Orientului:</strong> Unul dintre cele mai bine păstrate orașe romane din lume, cu străzi pavate, coloane, temple și teatre care te poartă înapoi în secolul I d.Hr. În fiecare vară, Festivalul de la Jerash transformă ruinele într-o scenă vie de muzică, dans și spectacole istorice.',
            '<strong>Marea Moartă - o experiență unică de plutire:</strong> Aflată la cel mai scăzut punct de pe Pământ, Marea Moartă este renumită pentru apa cu salinitate ridicată, ce permite plutirea fără efort. Nămolul și apa au proprietăți terapeutice, iar resorturile de pe malul iordanian oferă tratamente spa și wellness de top.',
            '<strong>Castelele deșertului - bijuterii ale artei islamice timpurii:</strong> Ridicate de califii omeiazi în secolele VII–VIII, aceste fortărețe sunt mărturii impresionante ale arhitecturii și artei islamice timpurii.<ul><li>Qasr Amra, inclus în patrimoniul UNESCO, impresionează prin frescele sale bine conservate.</li><li>Qasr al-Kharanah atrage prin designul său arhitectural simetric și istoria sa misterioasă.</li></ul>'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'aqaba-relaxarea-pe-marea-rosie',
      heading: 'Aqaba, Iordania - relaxarea pe Marea Roșie',
      content: 'Singurul oraș de coastă al Iordaniei, Aqaba este o oază de relaxare după explorarea Petrei sau a deșertului Wadi Rum. Aici, istoria, marea și cultura se întâlnesc într-un mix fascinant, oferind o combinație perfectă între aventură, odihnă și descoperire.|<strong>Ce poți face și vedea în Aqaba:</strong>',
      lists: [
        {
          items: [
            '<strong>Scufundări și snorkeling în Marea Roșie:</strong> Apele limpezi ascund recife de corali spectaculoase și o biodiversitate marină remarcabilă. Chiar și începătorii se pot bucura de experiență datorită vizibilității excelente și temperaturilor calde ale apei pe tot parcursul anului.',
            '<strong>Relaxare pe plajă:</strong> Plajele curate, cu nisip fin, oferă locul ideal pentru odihnă și sporturi nautice - de la plimbări cu barca, la windsurfing și scufundări ușoare.',
            '<strong>Explorarea centrului istoric:</strong> O plimbare prin bazarurile tradiționale îți oferă ocazia să cumperi artizanat local, condimente aromate și suveniruri autentice. Nu rata Castelul mameluc din secolul al XIV-lea, aflat chiar pe malul mării - o dovadă a importanței comerciale a Aqabei de-a lungul secolelor.',
            '<strong>Shopping avantajos:</strong> Fiind parte din Zona Economică Specială a Iordaniei, Aqaba are prețuri mai mici la multe produse, inclusiv electronice, parfumuri și bijuterii.',
            '<strong>Gastronomie locală:</strong> Restaurantele din port servesc pește proaspăt din Marea Roșie, preparat în stil tradițional iordanian, dar și specialități din bucătăria levantină.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'cazarea-si-mancarea-traditionala-in-iordania',
      heading: 'Cazarea și mâncarea tradițională în Iordania',
      content: 'Iordania oferă o gamă variată de cazări și experiențe culinare autentice, iar fiecare regiune are propriul farmec.',
      lists: [
        {
          items: [
            'În Amman, capitala țării, poți alege între hoteluri boutique în zona istorică Jabal Amman sau lanțuri internaționale moderne, potrivite pentru confort maxim.',
            'În apropierea Petrei, orașul Wadi Musa dispune de pensiuni primitoare și hoteluri de lux cu vedere spre munți, multe dintre ele oferind mic dejun inclus și transport către intrarea în situl arheologic.',
            'În Wadi Rum, o noapte petrecută în deșert este o experiență memorabilă - poți alege între campuri de corturi beduine tradiționale sau glamping de lux, cu terase sub cerul înstelat.'
          ],
          ordered: false
        }
      ],
      subsections: [
        {
          heading: 'Bucătăria iordaniană',
          content: 'Bucătăria iordaniană este o adevărată călătorie culinară.',
          lists: [
            {
              items: [
                'Preparatul național, mansaf, combină carnea de miel gătită în iaurt fermentat (jameed), servită pe orez și presărată cu migdale și pin.',
                'Mezze-ul local adună o selecție de gusturi - hummus, baba ghanoush, tabbouleh, falafel -, iar maqluba, „mâncarea răsturnată", aduce la masă o combinație aromată de orez, legume și carne.',
                'Pentru desert, încearcă kunafa, un amestec crocant de fidea fină, brânză dulce și fistic, sau clasicul baklava.'
              ],
              ordered: false
            }
          ]
        }
      ]
    },
    {
      id: 'sfaturi-practice-pentru-o-vacanta-sigura-in-iordania',
      heading: 'Sfaturi practice pentru o vacanță sigură în Iordania',
      content: 'O călătorie în Iordania este o experiență memorabilă, însă pentru a te bucura în siguranță de ea, este important să te pregătești atât cultural, cât și logistic.',
      subsections: [
        {
          heading: 'Importanța asigurării de călătorie',
          content: 'Încheierea unei <a href="https://www.asigurari.ro/asigurare/travel/iordania"><strong>asigurări de călătorie pentru Iordania</strong></a> este una dintre cele mai importante măsuri de precauție înainte de plecare. Deși Iordania este o țară sigură și primitoare, pot apărea situații neprevăzute - de la probleme medicale, la pierderea documentelor sau anularea zborurilor.|O poliță completă de asigurare ar trebui să acopere:',
          lists: [
            {
              items: [
                'Pierderea sau furtul documentelor de călătorie (pașaport, bilete, acte personale);',
                'Anularea călătoriei din motive independente de tine (ex. falimentul companiei aeriene);',
                'Storno pentru bilete de avion și storno pentru anularea călătoriei;',
                'Refuzul companiei aeriene de a te îmbarca, caz în care poți recupera costurile suplimentare;',
                'Pierderea, întârzierea sau deteriorarea bagajelor;',
                'Anularea sau întârzierea zborului cu mai mult de 12 ore;',
                'Accidentele și urgențele medicale, inclusiv evacuarea sanitară dacă este necesară.'
              ],
              ordered: false
            }
          ],
          additional_content: 'Recomandare: Alege o <a href="https://www.asigurari.ro/asigurare/travel"><strong>asigurare de călătorie</strong></a> care oferă asistență medicală 24/7, acoperă activități turistice specifice (precum drumețiile în Wadi Rum sau explorarea Petrei) și verifică limitele de despăgubire pentru bagaje și anulări. Costurile medicale în Iordania pot fi ridicate, mai ales în clinicile private, așa că o poliță solidă îți oferă liniștea necesară pentru a te bucura de vacanță.'
        },
        {
          heading: 'Siguranță și adaptare la climat',
          content: 'Iordania are un climat deșertic, cu temperaturi extreme și umiditate scăzută.',
          lists: [
            {
              items: [
                'Hidratează-te constant, mai ales în timpul excursiilor la Petra sau în deșert.',
                'Poartă haine ușoare, dar care acoperă pielea, o pălărie de soare, ochelari și cremă cu protecție solară.',
                'Evită expunerea prelungită la soare între orele prânzului.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Respectarea obiceiurilor locale',
          content: 'Iordania este o țară majoritar musulmană, iar respectarea tradițiilor locale este esențială.',
          lists: [
            {
              items: [
                'Îmbracă-te modest: pantaloni lungi și tricouri cu mâneci pentru bărbați; femeile ar trebui să acopere umerii și să evite hainele mulate.',
                'În moschei și zone rurale, comportă-te cu discreție și cere permisiunea înainte de a face fotografii.',
                'În piețe, negocierea este o parte naturală a culturii - poți începe cu jumătate din prețul cerut și negociază politicos.',
                'Câteva expresii în arabă, precum <i>“Marhaba”</i> (salut), <i>“Shukran”</i> (mulțumesc) și <i>“Ma’a salama”</i> (la revedere), sunt întotdeauna apreciate.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Sănătate și igienă alimentară',
          lists: [
            {
              items: [
                'Alege restaurante frecventate de localnici și turiști - mâncarea este, de obicei, proaspătă.',
                'Evită fructele și legumele crude spălate cu apă de la robinet.',
                'Bea doar apă îmbuteliată și poartă la tine medicamente pentru afecțiuni digestive.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Documente și siguranță personală',
          lists: [
            {
              items: [
                'Verifică valabilitatea pașaportului (minimum 6 luni de la data intrării).',
                'Păstrează copii digitale și tipărite ale documentelor importante (pașaport, poliță de asigurare, bilete de avion).',
                'Nu ține toți banii într-un singur loc și folosește o borsetă securizată în zonele aglomerate.'
              ],
              ordered: false
            }
          ],
          additional_content: 'De la misterioasa Petra la imensitatea deșertului Wadi Rum, Iordania te așteaptă cu brațele deschise. Această țară te va cuceri cu istoria sa bogată, peisajele uluitoare și ospitalitatea localnicilor. Nu mai sta pe gânduri, planifică-ți acum călătoria și pregătește-te pentru o experiență de neuitat! Asigură-te că ai toate informațiile necesare și că ești pregătit pentru aventură.|<strong><i>Surse Foto: Freepik.com</i></strong>'
        }
      ]
    }
  ],
  conclusion: [
    {
      text: 'Iordania oferă o experiență completă de călătorie, combinând istorie, cultură și natură - de la Petra, „Orașul Roz” sculptat în piatră, la peisajele spectaculoase ale deșertului Wadi Rum și relaxarea de pe țărmul Mării Roșii din Aqaba.',
      href: '#petra-bijuteria-anttica-pe-care-nu-trebuie-sa-o-ratezi'
    },
    {
      text: 'Planificarea atentă și documentele corecte sunt esențiale - călătorii trebuie să verifice condițiile de viză, să ia în considerare achiziționarea Jordan Pass și să aibă la ei un pașaport valabil minimum 6 luni, precum și un buget adaptat costurilor locale, care sunt relativ ridicate.',
      href: '#documente-necesare-si-viza-pentru-iordania'
    },
    {
      text: 'Siguranța și respectul pentru cultura locală fac diferența - o asigurare de călătorie completă, hidratarea constantă, protecția solară, vestimentația modestă și respectarea tradițiilor musulmane sunt recomandate pentru o vacanță plăcută și fără incidente.',
      href: '#sfaturi-practice-pentru-o-vacanta-sigura-in-iordania'
    }
  ]
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
