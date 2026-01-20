import { TravelCountryConfig, TravelPageMetadata } from '@/types/travel'

export const metadata: TravelPageMetadata = {
  title: 'Asigurare calatorie Cehia online - Preturi avantajoase - Asigurari.ro',
  description:
    'Vrei sa calatoresti in Cehia? Intra pe asigurari.ro si fa-ti asigurare de calatorie Cehia la cel mai avantajos pret ✅ Plata securizata'
}

export const cehiaConfig: TravelCountryConfig = {
  country: 'Asigurare Călătorie Cehia',
  intro_text:
    'Cehia este una dintre țările preferate ale turiștilor europeni și nu numai. Atât capitala Praga, cât și orașe precum Brno sau Olomouc, reușesc să cucerească turiștii prin frumusețea și romantismul lor. Cehia reprezintă una dintre țările speciale ale Europei, fiind cunoscută și pentru berea excelentă pe care o produce.',
  sections: [
    {
      id: 'sejur-fara-griji',
      icon: 'fa-shield-alt',
      title: 'Asigurare călătorie Cehia, pentru un sejur fără griji',
      toc_title: 'Sejur fără griji',
      type: 'simple',
      content:
        'Fie că alegeți să călătoriți în Cehia în scopuri turistice sau o faceți pentru a rezolva chestiuni profesionale sau de afaceri, este necesar să vă protejați cu o asigurare călătorie Cehia. O astfel de poliță vă garantează compensații financiare de până la 50.000 de euro, în cazul producerii unor evenimente nefericite. Asigurarea de călătorie în Cehia vizează atât evenimente de ordin medical, cât și situații de altă natură. Pentru a putea beneficia de protecția oferită de un astfel de contract, este necesar să achiziționați o poliță înainte de a părăsi teritoriul României. Valabilitatea asigurării este de cel puțin trei zile și poate ajunge până la un an. În conformitate cu prevederile firmei la care decideți să vă asigurați, valabilitatea poate fi prelungită chiar și după expirarea perioadei de un an.'
    },
    {
      id: 'cum-se-incheie',
      icon: 'fa-edit',
      title: 'Cum se încheie o asigurare de călătorie Cehia?',
      toc_title: 'Cum se încheie asigurarea',
      type: 'simple',
      content:
        'În situația în care alegeți să călătoriți în această țară și doriți să beneficiați de o poliță de asigurare medicală Cehia, aveți posibilitatea de a alege cea mai bună opțiune imediat. Tot ce trebuie să faceți este să completați formularul disponibil pe site-ul Asigurari.ro. În baza informațiilor pe care le furnizați, sistemul nostru vă oferă lista de oferte, din care o veți putea alege pe cea dorită.'
    },
    {
      id: 'cum-achizitionati',
      icon: 'fa-credit-card',
      title: 'Cum puteți achiziționa o asigurare de călătorie în Cehia?',
      toc_title: 'Cum achiziționați asigurarea',
      type: 'simple',
      content:
        'Odată aleasă opțiunea pe care doriți să o cumpărați, puteți achita contravaloarea ei tot prin intermediul platformei noastre. Aceasta vă pune la dispoziție un sistem securizat de plată cu cardul VISA, VISA Electron, Mastercard sau Maestro. De asemenea, puteți achita suma aferentă și prin transfer bancar. Imediat ce a fost confirmată efectuarea tranzacției, polița de asigurare Cehia va fi livrată pe adresa dumneavoastră de e-mail. Atât în cadrul contractului, cât și pe site-ul firmei de asigurări veți găsi adresele de contact la care puteți apela, în cazul în care aveți nevoie de activarea poliței ca urmare a producerii unor evenimente.'
    },
    {
      id: 'riscuri-incluse',
      icon: 'fa-check-circle',
      title: 'Riscurile incluse într-o asigurare de călătorie în Cehia',
      toc_title: 'Riscurile incluse',
      type: 'list_only',
      content:
        'O asigurare de călătorie Cehia online garantează protecția în caz de accidente și îmbolnăvire. În același timp, ea poate fi completată și cu riscuri suplimentare, precum:',
      list_items: [
        'pierderea sau furtul bagajelor;',
        'falimentul companiei de zbor și anularea călătoriei;',
        'refuzul companiei de zbor de a vă îmbarca;',
        'asigurare storno pentru anularea călătoriei;',
        'asigurare storno pentru bilete de avion;',
        'amânarea călătoriei pentru mai mult de 12 ore;',
        'pierderea sau furtul unor acte.'
      ]
    },
    {
      id: 'riscuri-neincluse',
      icon: 'fa-times-circle',
      title: 'Riscurile neincluse în asigurarea medicală de călătorie în Cehia',
      toc_title: 'Riscurile neincluse',
      type: 'list_only',
      content: 'Riscurile care nu sunt acoperite prin asigurarea medicală de călătorie în Cehia sunt:',
      list_items: [
        'sinuciderea și tentativa de sinucidere;',
        'incidente rezultate în urma consumului de alcool, droguri sau medicamente în exces;',
        'accidentele cauzate de condusul fără permis;',
        'incidentele produse în urma activităților cu grad mare de periculozitate.'
      ]
    }
  ]
}
