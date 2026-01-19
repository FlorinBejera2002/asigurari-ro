import Link from 'next/link'

interface BannerOption {
  text: string
}

interface InsuranceBannerProps {
  title: string
  options: BannerOption[]
  buttonText: string
  buttonLink: string
  backgroundImage: string
}

export default function InsuranceBanner({
  title,
  options,
  buttonText,
  buttonLink,
  backgroundImage
}: InsuranceBannerProps) {
  return (
    <div
      className="relative w-full bg-cover bg-center shadow-sm"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="flex items-center px-4 md:px-8 relative z-10 max-w-7xl mx-auto py-8 md:py-20">
        <div className="space-y-6 md:space-y-8 max-w-3xl w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h1>

          <div className="text-white w-full">
            {options.map((option, index) => (
              <div key={index} className="w-full flex items-start gap-3 mb-2">
                <i className="fa fa-check text-green-500 mt-1" />
                <p>{option.text}</p>
              </div>
            ))}
          </div>

          <Link
            href={buttonLink}
            className="inline-block pt-2 w-fit text-center bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold md:hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-md"
          >
            <span className="text-base">{buttonText}</span>
            <i className="fa fa-chevron-circle-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
