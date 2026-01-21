import { Metadata } from 'next'
import { BlogArticleData } from '@/types/blog'
import BlogArticle from '../../components/BlogArticle'

export const metadata: Metadata = {
  title:
    'Asigurarea de viata â€“ ce este, cum functioneaza si de ce ai nevoie de ea? | asigurari.ro',
  description:
    'Descopera ce inseamna asigurarea de viata âž¤ Cum functioneaza, ce tipuri exista si cum o alegi pe cea potrivita'
}

const articleData: BlogArticleData = {
  title:
    'Asigurarea de viaÈ›Äƒ â€“ ce este, cum funcÈ›ioneazÄƒ È™i de ce ai nevoie de ea?',
  image: '/images/asigurari/blog/life/asigurare-viata-laptop.webp',
  image_alt:
    'O persoana care lucreaza la laptop cautand informatii despre asigurarea de viata langa pe birou o cafea si notite',
  intro_text:
    'Asigurarea de viaÈ›Äƒ este o componentÄƒ esenÈ›ialÄƒ a planificÄƒrii financiare, oferind siguranÈ›Äƒ È™i protecÈ›ie pentru tine È™i cei dragi. TotuÈ™i, mulÈ›i oameni evitÄƒ subiectul, fie din cauza lipsei de informaÈ›ii, fie din cauza unor mituri persistente. ÃŽn acest articol, vom explora Ã®n detaliu ce Ã®nseamnÄƒ asigurarea de viaÈ›Äƒ, de ce este importantÄƒ È™i cum sÄƒ o alegi pe cea mai potrivitÄƒ.',
  toc_items: [
    {
      href: '#ce-este-asigurarea-de-viata',
      title: 'Ce este asigurarea de viaÈ›Äƒ?'
    },
    {
      href: '#de-ce-este-importanta-asigurarea-de-viata',
      title: 'De ce este importantÄƒ asigurarea de viaÈ›Äƒ?'
    },
    {
      href: '#cum-sa-alegi-asigurarea-de-viata-potrivita',
      title: 'Cum sÄƒ alegi asigurarea de viaÈ›Äƒ potrivitÄƒ'
    },
    {
      href: '#costurile-asigurarii-de-viata-factori-si-exemple',
      title: 'Costurile asigurÄƒrii de viaÈ›Äƒ: factori È™i exemple'
    },
    {
      href: '#cum-se-incheie-o-asigurare-de-viata',
      title: 'Cum se Ã®ncheie o poliÈ›Äƒ de asigurare de viaÈ›Äƒ?'
    },
    {
      href: '#mituri-si-adevaruri-despre-asigurarea-de-viata',
      title: 'Mituri È™i adevÄƒruri despre asigurarea de viaÈ›Äƒ'
    }
  ],
  content_sections: [
    {
      id: 'ce-este-asigurarea-de-viata',
      heading: 'Ce este asigurarea de viaÈ›Äƒ?',
      content:
        'Asigurarea de viaÈ›Äƒ reprezintÄƒ un instrument financiar esenÈ›ial pentru protejarea familiei È™i asigurarea stabilitÄƒÈ›ii financiare Ã®n cazul unui eveniment neprevÄƒzut. Prin acest contract, o companie de asigurÄƒri se angajeazÄƒ sÄƒ plÄƒteascÄƒ o sumÄƒ prestabilitÄƒ beneficiarilor desemnaÈ›i Ã®n caz de deces al asiguratului, Ã®n schimbul plÄƒÈ›ii unei prime regulate.',
      subsections: [
        {
          subheading: 'Definirea conceptului de asigurare de viaÈ›Äƒ',
          content:
            'Asigurarea de viaÈ›Äƒ este mai mult decÃ¢t un contract, ci este o promisiune financiarÄƒ. Astfel, <a href="https://www.asigurari.ro/asigurare/life"><strong>asigurarea de viaÈ›Äƒ</strong></a> oferÄƒ liniÈ™te sufleteascÄƒ, garantÃ¢nd cÄƒ cei dragi vor avea resursele necesare pentru a acoperi cheltuieli precum credite, costuri de trai sau educaÈ›ie, Ã®n cazul Ã®n care venitul principal dispare din cauza decesului.'
        },
        {
          subheading: 'Tipuri principale de asigurÄƒri de viaÈ›Äƒ',
          content:
            'AsigurÄƒrile de viaÈ›Äƒ sunt diverse, fiind concepute pentru a rÄƒspunde unor nevoi specifice ale fiecÄƒrui individ sau familie. Alegerea potrivitÄƒ depinde de obiectivele financiare, perioada de acoperire doritÄƒ È™i bugetul disponibil.|Cele mai comune tipuri de asigurÄƒri de viaÈ›Äƒ includ:',
          lists: [
            {
              items: [
                '<i>Asigurarea de viaÈ›Äƒ temporarÄƒ (termen limitat):</i> Asigurarea de viaÈ›Äƒ temporarÄƒ oferÄƒ protecÈ›ie pentru o perioadÄƒ specificatÄƒ. Termenul limitÄƒ este de obicei Ã®ntre 10 È™i 30 de ani. DacÄƒ asiguratul decedeazÄƒ Ã®n aceastÄƒ perioadÄƒ, beneficiarii primesc suma asiguratÄƒ.',
                '<i>Asigurarea de viaÈ›Äƒ permanentÄƒ:</i> Aceasta oferÄƒ acoperire pe toatÄƒ durata vieÈ›ii asiguratului, atÃ¢ta timp cÃ¢t primele sunt plÄƒtite. Include È™i o componentÄƒ de economisire, care creÈ™te Ã®n timp È™i poate fi utilizatÄƒ pentru nevoi financiare viitoare.',
                '<i>Asigurarea de viaÈ›Äƒ pentru economii È™i investiÈ›ii:</i> Acest tip de poliÈ›Äƒ combinÄƒ protecÈ›ia cu acumularea unui capital pe termen lung. Primele plÄƒtite sunt investite, iar cÃ¢È™tigurile obÈ›inute pot fi folosite pentru pensionare sau alte obiective financiare.'
              ]
            }
          ],
          additional_content:
            'Aceste tipuri de asigurÄƒri permit o personalizare Ã®n funcÈ›ie de prioritÄƒÈ›ile fiecÄƒrei persoane.'
        },
        {
          subheading: 'Cum funcÈ›ioneazÄƒ asigurarea de viaÈ›Äƒ?',
          content:
            'FuncÈ›ionarea unei poliÈ›e de asigurare implicÄƒ plÄƒtirea unei prime stabilite, calculate Ã®n funcÈ›ie de factori precum vÃ¢rstÄƒ È™i sÄƒnÄƒtate. ÃŽn caz de deces, suma asiguratÄƒ este plÄƒtitÄƒ beneficiarilor desemnaÈ›i, conform termenilor contractuali.|Aceasta este o soluÈ›ie sigurÄƒ pentru protecÈ›ie financiarÄƒ È™i sprijin pe termen lung.'
        }
      ]
    },
    {
      id: 'de-ce-este-importanta-asigurarea-de-viata',
      heading: 'De ce este importantÄƒ asigurarea de viaÈ›Äƒ?',
      content:
        'Asigurarea de viaÈ›Äƒ este o investiÈ›ie Ã®n siguranÈ›a financiarÄƒ a familiei È™i un pilon central al planificÄƒrii financiare. Aceasta oferÄƒ stabilitate È™i protecÈ›ie Ã®mpotriva incertitudinilor vieÈ›ii, asigurÃ¢nd resursele necesare pentru a face faÈ›Äƒ cheltuielilor Ã®n cazul unui eveniment neprevÄƒzut.',
      subsections: [
        {
          subheading:
            'Beneficiile asigurÄƒrii de viaÈ›Äƒ pentru familie È™i cei dragi',
          content:
            'Unul dintre principalele avantaje ale asigurÄƒrii de viaÈ›Äƒ este sprijinul financiar pe care Ã®l oferÄƒ beneficiarilor. ÃŽn cazul unui deces neaÈ™teptat, aceasta:',
          lists: [
            {
              items: [
                'AcoperÄƒ datoriile restante, cum ar fi creditele ipotecare sau Ã®mprumuturile;',
                'AsigurÄƒ costurile educaÈ›ionale pentru copii;',
                'GaranteazÄƒ un venit constant pentru a menÈ›ine nivelul de trai al familiei.'
              ]
            }
          ]
        },
        {
          subheading:
            'Rolul asigurÄƒrii de viaÈ›Äƒ Ã®n planificarea financiarÄƒ',
          content:
            'Asigurarea de viaÈ›Äƒ este un element crucial Ã®n orice strategie financiarÄƒ pe termen lung. De exemplu:',
          lists: [
            {
              items: [
                'CreeazÄƒ un fond de urgenÈ›Äƒ pentru situaÈ›ii critice;',
                'ProtejeazÄƒ activele acumulate de-a lungul timpului;',
                'OferÄƒ predictibilitate È™i stabilitate financiarÄƒ Ã®n faÈ›a incertitudinilor.'
              ]
            }
          ]
        },
        {
          subheading:
            'Asigurarea de viaÈ›Äƒ ca protecÈ›ie Ã®mpotriva riscurilor',
          content:
            'Asigurarea de viaÈ›Äƒ acÈ›ioneazÄƒ ca un scut Ã®mpotriva riscurilor financiare majore, oferind:',
          lists: [
            {
              items: [
                'ProtecÈ›ie Ã®mpotriva pierderii venitului principal al familiei;',
                'LiniÈ™tea cÄƒ cei dragi vor putea face faÈ›Äƒ provocÄƒrilor financiare, indiferent de circumstanÈ›e.'
              ]
            }
          ],
          additional_content:
            'Prin aceste beneficii, asigurarea de viaÈ›Äƒ devine un instrument indispensabil de protecÈ›ie È™i planificare.'
        }
      ]
    },
    {
      id: 'cum-sa-alegi-asigurarea-de-viata-potrivita',
      heading: 'Cum sÄƒ alegi asigurarea de viaÈ›Äƒ potrivitÄƒ',
      content:
        'Alegerea asigurÄƒrii de viaÈ›Äƒ potrivite este un proces care necesitÄƒ analizÄƒ È™i planificare. Este important sÄƒ iei Ã®n considerare nevoile tale, situaÈ›ia financiarÄƒ È™i ofertele disponibile pe piaÈ›Äƒ.',
      subsections: [
        {
          subheading: 'Factori de luat Ã®n considerare',
          content:
            'Alegerea unei asigurÄƒri de viaÈ›Äƒ potrivite implicÄƒ evaluarea unor factori esenÈ›iali. ÃŽn primul rÃ¢nd, este important sÄƒ Ã®È›i analizezi nevoile familiei È™i sÄƒ estimezi cÃ¢t de mult ar fi necesar pentru a acoperi cheltuieli importante, cum ar fi creditele, educaÈ›ia copiilor È™i alte responsabilitÄƒÈ›i financiare. TotodatÄƒ, vÃ¢rsta joacÄƒ un rol crucial, deoarece cu cÃ¢t Ã®ncepi mai devreme, cu atÃ¢t primele sunt mai mici, iar costurile pe termen lung devin mai accesibile. ÃŽn final, asigurarea aleasÄƒ trebuie sÄƒ fie compatibilÄƒ cu bugetul tÄƒu È™i sÄƒ rÄƒmÃ¢nÄƒ sustenabilÄƒ pe termen lung, fÄƒrÄƒ a afecta stabilitatea financiarÄƒ a familiei tale.'
        },
        {
          subheading: 'Compararea Ã®ntre oferte È™i furnizori de asigurÄƒri',
          content:
            'Analizarea ofertelor de la mai mulÈ›i furnizori este un pas crucial:',
          lists: [
            {
              items: [
                'ComparÄƒ valoarea sumei asigurate, termenii contractului È™i beneficiile suplimentare;',
                'VerificÄƒ reputaÈ›ia È™i stabilitatea financiarÄƒ a companiei de asigurÄƒri;',
                'CiteÈ™te recenzii sau solicitÄƒ recomandÄƒri pentru a identifica furnizorii de Ã®ncredere.'
              ]
            }
          ]
        },
        {
          subheading: 'Cum sÄƒ identifici cea mai bunÄƒ poliÈ›Äƒ pentru tine?',
          content: 'Pentru a face alegerea potrivitÄƒ:',
          lists: [
            {
              items: [
                'ConsultÄƒ un specialist Ã®n asigurÄƒri, care te poate ajuta sÄƒ Ã®nÈ›elegi toate detaliile poliÈ›ei È™i sÄƒ alegi cea mai bunÄƒ variantÄƒ pentru tine;',
                'StabileÈ™te clar care sunt obiectivele tale financiare È™i verificÄƒ dacÄƒ poliÈ›a le Ã®ndeplineÈ™te;',
                'AsigurÄƒ-te cÄƒ termenii sunt flexibili È™i cÄƒ poliÈ›a poate fi adaptatÄƒ Ã®n cazul unor schimbÄƒri viitoare Ã®n viaÈ›a ta.'
              ]
            }
          ],
          additional_content:
            'Prin evaluarea atentÄƒ a acestor factori, vei putea alege o asigurare de viaÈ›Äƒ care sÄƒ oferÄƒ protecÈ›ie optimÄƒ pentru tine È™i cei dragi.'
        }
      ],
      image: {
        src: '/images/asigurari/blog/life/asigurare-viata-discutie.webp',
        alt: 'Un cuplu discuta cu un agent de asigurari la birou analizand documente pentru o polita de viata'
      }
    },
    {
      id: 'costurile-asigurarii-de-viata-factori-si-exemple',
      heading: 'Costurile asigurÄƒrii de viaÈ›Äƒ: factori È™i exemple',
      content:
        'Costul unei asigurÄƒri de viaÈ›Äƒ este influenÈ›at de mai mulÈ›i factori È™i variazÄƒ Ã®n funcÈ›ie de tipul poliÈ›ei, nevoile asiguratului È™i furnizorul ales.',
      subsections: [
        {
          subheading: 'Ce influenÈ›eazÄƒ costul unei asigurÄƒri de viaÈ›Äƒ?',
          content:
            'Principalii factori care determinÄƒ costul unei poliÈ›e includ:',
          lists: [
            {
              items: [
                '<strong>VÃ¢rsta:</strong> Cu cÃ¢t eÈ™ti mai tÃ¢nÄƒr, cu atÃ¢t primele sunt mai mici, deoarece riscul de deces este redus;',
                '<strong>SÄƒnÄƒtatea:</strong> Problemele medicale cresc costurile. De aceea, evaluÄƒrile de sÄƒnÄƒtate pot influenÈ›a semnificativ preÈ›ul;',
                '<strong>Tipul de asigurare:</strong> AsigurÄƒrile temporare sunt mai accesibile decÃ¢t cele permanente, care includ È™i componente de economisire sau investiÈ›ie;',
                '<strong>Suma asiguratÄƒ:</strong> O valoare mai mare a sumei asigurate duce la o primÄƒ mai mare;',
                '<strong>Durata poliÈ›ei:</strong> O perioadÄƒ mai lungÄƒ de acoperire implicÄƒ un cost mai mare.'
              ]
            }
          ]
        },
        {
          subheading: 'Exemple de costuri tipice',
          content: 'Un adult de 30 de ani, sÄƒnÄƒtos, poate plÄƒti:',
          lists: [
            {
              items: [
                '15-30 de euro/lunÄƒ pentru o poliÈ›Äƒ temporarÄƒ cu o sumÄƒ asiguratÄƒ de 100.000 de euro;',
                '50-100 de euro/lunÄƒ pentru o poliÈ›Äƒ permanentÄƒ cu componentÄƒ de economisire.'
              ]
            }
          ],
          additional_content:
            'Pentru un adult de 50 de ani, costurile pot fi duble, din cauza riscului mai ridicat.'
        },
        {
          subheading: 'ModalitÄƒÈ›i de a economisi la poliÈ›a de asigurare',
          content: 'Pentru a reduce costurile:',
          lists: [
            {
              items: [
                '<strong>ÃŽncheie poliÈ›a la o vÃ¢rstÄƒ mai tÃ¢nÄƒrÄƒ:</strong> Primele sunt mai mici È™i stabile;',
                '<strong>ComparÄƒ ofertele mai multor furnizori:</strong> VerificÄƒ detaliile fiecÄƒrei poliÈ›e;',
                '<strong>EvitÄƒ opÈ›iunile suplimentare neesenÈ›iale:</strong> AdaugÄƒ doar beneficiile strict necesare;',
                '<strong>MenÈ›ine un stil de viaÈ›Äƒ sÄƒnÄƒtos:</strong> Nevoia de prime mai mari scade dacÄƒ nu existÄƒ factori de risc, precum fumatul sau boli cronice.'
              ]
            }
          ],
          additional_content:
            'AÈ™adar, o poliÈ›Äƒ de asigurare de viaÈ›Äƒ bine aleasÄƒ poate oferi protecÈ›ie È™i securitate fÄƒrÄƒ a deveni o povarÄƒ financiarÄƒ. Analizarea atentÄƒ a acestor factori È™i alegerea unei soluÈ›ii care sÄƒ corespundÄƒ nevoilor tale È™i bugetului disponibil sunt paÈ™i esenÈ›iali pentru o decizie informatÄƒ.'
        }
      ]
    },
    {
      id: 'cum-se-incheie-o-asigurare-de-viata',
      heading: 'Cum se Ã®ncheie o poliÈ›Äƒ de asigurare de viaÈ›Äƒ?',
      content:
        'ÃŽncheierea unei poliÈ›e de asigurare de viaÈ›Äƒ este un proces relativ simplu, dar necesitÄƒ atenÈ›ie la detalii pentru a te asigura cÄƒ alegi soluÈ›ia potrivitÄƒ pentru nevoile tale.',
      subsections: [
        {
          subheading: 'PaÈ™ii necesari pentru Ã®ncheierea unei poliÈ›e',
          content: 'AceÅŸtia pot fi urmÄƒtorii:',
          lists: [
            {
              items: [
                '<strong>Analiza nevoilor financiare:</strong> IdentificÄƒ suma de acoperire necesarÄƒ, perioada doritÄƒ È™i tipul de poliÈ›Äƒ (temporarÄƒ, permanentÄƒ, investiÈ›ionalÄƒ);',
                '<strong>CÄƒutarea ofertelor:</strong> ComparÄƒ produse oferite de mai mulÈ›i asigurÄƒtori, È›inÃ¢nd cont de preÈ›, beneficii È™i condiÈ›ii;',
                '<strong>Consultarea unui specialist:</strong> DiscutÄƒ cu un agent de asigurÄƒri sau un consultant pentru a primi sfaturi personalizate;',
                '<strong>Completarea cererii:</strong> CompleteazÄƒ formularul oferit de compania de asigurÄƒri, specificÃ¢nd detalii despre sÄƒnÄƒtate, stil de viaÈ›Äƒ È™i istoricul medical;',
                '<strong>Examinare medicalÄƒ:</strong> ÃŽn unele cazuri, compania poate solicita un control medical pentru evaluarea riscului;',
                '<strong>Semnarea contractului:</strong> DupÄƒ aprobarea cererii, semneazÄƒ contractul È™i plÄƒteÈ™te prima iniÈ›ialÄƒ.'
              ]
            }
          ]
        },
        {
          subheading: 'Documente È™i informaÈ›ii necesare',
          content:
            'Vei avea nevoie de actul de identitate, informaÈ›ii despre venituri È™i situaÈ›ia financiarÄƒ, istoric medical È™i informaÈ›ii despre tratamente sau afecÈ›iuni È™i de beneficiarii desemnaÈ›i (numele È™i relaÈ›ia cu aceÈ™tia).'
        },
        {
          subheading: 'Ce trebuie sÄƒ verifici Ã®nainte de semnarea poliÈ›ei?',
          content: 'Nu uita sa verifici:',
          lists: [
            {
              items: [
                '<strong>Clauzele contractuale:</strong> CiteÈ™te cu atenÈ›ie termenii È™i condiÈ›iile, inclusiv excluderile È™i limitÄƒrile;',
                '<strong>Suma asiguratÄƒ:</strong> AsigurÄƒ-te cÄƒ valoarea acoperirii este adecvatÄƒ nevoilor tale;',
                '<strong>Beneficiarii:</strong> VerificÄƒ dacÄƒ beneficiarii desemnaÈ›i sunt corect indicaÈ›i;',
                '<strong>Flexibilitatea poliÈ›ei:</strong> ÃŽnÈ›elege opÈ›iunile de modificare sau anulare a contractului;',
                '<strong>Costuri È™i termene:</strong> ConfirmÄƒ valoarea primei È™i data scadenÈ›ei plÄƒÈ›ilor.'
              ]
            }
          ],
          additional_content:
            'OdatÄƒ ce procesul este complet È™i poliÈ›a este activÄƒ, vei beneficia de protecÈ›ia financiarÄƒ oferitÄƒ. PregÄƒtirea È™i informarea sunt esenÈ›iale pentru a Ã®ncheia o poliÈ›Äƒ de Ã®ncredere.'
        }
      ]
    },
    {
      id: 'mituri-si-adevaruri-despre-asigurarea-de-viata',
      heading: 'Mituri È™i adevÄƒruri despre asigurarea de viaÈ›Äƒ',
      content:
        'Asigurarea de viaÈ›Äƒ este adesea Ã®nconjuratÄƒ de mituri care pot descuraja oamenii sÄƒ beneficieze de acest instrument financiar valoros. ÃŽnÈ›elegerea clarÄƒ a realitÄƒÈ›ilor poate ajuta la luarea unei decizii informate.',
      subsections: [
        {
          subheading: 'Mituri comune legate de asigurarea de viaÈ›Äƒ',
          content:
            '<strong>"Asigurarea de viaÈ›Äƒ este scumpÄƒ":</strong> Multe persoane considerÄƒ cÄƒ nu-È™i pot permite o poliÈ›Äƒ, Ã®nsÄƒ existÄƒ opÈ›iuni accesibile pentru diferite bugete, mai ales dacÄƒ sunt Ã®ncheiate la o vÃ¢rstÄƒ tÃ¢nÄƒrÄƒ.|<strong>"Nu am nevoie de asigurare pentru cÄƒ sunt tÃ¢nÄƒr È™i sÄƒnÄƒtos":</strong> VÃ¢rsta È™i sÄƒnÄƒtatea actualÄƒ scad costul poliÈ›ei, iar riscurile neprevÄƒzute pot apÄƒrea oricÃ¢nd.|<strong>"Asigurarea de viaÈ›Äƒ nu este necesarÄƒ dacÄƒ nu am familie":</strong> Chiar È™i fÄƒrÄƒ dependenÈ›i financiari, poliÈ›a poate acoperi costuri precum datoriile sau cheltuielile funerare.|<strong>"Nu primesc nimic Ã®n schimb dacÄƒ nu pÄƒÈ›esc nimic":</strong> Unele poliÈ›e includ componente de economisire sau returnarea unei pÄƒrÈ›i din prime.'
        },
        {
          subheading:
            'ExplicaÈ›ii È™i clarificÄƒri pentru cele mai frecvente Ã®ntrebÄƒri greÈ™ite',
          content:
            'IatÄƒ ce trebuie sÄƒ ÅŸtii:|<strong>Mit:</strong> "Companiile de asigurÄƒri nu plÄƒtesc Ã®n caz de deces". <strong>AdevÄƒr:</strong> AtÃ¢ta timp cÃ¢t primele sunt plÄƒtite È™i nu existÄƒ nereguli, companiile plÄƒtesc suma asiguratÄƒ conform termenilor contractuali.|<strong>Mit:</strong> "Asigurarea de viaÈ›Äƒ este doar pentru persoanele Ã®nstÄƒrite". <strong>AdevÄƒr:</strong> AsigurÄƒrile sunt disponibile pentru toate categoriile sociale, adaptÃ¢ndu-se nevoilor È™i veniturilor fiecÄƒruia.|<strong>Mit:</strong> "Tot procesul de Ã®ncheiere a poliÈ›ei de asigurare este complicat". <strong>AdevÄƒr:</strong> Cu ajutorul consultanÈ›ilor, procesul este simplu È™i transparent.|Aceste clarificÄƒri ajutÄƒ la demitizarea asigurÄƒrii de viaÈ›Äƒ, evidenÈ›iind utilitatea sa ca mijloc de protecÈ›ie È™i planificare financiarÄƒ.'
        }
      ],
      additional_content:
        'ÃŽn concluzie, asigurarea de viaÈ›Äƒ este un pilon esenÈ›ial al siguranÈ›ei financiare. Indiferent de vÃ¢rstÄƒ sau situaÈ›ie, o astfel de poliÈ›Äƒ poate oferi liniÈ™tea cÄƒ cei dragi vor fi protejaÈ›i Ã®n momente dificile. Indiferent cÄƒ alegi o asigurare temporarÄƒ, permanentÄƒ sau pentru economii, informarea È™i alegerea corectÄƒ sunt paÈ™ii esenÈ›iali pentru a beneficia de toate avantajele.|<strong><i>SursÄƒ foto: Shutterstock, Pexels</i></strong>'
    }
  ],
  conclusion: ''
}

export default function Page() {
  return <BlogArticle data={articleData} />
}
