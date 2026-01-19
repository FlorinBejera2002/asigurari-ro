import { faArrowDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations()

  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    left: `${(i * 3.33) % 100}%`,
    duration: `${12 + (i % 8)}s`,
    delay: `${-(i % 12)}s`
  }))

  return (
    <section className="christmas-hero pb-20 md:pb-28 w-full pt-32">
      <div className="hero-shadow-overlay"></div>

      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay
          }}
        >
          {i % 3 === 0 ? '*' : i % 3 === 1 ? '•' : '❅'}
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 w-full">
          <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm xl:max-w-md">
            <Image
              src="/images/asigurari/main_illustration.svg"
              alt="Main Illustration"
              width={500}
              height={400}
              className="w-full h-auto"
              priority={true}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:flex-1 lg:pr-8 xl:-mt-20">
            <h1 className="text-2xl lg:text-5xl leading-tight font-bold text-white mb-6 md:px-0">
              Cea mai mare platformă de asigurări online
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 mb-10 md:px-0 max-w-4xl">
              Compară ofertele asiguratorilor și alege polița potrivită pentru
              tine. Simplu, rapid și sigur.
            </p>

            <h1
              style={{
                padding: 0,
                margin: 0,
                fontSize: 0,
                textIndent: '-999999px'
              }}
            >
              {t('meta.h1')}
            </h1>

            <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 w-full max-w-2xl">
              <Link
                href="/asigurari/rca"
                className="christmas-btn flex-1 sm:flex-none w-fit inline-flex items-center justify-center px-10 py-4 lg:px-8 lg:py-4 bg-blue-700 text-white rounded-md text-xl md:text-lg font-semibold md:hover:bg-blue-800 transition-all duration-200 shadow-lg relative"
              >
                <Image
                  src="/images/asigurari/snow-cap.svg"
                  alt="Snow cap"
                  width={100}
                  height={20}
                  className="w-full absolute -top-[17.5px] md:-top-[13.5px] z-[99] left-1/2 -translate-x-1/2 pointer-events-none"
                />
                Vezi ofertele RCA
                <div className="flex items-center justify-center ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    fill="currentColor"
                    viewBox="0 0 640 640"
                  >
                    <path d="M232 80.1L232 32.1C232 18.8 221.3 8.1 208 8.1C194.7 8.1 184 18.8 184 32.1L184 80.1C184 93.4 194.7 104.1 208 104.1C221.3 104.1 232 93.4 232 80.1zM32 232.1L80 232.1C93.3 232.1 104 221.4 104 208.1C104 194.8 93.3 184.1 80 184.1L32 184.1C18.7 184.1 8 194.8 8 208.1C8 221.4 18.7 232.1 32 232.1zM281.5 134.6C290.9 144 306.1 144 315.4 134.6L349.3 100.7C358.7 91.3 358.7 76.1 349.3 66.8C339.9 57.5 324.7 57.4 315.4 66.8L281.5 100.6C272.1 110 272.1 125.2 281.5 134.5zM100.5 349.6L134.4 315.7C143.8 306.3 143.8 291.1 134.4 281.8C125 272.5 109.8 272.4 100.5 281.8L66.6 315.6C57.2 325 57.2 340.2 66.6 349.5C76 358.8 91.2 358.9 100.5 349.5zM66.6 66.7C57.2 76.1 57.2 91.3 66.6 100.6L100.5 134.5C109.9 143.9 125.1 143.9 134.4 134.5C143.7 125.1 143.8 109.9 134.4 100.6L100.5 66.7C91.1 57.3 76 57.3 66.6 66.7zM351.3 222.4L515 266.3C525.1 269 532.3 278 532.8 288.5L535.5 354.6L289.5 288.7L324.9 232.8C330.5 223.9 341.2 219.7 351.4 222.5zM284.3 207.1L239.3 278.1C211.8 278.9 187 297.6 179.5 325.5C144.6 455.6 144 458.2 140.2 472.3C136.8 485.1 144.4 498.3 157.2 501.7C170 505.1 183.2 497.5 186.6 484.7L192.8 461.5L532.8 552.6L526.6 575.8C523.2 588.6 530.8 601.8 543.6 605.2C556.4 608.6 569.6 601 573 588.2C603.7 473.6 601.3 482.6 612.3 441.4C619.8 413.5 607.6 384.9 584.2 370.4L580.8 286.5C579.5 255 557.9 228.1 527.5 219.9L363.7 176.1C333.3 167.9 301.1 180.5 284.2 207.1zM553.4 475.4L545.1 506.3L205.1 415.2C209.9 397.2 216.8 371.4 225.8 337.9C228.1 329.4 236.9 324.3 245.4 326.6L554.5 409.4C563 411.7 568.1 420.5 565.8 429L553.4 475.4zM257.7 404.4C270.5 407.8 283.7 400.2 287.1 387.4C290.5 374.6 282.9 361.4 270.1 358C257.3 354.6 244.1 362.2 240.7 375C237.3 387.8 244.9 401 257.7 404.4zM534.4 453.7C537.8 440.9 530.2 427.7 517.4 424.3C504.6 420.9 491.4 428.5 488 441.3C484.6 454.1 492.2 467.3 505 470.7C517.8 474.1 531 466.5 534.4 453.7z" />
                  </svg>
                </div>
              </Link>

              <Link
                href="#asigurari"
                className="christmas-btn offers-button group flex-1 sm:flex-none w-fit inline-flex items-center justify-center px-10 py-4 lg:px-8 lg:py-4 bg-white text-gray-800 rounded-md text-xl md:text-lg font-semibold md:hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Vezi toate ofertele
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="ml-2 text-md group-hover:translate-y-1 transition-all duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
