import Image from 'next/image'
import Link from 'next/link'

export default function InsurerLogos() {
  const insurers = [
    {
      name: 'Allianz Unit',
      logo: '/images/asigurari/insurers/allianzunit/allianzunit.webp'
    },
    { name: 'Asirom', logo: '/images/asigurari/insurers/asirom/asirom.webp' },
    {
      name: 'Axeria Iard',
      logo: '/images/asigurari/insurers/axeriaiard/axeriaiard.webp'
    },
    {
      name: 'Allianz',
      logo: '/images/asigurari/insurers/allianz/allianz.webp'
    },
    {
      name: 'Eazy Insure',
      logo: '/images/asigurari/insurers/eazyinsure/eazyinsure.webp'
    },
    {
      name: 'Eurolife',
      logo: '/images/asigurari/insurers/eurolife/eurolife.webp'
    },
    {
      name: 'Garanta',
      logo: '/images/asigurari/insurers/garanta/garanta.webp'
    },
    {
      name: 'Generali',
      logo: '/images/asigurari/insurers/generali/generali.webp'
    },
    { name: 'Grawe', logo: '/images/asigurari/insurers/grawe/grawe.webp' },
    {
      name: 'Groupama',
      logo: '/images/asigurari/insurers/groupama/groupama.webp'
    },
    {
      name: 'Hellas Direct',
      logo: '/images/asigurari/insurers/hellasdirect/hellasdirect_original.webp'
    },
    {
      name: 'Omniasig',
      logo: '/images/asigurari/insurers/omniasig/omniasig.webp'
    },
    {
      name: 'Signal Iduna',
      logo: '/images/asigurari/insurers/signaliduna/signaliduna.webp'
    },
    { name: 'Uniqa', logo: '/images/asigurari/insurers/uniqa/uniqa.webp' },
    { name: 'Anytime', logo: '/images/asigurari/insurers/anytime/anytime.webp' }
  ]

  const doubledInsurers = [...insurers, ...insurers]

  return (
    <div className="logos overflow-hidden whitespace-nowrap shadow-xl mt-8 md:mt-16">
      <div className="animate-infinite-scroll flex gap-8 w-max pt-2">
        {doubledInsurers.map((insurer, index) => (
          <Link
            key={index}
            href="/asigurari/rca"
            className="p-2 rounded md:hover:bg-gray-100 duration-300 w-32 flex items-center justify-center"
          >
            <Image
              src={insurer.logo}
              alt={insurer.name}
              width={130}
              height={40}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
