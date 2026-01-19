import InsuranceBanner from './InsuranceBanner'

export default function BannerPAD() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare PAD de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării PAD cu calculatorul nostru online'
    },
    { text: 'Primești polița PAD instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte PAD' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare PAD Online și Calculator de asigurare PAD"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL PAD"
      buttonLink="/forms/pad"
      backgroundImage="/images/asigurari/banners/pad.webp"
    />
  )
}
