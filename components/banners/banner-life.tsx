import InsuranceBanner from './InsuranceBanner'

export default function BannerLife() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de viață de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de viață cu calculatorul nostru online'
    },
    { text: 'Primești polița de viață instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de viață'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de viață Online și Calculator de asigurare de viață"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/life"
      backgroundImage="/images/asigurari/banners/life.webp"
    />
  )
}
