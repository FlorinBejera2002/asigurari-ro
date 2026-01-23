import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title: 'Cutremur - informatii privind siguranta ta si a locuintei si masuri de protectie | asigurari.ro',
  description: 'Afla cum sa te protejezi pe tine si locuința ta in caz de cutremur ➤ Totul despre masuri de siguranta, pregatire, avertizare timpurie si importanta asigurarii PAD si facultative'
}

const articleData: BlogArticleData = {
  title: 'Cutremur - informații privind siguranța ta și a locuinței și măsuri de protecție',
  image: '/images/asigurari/blog/common/fisura-in-asfalt.webp',
  image_alt: 'Fisura mare si adanca in asfalt intinzandu se pe strada',
  intro_text: 'Cutremurele sunt printre cele mai greu de anticipat și, totodată, printre cele mai distructive fenomene naturale. În România, o țară cu activitate seismică de la moderată la ridicată, este vital să știi cum să te protejezi pe tine și locuința ta în caz de cutremur.|Acest ghid îți oferă informații esențiale despre măsurile de siguranță, sistemele de avertizare timpurie și importanța asigurării locuinței, astfel încât să poți face față cu încredere acestui risc natural.|<strong>Rezumat:</strong>',
  toc_items: [
    {
      title: 'Ce este cutremurul și cum se produce?',
      href: '#ce-este-cutremurul-si-cum-se-produce'
    },
    {
      title: 'Cutremurele în România - zone de risc și istoric',
      href: '#cutremurele-in-romania'
    },
    {
      title: 'Măsuri de siguranță înainte de cutremur',
      href: '#masuri-de-siguranta-inainte-de-cutremur'
    },
    {
      title: 'Ce să faci în timpul unui cutremur?',
      href: '#ce-trebuie-sa-faci-in-timpul-unui-cutremur'
    },
    {
      title: 'Acțiuni recomandate după cutremur',
      href: '#actiuni-recomandate-dupa-cutremur'
    },
    {
      title: 'Sisteme de avertizare și monitorizare a cutremurelor',
      href: '#sisteme-de-avertizare-si-monitorizare-a-cutremurelor'
    },
    {
      title: 'Impactul cutremurelor asupra clădirilor și infrastructurii',
      href: '#impactul-cutremurelor-asupra-cladirilor-si-infrastructurii'
    },
    {
      title: 'Asigurarea locuinței în caz de cutremur',
      href: '#asigurarea-locuintei-in-caz-de-cutremur'
    }
  ],
  content_sections: [
    {
      content: '',
      lists: [
        {
          items: [
            '<strong>România este o țară cu risc seismic ridicat</strong>, în special din cauza zonei Vrancea, iar cutremurele pot avea efecte devastatoare asupra populației și infrastructurii. Educația și conștientizarea sunt esențiale.',
            '<strong>Pregătirea înainte de un cutremur este vitală:</strong> verificarea structurii locuinței, fixarea obiectelor instabile și alcătuirea unui kit de urgență pot salva vieți.',
            '<strong>Asigurarea locuinței împotriva cutremurelor este crucială:</strong> polița PAD este obligatorie, dar pentru protecție completă se recomandă și o asigurare facultativă. Clădirile cu risc seismic ridicat trebuie consolidate pentru a putea fi asigurate.'
          ],
          ordered: false
        }
      ]
    },
    {
      id: 'ce-este-cutremurul-si-cum-se-produce',
      heading: 'Ce este cutremurul și cum se produce?',
      content: 'Un cutremur, cunoscut și sub denumirea de seism sau cutremur de pământ, reprezintă o mișcare bruscă a scoarței terestre, provocată de eliberarea rapidă a energiei acumulate în rocile din adâncuri. Acest fenomen are loc atunci când plăcile tectonice ale Pământului se deplasează și interacționează între ele, generând tensiuni care, odată depășite, duc la ruperea rocilor și propagarea energiei sub formă de unde seismice.',
      subsections: [
        {
          heading: 'Care sunt cauzele unui cutremur',
          content: 'Principalele cauze ale cutremurelor sunt mișcările plăcilor tectonice și activitatea vulcanică. În unele cazuri, activitățile umane de mare amploare – precum exploatările miniere sau injectările de fluide în subteran – pot declanșa mișcări seismice, însă acestea sunt mai rare. Undele seismice rezultate din eliberarea energiei se propagă în toate direcțiile, ajungând la suprafață și provocând zguduiturile resimțite de oameni.'
        },
        {
          heading: 'Cum se măsoară intensitatea unui cutremur',
          content: 'Pentru a evalua un cutremur, se folosesc două scale esențiale:',
          lists: [
            {
              items: [
                'Scala Richter măsoară magnitudinea, adică cantitatea de energie eliberată în punctul de focar.',
                'Scala Mercalli evaluează intensitatea efectelor produse la suprafață, în funcție de cum sunt resimțite de oameni și de daunele provocate.'
              ],
              ordered: false
            }
          ],
          additional_content: 'Un cutremur cu magnitudinea de 4–5 pe scara Richter este considerat moderat, în timp ce unul ce depășește 7 grade poate avea efecte devastatoare asupra populației și infrastructurii.'
        }
      ],
      image: {
        src: '/images/asigurari/blog/common/casuta-ingropata-in-asfalt.webp',
        alt: 'Casuta alba cu acoperis albastru partial ingropata in asfalt crapat'
      }
    },
    {
      id: 'cutremurele-in-romania',
      heading: 'Cutremurele în România - zone de risc și istoric',
      content: 'România se situează într-o zonă seismică activă, la intersecția mai multor plăci tectonice, ceea ce face ca teritoriul țării să fie expus riscului de cutremure. Cea mai importantă sursă de activitate seismică este zona Vrancea, recunoscută la nivel european pentru seismele de adâncime intermediară, care apar între 60 și 180 de kilometri sub suprafață.',
      subsections: [
        {
          heading: 'Zonele cu risc seismic ridicat în România',
          content: 'Potrivit hărții seismice naționale, cele mai vulnerabile regiuni din punct de vedere seismic sunt:',
          lists: [
            {
              items: [
                'zona Vrancea și regiunile limitrofe,',
                'Banatul,',
                'Crișana,',
                'Maramureșul,',
                'Oltenia.'
              ],
              ordered: false
            }
          ],
          additional_content: 'Dintre acestea, Vrancea este de departe cea mai activă, generând aproximativ 30% din energia seismică eliberată în Europa. Acest lucru plasează România printre statele cu cel mai mare risc seismic de pe continent.'
        },
        {
          heading: 'Cutremure istorice și impactul asupra populației',
          content: 'Istoria seismică a României include evenimente majore care au avut consecințe dramatice. Cel mai grav cutremur din istoria recentă a fost cel din 4 martie 1977, cu o magnitudine de 7,2 grade pe scara Richter, soldat cu peste 1.500 de victime și pagube materiale considerabile, în special în București. Alte cutremure importante au avut loc în:',
          lists: [
            {
              items: [
                '1940, cu o magnitudine de 7,7;',
                '1986, cu o magnitudine de 7,1.'
              ],
              ordered: false
            }
          ]
        },
        {
          heading: 'Activitate seismică anuală și estimări pentru viitor',
          content: 'În fiecare an, în zona Vrancea se produc în medie între 8 și 12 cutremure cu magnitudini ce depășesc 4 grade pe scara Richter, iar unul sau două dintre acestea pot atinge 5 grade. Se estimează că un cutremur major, cu o magnitudine de peste 7 grade, poate apărea la intervale de 30–40 de ani.'
        },
        {
          heading: 'Importanța pregătirii și conștientizării',
          content: 'Având în vedere frecvența și potențialul distructiv al acestor fenomene, informarea, educația și pregătirea populației sunt esențiale pentru reducerea riscurilor și protejarea vieților. Măsurile de prevenție, construcțiile adaptate normelor seismice și simulările de intervenție pot face diferența în cazul unui seism major.'
        }
      ]
    },
    {
      id: 'masuri-de-siguranta-inainte-de-cutremur',
      heading: 'Măsuri de siguranță înainte de cutremur',
      content: 'Pregătirea din timp este un pas esențial pentru a reduce riscurile și a-ți proteja familia în eventualitatea unui cutremur. Cunoașterea regulilor de siguranță îți permite să iei măsuri preventive eficiente, care pot face diferența în momente critice.',
      subsections: [
        {
          heading: 'Verificarea locuinței',
          content: 'Începe prin a evalua rezistența locuinței tale la cutremure. Informează-te dacă imobilul a fost construit conform normativelor seismice în vigoare. Dacă există suspiciuni sau construcția este veche, solicită o expertiză tehnică. Totodată, asigură-te că obiectele grele sau instabile – cum ar fi bibliotecile, televizoarele sau decorațiunile voluminoase – sunt bine fixate, pentru a preveni accidentările în timpul unui seism.'
        },
        {
          heading: 'Kitul de urgență – esențial în caz de cutremur',
          content: 'Un kit de urgență pentru cutremur ar trebui să asigure supraviețuirea familiei tale pentru cel puțin 72 de ore. Conținutul de bază ar trebui să includă:',
          lists: [
            {
              items: [
                'Apă potabilă (minimum 4 litri de persoană pe zi);',
                'Alimente neperisabile;',
                'Medicamente de strictă necesitate;',
                'Lanternă cu baterii de rezervă;',
                'Radio portabil (preferabil cu baterii);',
                'Trusă de prim ajutor;',
                'Haine de schimb;',
                'Copii ale documentelor importante, protejate în pungi impermeabile.'
              ],
              ordered: false
            }
          ],
          additional_content: 'Păstrează kitul într-un loc ușor accesibil, cunoscut de toți membrii familiei, și verifică periodic proviziile pentru a înlocui produsele expirate sau deteriorate.'
        }
      ]
    },
    {
      id: 'ce-trebuie-sa-faci-in-timpul-unui-cutremur',
      heading: 'Ce să faci în timpul unui cutremur?',
      content: 'Primele secunde ale unui cutremur sunt esențiale și pot face diferența dintre siguranță și pericol. Modul în care acționezi depinde de locul în care te afli în momentul producerii seismului.',
      subsections: [
        {
          heading: 'Dacă ești în interior',
          content: 'Aplică regula de bază: „Apleacă-te, Acoperă-te, Ține-te”. Apleacă-te imediat pe genunchi pentru a nu fi dezechilibrat, protejează-ți capul și gâtul cu brațele și adăpostește-te sub o piesă de mobilier solidă, precum o masă rezistentă, sau lângă un perete interior care nu prezintă risc de prăbușire. Nu ieși afară în timpul cutremurului, deoarece există pericolul să fii lovit de obiecte care cad, precum tencuiala, ferestre, acoperișuri sau cabluri.'
        },
        {
          heading: 'Dacă te afli în exterior',
          content: 'Îndepărtează-te rapid de clădiri, stâlpi, copaci sau orice structură care s-ar putea prăbuși. Găsește un spațiu deschis și rămâi acolo până când zguduiturile se opresc complet.'
        },
        {
          heading: 'Dacă ești la volan',
          content: 'Trage pe dreapta într-un loc sigur, departe de poduri, pasaje, semafoare sau clădiri. Rămâi în mașină cu centura de siguranță pusă și așteaptă finalul cutremurului. Evită oprirea sub pasaje sau lângă construcții care ar putea cădea.'
        },
        {
          heading: 'Ce să NU faci în timpul unui cutremur',
          content: '',
          lists: [
            {
              items: [
                'Nu folosi liftul – acesta se poate bloca sau defecta în timpul mișcărilor seismice.',
                'Nu te adăposti în cadrul ușii – deși era o recomandare veche, studiile moderne arată că acest loc nu oferă protecție reală.',
                'Nu intra în panică – păstrează-ți calmul, respiră adânc și concentrează-te pe măsuri sigure.'
              ],
              ordered: false
            }
          ]
        }
      ]
    },
    {
      id: 'actiuni-recomandate-dupa-cutremur',
      heading: 'Acțiuni recomandate după cutremur',
      content: 'Acțiunile pe care le întreprinzi imediat după un cutremur sunt la fel de importante ca măsurile de protecție luate în timpul seismului. În primul rând, asigură-te că ești în siguranță și evaluează rapid starea ta de sănătate, precum și a celor din apropiere. Dacă este nevoie, acordă primul ajutor, dar evită să muți persoanele grav rănite, cu excepția situațiilor în care există un pericol iminent (cum ar fi un incendiu sau un risc de prăbușire).',
      subsections: [
        {
          heading: 'Verificarea locuinței și a siguranței structurale',
          content: 'După ce te asiguri că toți cei din jur sunt bine, inspectează cu atenție locuința. Caută fisuri în pereți, tavan prăbușit, scări instabile sau alte semne de deteriorare structurală. Dacă observi probleme majore, părăsește clădirea imediat și nu reveni decât după ce este evaluată de un specialist și declarată sigură.'
        },
        {
          heading: 'Fii atent la replici',
          content: 'Cutremurul inițial poate fi urmat de replici care apar la intervale de ore sau chiar zile. Acestea pot fi la fel de periculoase, mai ales dacă structura clădirii este deja afectată. La fiecare replică, aplică aceleași măsuri de protecție ca în cazul unui cutremur principal – adăpostește-te, evită ferestrele, obiectele suspendate și pereții exteriori.'
        },
        {
          heading: 'Verifică instalațiile și evită riscurile suplimentare',
          content: 'Inspectează instalațiile de gaz, apă și electricitate. Dacă simți miros de gaz, închide imediat robinetul principal, aerisește zona și nu folosi foc deschis – nu aprinde chibrituri, brichete sau aparate electrice. De asemenea, evită să pornești luminile sau orice dispozitiv până când te asiguri că nu există scurgeri.'
        },
        {
          heading: 'Urmărește informațiile oficiale',
          content: 'Rămâi informat prin radio cu baterii sau prin telefon, ascultând doar surse oficiale. Urmează instrucțiunile autorităților locale și folosește telefonul doar pentru urgențe reale, pentru a nu suprasolicita rețelele de comunicare.'
        }
      ]
    },
    {
      id: 'sisteme-de-avertizare-si-monitorizare-a-cutremurelor',
      heading: 'Sisteme de avertizare și monitorizare a cutremurelor',
      content: 'România are sisteme moderne de monitorizare seismică ce pot oferi avertizare de cutremur în timp real. Rețeaua seismică națională, administrată de Institutul Național pentru Fizica Pământului, monitorizează constant activitatea seismică și poate emite o alertă de seism la câteva secunde după detectarea unui cutremur.|Există mai multe aplicații de cutremur pentru smartphone-uri care te pot notifica rapid în caz de seism. Aceste aplicații folosesc datele de la stațiile seismice și te pot avertiza cu câteva secunde înainte ca undele seismice să ajungă la tine, oferindu-ți timp prețios să te adăpostești.|Un sistem de avertizare timpurie poate fi extrem de util, mai ales în zonele urbane aglomerate, unde câteva secunde pot salva vieți, permițând oprirea rapidă a ascensoarelor și a trenurilor sau alertarea personalului medical din spitale.'
    },
    {
      id: 'impactul-cutremurelor-asupra-cladirilor-si-infrastructurii',
      heading: 'Impactul cutremurelor asupra clădirilor și infrastructurii',
      content: 'Un cutremur de mare magnitudine poate avea efecte devastatoare asupra construcțiilor, în special în zonele vulnerabile din București. Potrivit hărții de risc seismic a capitalei, multe dintre clădirile ridicate înainte de anul 1977 prezintă deficiențe structurale majore. Cele mai expuse sunt centrul istoric și cartierele cu blocuri înalte construite în perioada comunistă, unde riscul seismic este considerat ridicat.|Consecințele directe ale unui seism puternic includ prăbușirea clădirilor fragile, avarierea gravă a podurilor și drumurilor, întreruperea alimentării cu apă, electricitate și gaze, precum și blocarea căilor de acces pentru echipele de intervenție.|Evaluarea seismică a clădirilor se realizează prin expertize tehnice care analizează rezistența structurală și clasifică imobilele în <a href="https://www.asigurari.ro/blog/common/ce-trebuie-sa-stii-despre-clasele-de-risc-seismic"><strong>clase de risc seismic</strong></a>. Clădirile din clasa I de risc seismic necesită consolidare urgentă, fiind considerate extrem de periculoase în caz de cutremur.'
    },
    {
      id: 'asigurarea-locuintei-in-caz-de-cutremur',
      heading: 'Asigurarea locuinței în caz de cutremur',
      content: 'Protecția financiară prin asigurare este o parte importantă a pregătirii pentru cutremure. În România, există două tipuri principale de asigurări care te protejează împotriva daunelor provocate de seisme: asigurarea obligatorie PAD (Polița de Asigurare Împotriva Dezastrelor Naturale) și asigurarea facultativă de locuință.|Polița PAD este obligatorie pentru toate locuințele și acoperă daunele cauzate de cutremure, inundații și alunecări de teren. Această asigurare oferă o protecție de bază pentru structura clădirii.|<a href="https://www.asigurari.ro/asigurare/home"><strong>Asigurarea facultativă de locuință</strong></a> completează protecția oferită de PAD, acoperind atât clădirea, cât și bunurile din interior. Această poliță poate include protecție împotriva mai multor riscuri și oferă sume asigurate mai mari, care pot fi personalizate în funcție de valoarea proprietății tale.|Pentru a beneficia de o protecție completă, este recomandat să ai ambele tipuri de asigurări. Asigurarea facultativă poate acoperi diferența dintre costul real de reconstrucție și suma oferită de PAD, precum și bunurile personale care nu sunt incluse în polița obligatorie.|Este important să știi că locuințele clasificate în clasa I de risc seismic nu pot fi asigurate până când nu sunt consolidate. De aceea, dacă locuiești într-o clădire cu risc seismic ridicat, consolidarea este o prioritate, nu doar pentru siguranța ta, ci și pentru a putea obține protecție prin asigurare.|Când alegi o asigurare de locuință, verifică atent clauzele referitoare la cutremure, sumele de despăgubire, franșizele și procedurile de raportare a daunelor. O asigurare potrivită îți poate oferi liniște și resursele financiare necesare pentru a-ți reconstrui viața după un cutremur major.|Înțelegerea riscurilor și măsurilor de protecție este un prim pas important. Acum, poți începe să aplici aceste cunoștințe în viața ta de zi cu zi. Verifică-ți locuința, pregătește un kit de urgență și discută cu familia despre ce trebuie făcut în caz de cutremur. Informează-te constant și fii pregătit să acționezi rapid și eficient. Astfel, vei fi mai bine protejat și vei putea face față cu încredere unui astfel de eveniment.|<strong><i>Surse foto: Freepik.com</i></strong>'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
