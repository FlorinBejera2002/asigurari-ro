import InsuranceBanner from './InsuranceBanner'

export default function BannerAccidentsTaxi() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de accidente taxi de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de accidente taxi cu calculatorul nostru online'
    },
    { text: 'Primești polița de accidente taxi instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de accidente taxi'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de accidente taxi Online și Calculator de asigurare de accidente taxi"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/accidents_taxi"
      backgroundImage="/images/asigurari/banners/accidents_taxi.webp"
    />
  )
}
