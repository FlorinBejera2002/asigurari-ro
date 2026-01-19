import InsuranceBanner from './InsuranceBanner'

export default function BannerAccidents() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de accidente de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de accidente cu calculatorul nostru online'
    },
    { text: 'Primești polița de accidente instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de accidente'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de accidente Online și Calculator de asigurare de accidente"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/accidents"
      backgroundImage="/images/asigurari/banners/accidents.webp"
    />
  )
}
