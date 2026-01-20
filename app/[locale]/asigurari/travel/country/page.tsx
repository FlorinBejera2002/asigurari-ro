import {
  faCheckCircle,
  faDollarSign,
  faList,
  faListAlt,
  faSearch,
  faUmbrella
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import TravelCountries from '../components/TravelCountries'

export const metadata: Metadata = {
  title:
    'Asigurare calatorie in functie de tara- Preturi avantajoase - Asigurari.ro',
  description:
    'Vrei sa pleci in vacanta? Intra pe asigurari.ro si incheie o asigurare de calatorie la cel mai avantajos pret in functie de tara de destinatie ✅Plata securizata'
}

export default function TravelCountriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          <strong>Asigurare călătorie în funcție de țară</strong>
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Dacă tot dorești să te bucuri de vacanță fără griji, ia în calcul și
            o asigurare de călătorie. O astfel de asigurare îți oferă liniștea
            de care ai nevoie pentru a te bucura fără griji de zilele libere.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full">
        <div className="flex items-start gap-3 mb-6">
          <FontAwesomeIcon
            icon={faList}
            className="text-blue-700 text-lg md:text-2xl"
          />
          <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <a
            href="#ce-acopera"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon
              icon={faUmbrella}
              className="text-green-500 mt-1"
            />
            <span className="font-semibold text-gray-800">
              <strong>Ce acoperă asigurarea</strong>
            </span>
          </a>

          <a
            href="#pret-diferente"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-green-500 mt-1"
            />
            <span className="font-semibold text-gray-800">
              <strong>Prețul în funcție de țară</strong>
            </span>
          </a>

          <a
            href="#cum-se-incheie"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faSearch} className="text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Cum se încheie asigurarea</strong>
            </span>
          </a>

          <a
            href="#tipuri-asigurari"
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon icon={faListAlt} className="text-green-500 mt-1" />
            <span className="font-semibold text-gray-800">
              <strong>Tipuri de asigurări</strong>
            </span>
          </a>
        </div>
      </div>

      <div
        id="ce-acopera"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faUmbrella}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              Asigurare călătorie online: ce acoperă, în funcție de destinație
            </strong>
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed">
          În schimbul unei prime de asigurare, sunt acoperite principalele
          cheltuieli medicale, inclusiv cele care nu sunt acoperite de Cardul
          European de Asigurări Sociale de Sănătate precum cheltuieli cu
          spitalizarea în regim public și privat, și, la nevoie, repatrierea în
          caz de accident sau deces, dar și decontarea medicamentelor necesare
          ca urmare a unor probleme medicale.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Te poți proteja prin contractul de asigurare de călătorie, în funcție
          de țară, și de alte riscuri. Astfel, poate acoperi, prin contract, la
          solicitarea ta și, desigur, contra unui cost suplimentar și:
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              pierderea sau furtul bagajelor, a actelor;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              falimentul companiei aeriene care are drept consecință anularea
              călătoriei;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              refuzul companiei de a te îmbarca;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              amânarea călătoriei cu mai mult de 12 ore;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              asigurare storno pentru anularea călătoriei;
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              asigurare storno pentru bilete de avion.
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Indiferent de țara în care mergi, asigurarea de călătorie nu acoperă
          evenimentele care reprezintă o consecință a consumului de alcool,
          stupefiante ori abuzului de medicamente. Nu poți stipula în contractul
          cu asiguratorul nici riscurile reprezentate de sinucidere ori
          tentative de sinucidere. Nici riscul unui accident în cazul în care
          conduci autoturisme fără permis nu va fi acoperit de poliță.
        </p>
      </div>

      <div
        id="pret-diferente"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              Asigurare călătorie: diferă prețul în funcție de țară
            </strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            O asigurare călătorie costă între 20 și 80 de lei sau chiar mai
            mult, însă prețul acesteia diferă în funcție de țara aleasă și de
            riscurile prevăzute în contract. Pentru a beneficia de avantajele
            unei asigurări de călătorie ieftină poți folosi comparatorul de
            asigurări călătorie care te ajută să obții oferta dorită ținând cont
            de țara aleasă ca destinație de vacanță. Astfel, vei afla ofertele
            de prețuri la principalii furnizori de asigurări de călătorie.
          </p>
        </div>
      </div>

      <div
        id="cum-se-incheie"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8 w-full"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              Cum se încheie o asigurare de călătorie în funcție de țară
            </strong>
          </h2>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            Poți încheia o asigurare călătorie în funcție de țara aleasă ca
            destinație, folosind platforma asigurări.ro. Compania identifică
            pentru tine cele mai bune oferte la prețuri avantajoase. În plus,
            vezi și care sunt drepturile și obligațiile asociate fiecărei oferte
            în parte. După completarea formularului, asigurări.ro îți va trimite
            polița de asigurare pe email, conform specificațiilor tale.
          </p>
        </div>
      </div>

      <div
        id="tipuri-asigurari"
        className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full"
      >
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <FontAwesomeIcon
              icon={faListAlt}
              className="text-blue-700 text-lg md:text-2xl leading-none pt-[2px] mr-2"
            />
            <strong>
              De câte tipuri sunt asigurările de călătorie în funcție de țară
            </strong>
          </h2>
        </div>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              Asigurarea de călătorie în funcție de țara aleasă poate fi
              standard, care include ajutor medical în situații de urgență și
              repatriere de urgență, în cazuri de complicații medicale sau
              deces.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1 text-sm"
            />
            <span className="text-gray-700 leading-relaxed">
              Al doilea tip de asigurare de călătorie este asigurarea completă
              care poate include, în funcție de compania aleasă, asigurarea
              bagajelor, asigurarea în cazul practicării unor sporturi extreme,
              asigurări suplimentare dacă alegi să călătorești în interes de
              serviciu.
            </span>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          După cum vezi, polițele de călătorie de pe asigurări.ro sunt flexibile
          și te ajută să obții cea mai bună ofertă, în funcție de țara în care
          vei dori să călătorești. Alege din lista de mai jos destinația dorită,
          află toate informațiile despre polița de asigurare călătorie din țara
          respectivă și apoi folosește calculatorul nostru de asigurări, pentru
          a-ți configura cea mai bună poliță.
        </p>
      </div>

      <TravelCountries />
    </div>
  )
}
