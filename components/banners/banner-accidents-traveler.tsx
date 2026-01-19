import InsuranceBanner from './InsuranceBanner'

export default function BannerAccidentsTraveler() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de accidente călători de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de accidente călători cu calculatorul nostru online'
    },
    {
      text: 'Primești polița de accidente călători instant pe email după plată'
    },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de accidente călători'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de accidente călători Online și Calculator de asigurare de accidente călători"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/accidents_traveler"
      backgroundImage="/images/asigurari/banners/accidents_traveler.webp"
    />
  )
}
