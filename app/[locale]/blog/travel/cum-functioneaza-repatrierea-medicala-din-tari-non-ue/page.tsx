import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'
export const metadata: Metadata = {
  title: 'Cum functioneaza repatrierea medicala din tari non-UE | asigurari.ro',
  description:
    'Afla cum functioneaza repatrierea medicala din tari non-UE ➤ Ce acoperiri sunt necesare ➤ Pasi de urmat ➤ Rolul asigurarii de calatorie'
}

const articleData: BlogArticleData = {
  title: 'Cum funcționează repatrierea medicală din țări non-UE',
  image:
    '/images/asigurari/blog/travel/plus-in-forma-de-avion.webp',
  image_alt: 'Pat de spital pe care sta un plus in forma de avion',
  intro_text:
    'Imagina‑ți că pleci într‑o vacanță în Asia sau în America de Sud. Ai planificat totul în detaliu: biletele de avion, cazări exotice, trasee de explorare. Dar, deodată, o boală gravă sau un accident rupe ritmul aventurii. Sistemul medical local poate fi costisitor sau nu dispui de acces la îngrijire adecvată. În asemenea momente intervine repatrierea medicală – aducerea pacientului acasă pentru a primi tratament. În Uniunea Europeană, cardul european de sănătate și rețelele medicale facilitează adesea transportul, dar dincolo de granițele UE lucrurile se complică.',
  toc_items: [
    {
      href: '#ce-este-repatrierea-medicala-si-de-ce-ai-nevoie-de-ea',
      title: 'Ce este repatrierea medicală și de ce ai nevoie de ea'
    },
    {
      href: '#diferentele-intre-repatrierea-din-ue-si-din-tari-non-ue',
      title: 'Diferențele între repatrierea din UE și din țări non‑UE'
    },
    {
      href: '#cum-functioneaza-repatrierea-medicala-din-tari-non-ue',
      title: 'Cum funcționează repatrierea medicală din țări non‑UE'
    },
    {
      href: '#rolul-asigurarilor-medicale-de-calatorie',
      title: 'Rolul asigurării medicale de călătorie'
    },
    {
      href: '#pasii-pe-care-trebuie-sa-i-urmezi-pentru-repatriere',
      title: 'Pașii pe care trebuie să-i urmezi pentru repatriere'
    },
    {
      href: '#costuri-si-modalitati-de-decontare',
      title: 'Costuri și modalități de decontare'
    }
  ],
  content_sections: [
    {
      id: 'ce-este-repatrierea-medicala-si-de-ce-ai-nevoie-de-ea',
      heading: 'Ce este repatrierea medicală și de ce ai nevoie de ea',
      content:
        'Atunci când călătorești într-o țară non-UE și apare o urgență medicală, este posibil să nu găsești acolo tratamentul sau infrastructura necesară pentru a primi îngrijirea corespunzătoare. În astfel de cazuri, repatrierea medicală devine soluția care îți permite să te întorci acasă, unde sistemul medical îți oferă condiții mai bune de tratament. Pentru a înțelege pe deplin acest concept, este util să vezi atât definiția sa generală, cât și situațiile în care se aplică și tipurile de transport disponibile.',
      subsections: [
        {
          subheading: 'Definiție generală și scop',
          content:
            'Repatrierea medicală înseamnă transportul unei persoane bolnave sau rănite dintr‑o țară străină în propria țară pentru a beneficia de tratament adecvat. Spre deosebire de repatrierea funerară (transportul persoanelor decedate), repatrierea medicală se aplică pacienților vii care nu pot primi îngrijirea necesară în țara în care s‑a produs accidentul. Scopul este de a asigura continuitatea îngrijirii medicale în condiții optime, cu riscuri minime pentru sănătatea pacientului.|Pentru că în afara UE nu există un sistem comun de asistență medicală, costurile de spitalizare și transport pot fi foarte ridicate. De exemplu, un sejur la spital într‑o țară asiatică poate ajunge la câteva zeci de mii de euro, iar un zbor medical cu avion sanitar depășește adesea 10 000 de euro. În absența unei asigurări, aceste sume trebuie plătite din buzunarul propriu. Instituțiile statului (ambasade, consulate) te pot ajuta cu informarea și facilitarea procedurilor, dar nu suportă costurile. Este motivul pentru care repatrierea medicală este legată indisolubil de asigurarea de sănătate de călătorie, care acoperă atât cheltuielile medicale, cât și transportul specializat.'
        },
        {
          subheading: 'Când se aplică repatrierea medicală',
          content:
            'Repatrierea medicală devine necesară în următoarele situații:',
          lists: [
            {
              items: [
                '<i>Accidente grave:</i> traumatisme craniene, fracturi multiple sau accidente rutiere care necesită intervenții chirurgicale complexe.',
                '<i>Boli acute:</i> infarct, accident vascular cerebral, meningită, infecții severe sau alte patologii acute care nu pot fi tratate eficient la destinație.',
                '<i>Complicații ale unor boli cronice:</i> crize astmatice severe, decompensarea diabetului, complicarea unei insuficiențe cardiace etc.',
                '<i>Lipsa resurselor medicale:</i> dacă spitalul local nu dispune de aparatură sau specialiști pentru un anumit tip de tratament.'
              ]
            }
          ]
        },
        {
          subheading: 'Tipuri de repatriere medicală',
          content: 'Există mai multe modalități de a transporta pacientul:',
          lists: [
            {
              items: [
                '<strong>Repatrierea cu avion sanitar</strong> – un avion mic echipat ca un salon de terapie intensivă, cu echipaj medical specializat. Este soluția preferată când pacientul nu poate fi transportat altfel.',
                '<strong>Repatrierea cu ambulanță rutieră</strong> – pentru destinații apropiate (Turcia, Serbia, Ucraina) se poate utiliza o ambulanță complet echipată, dacă starea permite un transport rutier de câteva ore.',
                '<strong>Repatrierea cu zbor comercial</strong> – atunci când pacientul este stabil, se poate întoarce cu un zbor de linie, la clasa economică sau business. De regulă, este însoțit de un medic sau paramedic și dispune de echipament medical portabil (oxigen, monitor de funcții vitale).',
                '<strong>Repatrierea cu charter medical</strong> – o variantă intermediară între ambulanța aeriană și zborul de linie. Este un avion charter adaptat transportului medical, dar cu costuri mai mici decât un avion sanitar.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'diferentele-intre-repatrierea-din-ue-si-din-tari-non-ue',
      heading: 'Diferențele între repatrierea din UE și din țări non‑UE',
      content:
        'În interiorul Uniunii Europene, cetățenii pot beneficia de cardul european de asigurări de sănătate (CEASS) și de anumite acorduri de cooperare medicală între state. Din acest motiv, procedurile sunt mai simple, iar costurile sunt reduse sau preluate de sistemul de sănătate al țării de origine. Când călătorești în țări non‑UE, lucrurile se schimbă radical, iar repatrierea depinde exclusiv de asigurarea ta de sănătate de călătorie sau de asigurarea privată.',
      subsections: [
        {
          subheading: 'Cardul european vs. asigurarea de călătorie',
          content:
            'În statele din spațiul european, un cetățean român are dreptul la îngrijiri medicale pe baza cardului european de sănătate. Acesta acoperă tratamentul necesar în sistemul public și, uneori, repatrierea este acoperită de casele de asigurări (depinde de țara în care te afli).|Când călătorești în țări non‑UE, nu există un sistem comun; fiecare stat are propriile reguli, iar costurile medicale sunt, de multe ori, exorbitante. Ministerul Afacerilor Externe recomandă în mod expres turiștilor să aibă o asigurare de sănătate care să includă repatrierea pentru a acoperi eventualele cheltuieli de îngrijire și transport. Fără o asigurare, consulatele și ambasadele nu îți pot plăti spitalizarea sau biletele de avion; acestea oferă doar sprijin administrativ. De aceea, asigurarea medicală de călătorie este indispensabilă pentru destinațiile din afara UE.'
        },
        {
          subheading: 'Rolul ambasadelor și consulatelor',
          content:
            'Ambasadele și consulatele României în străinătate sunt adesea primele instituții la care apelezi când ai probleme medicale. În UE, consulatele pot intermedia contactul cu instituțiile de asigurare și pot facilita transferul. În afara UE, ele îți oferă informații despre spitalele recomandate, contactează familia și asigurătorul, dar nu îți pot plăti serviciile medicale. În unele cazuri, dacă situația este foarte gravă și nu ai resurse, reprezentanța diplomatică poate contracta un împrumut de urgență pentru repatriere, dar vei fi obligat să rambursezi banii la întoarcere. De aceea, asigurarea rămâne un pilon fundamental.'
        }
      ]
    },
    {
      id: 'cum-functioneaza-repatrierea-medicala-din-tari-non-ue',
      heading: 'Cum funcționează repatrierea medicală din țări non‑UE',
      content:
        'Repatrierea medicală este o operațiune complexă în care colaborează medici, asigurători, asistenți, companii de transport și autorități. În această secțiune vei afla pas cu pas ce se întâmplă atunci când ai nevoie de repatriere dintr‑o țară non‑UE, cum se stabilește tipul de transport și cine ia deciziile.',
      subsections: [
        {
          subheading: 'Declanșarea procedurii',
          content:
            'Repatrierea medicală începe cu un eveniment neprevăzut – un accident sau o boală. De îndată ce ai nevoie de asistență medicală, contactează asigurătorul sau compania de asistență (numărul se găsește în poliță). De obicei, companiile de asigurări colaborează cu firme de asistență specializate în gestionarea urgentă a cazurilor medicale în străinătate. În primă fază se stabilește diagnosticul, se confirmă că starea pacientului permite transportul și se decide dacă repatrierea este cea mai bună soluție.'
        },
        {
          subheading: 'Evaluarea medicală și planul de repatriere',
          content:
            'Un medic local, în coordonare cu medicul asigurătorului, stabilește dacă pacientul poate fi transportat. Se iau în calcul:',
          lists: [
            {
              items: [
                'stabilitatea hemodinamică (tensiune arterială, ritm cardiac);',
                'funcția respiratorie;',
                'existența fracturilor sau a altor leziuni care ar putea fi agravate de transport;',
                'necesitatea echipamentului special (oxigen, intubație, monitorizare).'
              ]
            }
          ]
        },
        {
          subheading: 'Alegerea tipului de transport',
          content:
            'În funcție de starea pacientului și de distanță, se alege cea mai potrivită modalitate de transport:',
          lists: [
            {
              items: [
                '<i>Avion sanitar:</i> pentru urgențe severe și distanțe lungi. Avionul este echipat cu echipament medical și un echipaj de medici și paramedici. Costul este ridicat, dar asigură cel mai înalt grad de siguranță.',
                '<i>Avion de linie cu escortă medicală:</i> se folosește când pacientul este stabil și poate călători la clasa business sau economic. Se rezervă mai multe locuri pentru patura medicală, iar echipajul medical însoțește pacientul până la destinație.',
                '<i>Ambulanță rutieră:</i> pentru distanțe scurte sau medii, când starea pacientului permite transportul terestru.',
                '<i>Combinații de transport:</i> uneori se folosește o combinație de mijloace (ambulanță + avion + ambulanță) pentru a asigura continuitatea îngrijirii.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'rolul-asigurarilor-medicale-de-calatorie',
      heading: 'Rolul asigurării medicale de călătorie',
      content:
        'O <a href="https://www.asigurari.ro/asigurare/travel"><strong>asigurare de călătorie</strong></a> completă include acoperirea repatrierii medicale, fiind esențială pentru călătoriile în țări non-UE. Aceasta acoperă:',
      lists: [
        {
          items: [
            '<strong>Costurile transportului medical</strong>: avion sanitar, escortă medicală, ambulanță',
            '<strong>Cheltuielile medicale în străinătate</strong>: consultații, tratamente, spitalizare',
            '<strong>Coordonarea logistică</strong>: compania de asistență organizează totul',
            '<strong>Comunicarea cu familia</strong>: informarea constantă a familiei despre starea pacientului',
            '<strong>Transferul către spitalul din România</strong>: internarea directă în spitalul recomandat'
          ]
        }
      ],
      additional_content:
        'Fără asigurare, toate aceste costuri cad în sarcina ta sau a familiei tale, putând ajunge la sume de zeci sau sute de mii de euro.'
    },
    {
      id: 'pasii-pe-care-trebuie-sa-i-urmezi-pentru-repatriere',
      heading: 'Pașii pe care trebuie să-i urmezi pentru repatriere',
      content:
        'Dacă te afli într-o situație care necesită repatriere medicală, iată pașii pe care trebuie să-i urmezi:',
      lists: [
        {
          items: [
            '<strong>Contactează imediat asigurătorul</strong>: Sună la numărul de urgență din poliță (disponibil 24/7)',
            '<strong>Prezintă informații complete</strong>: Explică situația, diagnosticul, locația ta exactă',
            '<strong>Urmează instrucțiunile medicului</strong>: Coordonează-te cu echipa medicală locală și cu medicul asigurătorului',
            '<strong>Păstrează toate documentele</strong>: Rapoarte medicale, chitanțe, facturi',
            '<strong>Informează familia</strong>: Asigură-te că familia ta este la curent cu situația',
            '<strong>Colaborează cu echipa de asistență</strong>: Compania de asistență va organiza transportul și va coordona toate detaliile'
          ]
        }
      ]
    },
    {
      id: 'costuri-si-modalitati-de-decontare',
      heading: 'Costuri și modalități de decontare',
      content:
        'Costurile repatrierii medicale variază în funcție de distanță, tipul de transport și starea pacientului. Exemple de costuri:',
      lists: [
        {
          items: [
            'Avion sanitar din Asia: 50.000 - 150.000 EUR',
            'Avion sanitar din SUA: 80.000 - 200.000 EUR',
            'Escortă medicală pe zbor comercial: 3.000 - 10.000 EUR',
            'Ambulanță rutieră din țări vecine: 1.000 - 5.000 EUR'
          ]
        }
      ],
      additional_content:
        'Cu o asigurare de călătorie adecvată, aceste costuri sunt acoperite integral sau parțial, în funcție de limita poliței. De aceea, este crucial să alegi o asigurare cu limite suficient de mari pentru destinațiile non-UE.'
    }
  ],
  conclusion:
    'Repatrierea medicală din țări non-UE este un proces complex și costisitor, dar esențial în cazul unor urgențe medicale grave. Fără o asigurare de călătorie adecvată, costurile pot fi devastatoare pentru bugetul familiei. De aceea, înainte de a călători în destinații din afara Uniunii Europene, asigură-te că ai o poliță completă care include repatrierea medicală.|Vizitează <a href="https://www.asigurari.ro"><strong>asigurari.ro</strong></a> pentru a descoperi cele mai bune opțiuni de asigurare de călătorie cu acoperire pentru repatriere medicală. Călătorește în siguranță, știind că ești protejat în orice situație!'
}

export default function RepatriereMedicalaPage() {
  return <BlogArticle data={articleData} />
}
