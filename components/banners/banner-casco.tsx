import InsuranceBanner from './InsuranceBanner'

export default function BannerCASCO() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare CASCO de la toți asigurătorii din România'
    },
    { text: 'Calculează rapid prețul CASCO cu calculatorul nostru online' },
    { text: 'Primești polița CASCO instant pe email după plată' },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    { text: 'Consultanță gratuită pentru alegerea celei mai bune oferte CASCO' }
  ]

  return (
    <InsuranceBanner
      title="Asigurare CASCO Online și Calculator de Asigurare CASCO Auto"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL CASCO"
      buttonLink="/forms/casco"
      backgroundImage="/images/asigurari/banners/casco.webp"
    />
  )
}
