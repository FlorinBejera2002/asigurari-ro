import InsuranceBanner from './InsuranceBanner'

export default function BannerRCA() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare RCA de la toți asigurătorii din România'
    },
    { text: 'Calculează rapid prețul RCA cu calculatorul nostru online' },
    { text: 'Primești polița RCA instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte RCA' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare RCA Online și Calculator de Asigurare RCA Auto"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL RCA"
      buttonLink="/forms/rca"
      backgroundImage="/images/asigurari/banners/rca.webp"
    />
  )
}
