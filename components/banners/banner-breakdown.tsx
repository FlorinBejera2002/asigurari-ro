import InsuranceBanner from './InsuranceBanner'

export default function BannerBreakdown() {
  const bannerOptions = [
    {
      text: 'Compară ofertele de asigurare de asistență rutieră de la toți asigurătorii din România'
    },
    {
      text: 'Calculează rapid prețul asigurării de asistență rutieră cu calculatorul nostru online'
    },
    {
      text: 'Primești polița de asistență rutieră instant pe email după plată'
    },
    { text: 'Plată 100% securizată cu cardul sau transfer bancar' },
    {
      text: 'Consultanță gratuită pentru alegerea celei mai bune oferte de asistență rutieră'
    }
  ]

  return (
    <InsuranceBanner
      title="Asigurare de asistență rutieră Online și Calculator de asigurare de asistență rutieră"
      options={bannerOptions}
      buttonText="CALCULEAZĂ PREȚUL"
      buttonLink="/forms/breakdown"
      backgroundImage="/images/asigurari/banners/breakdown.webp"
    />
  )
}
