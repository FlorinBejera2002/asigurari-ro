import InsuranceBanner from './InsuranceBanner'

export default function BannerCMR() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare CMR de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării CMR cu calculatorul nostru online'
    },
    { text: 'Primești polița CMR instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte CMR' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare CMR Online și Calculator de asigurare CMR"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL CMR"
      buttonLink="/forms/cmr"
      backgroundImage="/images/asigurari/banners/cmr.webp"
    />
  )
}
