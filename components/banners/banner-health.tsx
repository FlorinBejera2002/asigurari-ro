import InsuranceBanner from './InsuranceBanner'

export default function BannerHealth() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de sănătate de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de sănătate cu calculatorul nostru online'
    },
    { text: 'Primești polița de sănătate instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de sănătate'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de sănătate Online și Calculator de asigurare de sănătate"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/health"
      backgroundImage="/images/asigurari/banners/health.webp"
    />
  )
}
