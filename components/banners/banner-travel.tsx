import InsuranceBanner from './InsuranceBanner'

export default function BannerTravel() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de călătorie de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de călătorie cu calculatorul nostru online'
    },
    { text: 'Primești polița de călătorie instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de călătorie'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare medicală de călătorie Online si Comparator de Asigurare medicală de călătorie"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/travel"
      backgroundImage="/images/asigurari/banners/travel.webp"
    />
  )
}
