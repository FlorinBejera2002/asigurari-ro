import InsuranceBanner from './InsuranceBanner'

export default function BannerRCP() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare RCP de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării RCP cu calculatorul nostru online'
    },
    { text: 'Primești polița RCP instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte RCP' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare RCP Online și Calculator de asigurare RCP"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL RCP"
      buttonLink="/forms/rcp"
      backgroundImage="/images/asigurari/banners/rcp.webp"
    />
  )
}
