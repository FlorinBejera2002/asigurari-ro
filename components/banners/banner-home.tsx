import InsuranceBanner from './InsuranceBanner'

export default function BannerHome() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare locuință de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de locuință cu calculatorul nostru online'
    },
    { text: 'Primești polița de asigurare instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare locuință Online și Calculator de asigurare pentru locuință"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/home"
      backgroundImage="/images/asigurari/banners/home.webp"
    />
  )
}
