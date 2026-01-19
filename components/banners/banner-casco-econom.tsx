import InsuranceBanner from './InsuranceBanner'

export default function BannerCascoEconom() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare CASCO Econom de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării CASCO Econom cu calculatorul nostru online'
    },
    { text: 'Primești polița CASCO Econom instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte CASCO Econom'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare CASCO Econom Online și Calculator de asigurare CASCO Econom"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL CASCO ECONOM"
      buttonLink="/forms/casco_econom"
      backgroundImage="/images/asigurari/banners/casco_econom.webp"
    />
  )
}
