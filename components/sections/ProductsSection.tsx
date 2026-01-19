import Link from 'next/link'

export default function ProductsSection() {
  return (
    <section className="bg-gray-50">
      <div className="pt-8 md:pt-16 max-w-7xl mx-auto px-4 md:px-8 md:-mt-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-normal text-black mb-8 text-center md:text-left md:pb-8">
            Compară și alege cea mai bună asigurare pentru tine
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 md:mb-16 w-full">
            <div
              className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative"
              id="asigurari"
            >
              <Link
                href="/asigurari/rca"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="RCA - Asigurare obligatorie de răspundere civilă auto"
              >
                <span className="sr-only">
                  RCA - Asigurare obligatorie de răspundere civilă auto
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  fill="currentColor"
                  viewBox="0 0 640 640"
                >
                  <path d="M216 72.1L216 24.1C216 19.7 212.4 16.1 208 16.1C203.6 16.1 200 19.7 200 24.1L200 72.1C200 76.5 203.6 80.1 208 80.1C212.4 80.1 216 76.5 216 72.1zM24 216.1L72 216.1C76.4 216.1 80 212.5 80 208.1C80 203.7 76.4 200.1 72 200.1L24 200.1C19.6 200.1 16 203.7 16 208.1C16 212.5 19.6 216.1 24 216.1zM298.5 117.6C301.6 120.7 306.7 120.7 309.8 117.6L343.7 83.7C346.8 80.6 346.8 75.5 343.7 72.4C340.6 69.3 335.5 69.3 332.4 72.4L298.5 106.3C295.4 109.4 295.4 114.5 298.5 117.6zM83.5 343.9L117.4 310C120.5 306.9 120.5 301.8 117.4 298.7C114.3 295.6 109.2 295.6 106.1 298.7L72.2 332.5C69.1 335.6 69.1 340.7 72.2 343.8C75.3 346.9 80.4 346.9 83.5 343.8zM72.2 72.3C69.1 75.4 69.1 80.5 72.2 83.6L106.1 117.5C109.2 120.6 114.3 120.6 117.4 117.5C120.5 114.4 120.5 109.3 117.4 106.2L83.5 72.3C80.4 69.2 75.3 69.2 72.2 72.3zM344.1 187.4L538.7 239.5C555.6 244 567.6 259 568.3 276.5L571.9 364.6C570.3 364 568.6 363.5 566.9 363.1L257.9 280.2C256.2 279.7 254.5 279.4 252.8 279.1L300 204.6C309.4 189.8 327.2 182.8 344.1 187.4zM286.4 196.1L234.2 278.5C208.7 281.3 186.4 299.3 179.4 325.6L154.6 418.3C152.5 426 148.4 441.5 142.2 464.7C137.6 481.8 147.8 499.3 164.8 503.9C181.8 508.5 199.4 498.3 204 481.3L212.3 450.4L521.4 533.2L513.1 564.1C508.5 581.2 518.7 598.7 535.7 603.3C552.7 607.9 570.3 597.7 574.9 580.7C585.3 542.1 591.5 518.9 612.2 441.6C619.2 415.4 608.9 388.6 588.3 373.4L584.3 276C583.3 251.5 566.5 230.5 542.8 224.2L348.3 171.9C324.6 165.6 299.6 175.3 286.5 196zM541 521.7L525.5 517.6L216.4 434.8C208.7 432.7 193.2 428.6 170 422.4L194.8 329.7C201.7 304.1 228 288.9 253.6 295.8L562.7 378.6C588.3 385.5 603.5 411.8 596.6 437.4L571.9 530L541 521.7zM528.6 568.1L536.9 537.2L567.8 545.5L559.5 576.4C557.2 584.9 548.4 590 539.9 587.7C531.4 585.4 526.3 576.6 528.6 568.1zM196.9 446.1L188.6 477C186.3 485.5 177.5 490.6 169 488.3C160.5 486 155.4 477.2 157.7 468.7L166 437.8L196.9 446.1zM252.7 361.7C254.1 356.1 258.4 351.7 264 350.2C269.6 348.6 275.5 350.2 279.6 354.3C283.7 358.5 285.2 364.4 283.6 370C282.2 375.6 277.9 380 272.3 381.5C266.7 383.1 260.8 381.5 256.7 377.4C252.6 373.2 251.1 367.3 252.7 361.7zM299 374.1C302.2 363 299.1 351 291 342.8C282.9 334.6 271 331.4 259.8 334.4C248.6 337.5 240 346.3 237.2 357.5C234 368.6 237.1 380.6 245.2 388.8C253.3 397 265.2 400.2 276.4 397.2C287.6 394.1 296.2 385.3 299 374.1zM519.5 416.6C525.1 418 529.5 422.3 531 427.9C532.6 433.5 531 439.4 526.9 443.5C522.7 447.6 516.8 449.1 511.2 447.5C505.6 446.1 501.2 441.8 499.7 436.2C498.1 430.6 499.7 424.7 503.8 420.6C508 416.5 513.9 415 519.5 416.6zM507.1 463C518.2 466.2 530.2 463.1 538.4 455C546.6 446.9 549.8 435 546.8 423.8C543.7 412.6 534.9 404 523.7 401.2C512.6 398 500.6 401.1 492.4 409.2C484.2 417.3 481 429.2 484 440.4C487.1 451.6 495.9 460.2 507.1 463z" />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  RCA
                </h3>
              </div>
              <Link
                href="/asigurari/rca"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/pad"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Locuință PAD - Asigurare obligatorie de locuință"
              >
                <span className="sr-only">
                  Locuință PAD - Asigurare obligatorie de locuință
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M309.1 71.2C315.2 65.5 324.8 65.5 330.9 71.2L565.5 290.2C568.7 293.2 568.9 298.3 565.9 301.5C562.9 304.7 557.8 304.9 554.6 301.9L528 277.1L528 520C528 550.9 502.9 576 472 576L168 576C137.1 576 112 550.9 112 520L112 277.1L85.5 301.9C82.3 304.9 77.2 304.7 74.2 301.5C71.2 298.3 71.4 293.2 74.6 290.2L309.1 71.2zM320 82.9L128 262.1L128 520C128 542.1 145.9 560 168 560L472 560C494.1 560 512 542.1 512 520L512 262.1L320 82.9zM296 280L296 320C296 322.1 295.2 324.2 293.7 325.7C292.2 327.2 290.2 328 288 328L248 328C243.6 328 240 331.6 240 336L240 368C240 372.4 243.6 376 248 376L288 376C292.4 376 296 379.6 296 384L296 424C296 428.4 299.6 432 304 432L336 432C340.4 432 344 428.4 344 424L344 384C344 379.6 347.6 376 352 376L392 376C396.4 376 400 372.4 400 368L400 336C400 331.6 396.4 328 392 328L352 328C347.6 328 344 324.4 344 320L344 280C344 275.6 340.4 272 336 272L304 272C299.6 272 296 275.6 296 280zM304 256L336 256C349.3 256 360 266.7 360 280L360 312L392 312C405.3 312 416 322.7 416 336L416 368C416 381.3 405.3 392 392 392L360 392L360 424C360 437.3 349.3 448 336 448L304 448C290.7 448 280 437.3 280 424L280 392L248 392C234.7 392 224 381.3 224 368L224 336C224 322.7 234.7 312 248 312L280 312L280 280C280 266.7 290.7 256 304 256z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Locuință PAD
                </h3>
              </div>
              <Link
                href="/asigurari/pad"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/home"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Locuință Facultativă - Asigurare completă de locuință"
              >
                <span className="sr-only">
                  Locuință Facultativă - Asigurare completă de locuință
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M330.9 71.2C324.8 65.5 315.2 65.5 309.1 71.2L74.5 290.2C71.3 293.2 71.1 298.3 74.1 301.5C77.1 304.7 82.2 304.9 85.4 301.9L112 277.1L112 520C112 550.9 137.1 576 168 576L472 576C502.9 576 528 550.9 528 520L528 277.1L554.5 301.9C557.7 304.9 562.8 304.7 565.8 301.5C568.8 298.3 568.6 293.2 565.4 290.2L528 255.2L528 128C528 110.3 513.7 96 496 96L464 96C446.3 96 432 110.3 432 128L432 165.6L330.9 71.3zM512 262.1L512 520C512 542.1 494.1 560 472 560L332.3 560L275.4 474.7L380 415C382.3 413.7 383.8 411.4 384 408.8C384.2 406.2 383.2 403.7 381.2 402L269.2 306C265.8 303.1 260.8 303.5 257.9 306.9C255 310.3 255.4 315.3 258.8 318.2L362.2 406.7L260 465.1C258.1 466.2 256.7 468.1 256.2 470.2C255.7 472.3 256.1 474.6 257.3 476.5L313.1 560L168 560C145.9 560 128 542.1 128 520L128 262.1L320 82.9L512 262.1zM512 128L512 240.3L448 180.6L448 128.1C448 119.3 455.2 112.1 464 112.1L496 112.1C504.8 112.1 512 119.3 512 128.1z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Locuință Facultativă
                </h3>
              </div>
              <Link
                href="/asigurari/home"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/travel"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Călătorie - Asigurare de călătorie"
              >
                <span className="sr-only">
                  Călătorie - Asigurare de călătorie
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M544 264C574.9 264 600 289.1 600 320C600 350.9 574.9 376 544 376L435.5 376L261.9 565.4C260.4 567.1 258.2 568 256 568L176 568C173.4 568 171 566.8 169.5 564.7C168 562.6 167.6 559.9 168.4 557.5L228.9 376L155.8 376L94.2 453C92.7 454.9 90.4 456 88 456L40 456C37.5 456 35.2 454.9 33.7 452.9C32.2 450.9 31.6 448.4 32.2 446L63.8 320L32.2 193.9C31.6 191.5 32.1 189 33.7 187C35.3 185 37.5 184 40 184L88 184C90.4 184 92.7 185.1 94.2 187L155.8 264L228.9 264L168.4 82.5C167.6 80.1 168 77.4 169.5 75.3C171 73.2 173.4 72 176 72L256 72C258.2 72 260.4 72.9 261.9 74.6L435.5 264L544 264zM432 360L544 360C566.1 360 584 342.1 584 320C584 297.9 566.1 280 544 280L152 280C149.6 280 147.3 278.9 145.8 277L84.2 200L50.3 200L79.8 318.1C80.1 319.4 80.1 320.7 79.8 322L50.3 440.1L84.2 440.1L145.8 363.1C147.3 361.2 149.6 360.1 152 360.1L432 360.1zM245.8 376L187.1 552L252.5 552L413.8 376L245.8 376zM252.5 88L187.1 88L245.8 264L413.8 264L252.5 88z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Călătorie
                </h3>
              </div>
              <Link
                href="/asigurari/travel"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/casco"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="CASCO - Asigurare completă auto"
              >
                <span className="sr-only">CASCO - Asigurare completă auto</span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M295.1 71.9C311.1 65.1 329.1 65.1 345.1 71.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.8 567.2C121.4 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L295.1 71.9zM338.8 86.6C326.8 81.5 313.3 81.5 301.3 86.6L124.6 161.5C108 168.6 96 184.8 96.1 203.9C96.6 300.5 136.4 474.1 300.7 552.7C313 558.6 327.3 558.6 339.6 552.7C503.8 474.1 543.7 300.5 544.1 203.9C544.2 184.8 532.2 168.5 515.6 161.5L338.8 86.6zM401.7 227.7C404.3 224.1 409.3 223.4 412.9 225.9C416.5 228.4 417.2 233.5 414.7 237.1L300.9 393.5C299.5 395.4 297.3 396.6 295 396.8C292.7 397 290.3 396.1 288.7 394.4L226.4 329.9C223.3 326.7 223.4 321.7 226.6 318.6C229.8 315.5 234.8 315.6 237.9 318.8L293.6 376.4L401.7 227.7z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  CASCO
                </h3>
              </div>
              <Link
                href="/asigurari/casco"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/casco-econom"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="CASCO Econom - Asigurare auto economică"
              >
                <span className="sr-only">
                  CASCO Econom - Asigurare auto economică
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M301.3 86.6C313.3 81.5 326.8 81.5 338.8 86.6L515.5 161.6C532.1 168.7 544.1 184.8 544 204C543.5 300.6 503.7 474.2 339.5 552.8C327.2 558.7 312.8 558.7 300.5 552.8C136.3 474.2 96.4 300.6 95.9 204C95.8 184.9 107.8 168.7 124.4 161.6L301.1 86.6zM345.1 71.8C329.1 65 311.1 65 295.1 71.8L118.3 146.8C96.3 156.1 79.9 177.8 80 204C80.5 303.2 121.3 484.7 293.6 567.2C310.3 575.2 329.7 575.2 346.4 567.2C518.8 484.7 559.5 303.2 560 204C560.1 177.8 543.7 156.1 521.7 146.8L345.1 71.8zM320 216C315.6 216 312 219.6 312 224L312 296L240 296C235.6 296 232 299.6 232 304C232 308.4 235.6 312 240 312L312 312L312 384C312 388.4 315.6 392 320 392C324.4 392 328 388.4 328 384L328 312L400 312C404.4 312 408 308.4 408 304C408 299.6 404.4 296 400 296L328 296L328 224C328 219.6 324.4 216 320 216z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  CASCO Econom
                </h3>
              </div>
              <Link
                href="/asigurari/casco-econom"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/breakdown"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Asistență Rutieră - Servicii de asistență rutieră"
              >
                <span className="sr-only">
                  Asistență Rutieră - Servicii de asistență rutieră
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M217.7 128C211.3 128 205.6 131.8 203 137.6C193.1 160.2 170.5 176 144.3 176C120.6 176 99.9 163.1 88.9 144L144.3 144C162 144 176.3 129.6 176.3 112C176.1 94.5 161.9 80 144.3 80L89 80C100.1 60.9 120.8 48 144.4 48C170.6 48 193.2 63.8 203.1 86.4C205.6 92.2 211.4 96 217.8 96L423.1 96C429.5 96 435.2 92.2 437.8 86.4C447.7 63.8 470.3 48 496.5 48C520.2 48 540.9 60.9 551.9 80L496.5 80C478.9 80 464.6 94.4 464.5 112C464.5 129.5 478.9 144 496.5 144L551.9 144C540.8 163.1 520.1 176 496.5 176C470.3 176 447.7 160.2 437.8 137.6C435.3 131.8 429.5 128 423.1 128L217.7 128zM144.4 128L66 128C73.4 164.5 105.7 192 144.4 192C177.2 192 205.4 172.3 217.7 144L423 144C435.3 172.3 463.5 192 496.3 192C535 192 567.3 164.5 574.7 128L496.3 128C487.5 128 480.3 120.7 480.3 111.9C480.4 103.1 487.5 96 496.3 96L574.7 96C567.3 59.5 535 32 496.3 32C463.5 32 435.3 51.7 423 80L217.7 80C205.4 51.7 177.2 32 144.4 32C105.7 32 73.4 59.5 66 96L144.4 96C153.2 96 160.3 103.2 160.4 112C160.4 120.8 153.3 128 144.4 128zM219.7 224L421.1 224C438.6 224 454.1 235.4 459.3 252.1L485.6 336.2C483.9 336.1 482.2 336 480.4 336L160.4 336C158.7 336 156.9 336.1 155.2 336.2L181.5 252.1C186.7 235.4 202.2 224 219.7 224zM166.2 247.3L137.2 340.4C113.3 349.7 96.4 372.9 96.4 400L96.4 544C96.4 561.7 110.7 576 128.4 576C146.1 576 160.4 561.7 160.4 544L160.4 512L480.4 512L480.4 544C480.4 561.7 494.7 576 512.4 576C530.1 576 544.4 561.7 544.4 544L544.4 400C544.4 372.9 527.5 349.7 503.6 340.4L474.5 247.3C467.2 223.9 445.5 208 421 208L219.6 208C195.1 208 173.5 223.9 166.1 247.3zM496.4 496L112.4 496L112.4 400C112.4 373.5 133.9 352 160.4 352L480.4 352C506.9 352 528.4 373.5 528.4 400L528.4 496L496.4 496zM496.4 544L496.4 512L528.4 512L528.4 544C528.4 552.8 521.2 560 512.4 560C503.6 560 496.4 552.8 496.4 544zM144.4 512L144.4 544C144.4 552.8 137.2 560 128.4 560C119.6 560 112.4 552.8 112.4 544L112.4 512L144.4 512zM176.4 416C176.4 407.2 183.6 400 192.4 400C201.2 400 208.4 407.2 208.4 416C208.4 424.8 201.2 432 192.4 432C183.6 432 176.4 424.8 176.4 416zM224.4 416C224.4 398.3 210.1 384 192.4 384C174.7 384 160.4 398.3 160.4 416C160.4 433.7 174.7 448 192.4 448C210.1 448 224.4 433.7 224.4 416zM448.4 400C457.2 400 464.4 407.2 464.4 416C464.4 424.8 457.2 432 448.4 432C439.6 432 432.4 424.8 432.4 416C432.4 407.2 439.6 400 448.4 400zM448.4 448C466.1 448 480.4 433.7 480.4 416C480.4 398.3 466.1 384 448.4 384C430.7 384 416.4 398.3 416.4 416C416.4 433.7 430.7 448 448.4 448z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Asistență Rutieră
                </h3>
              </div>
              <Link
                href="/asigurari/breakdown"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/rcp"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Malpraxis - Asigurare de răspundere civilă profesională"
              >
                <span className="sr-only">
                  Malpraxis - Asigurare de răspundere civilă profesională
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M264 80L376 80C389.3 80 400 90.7 400 104L400 160L240 160L240 104C240 90.7 250.7 80 264 80zM224 104L224 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L416 160L416 104C416 81.9 398.1 64 376 64L264 64C241.9 64 224 81.9 224 104zM232 176L512 176C538.5 176 560 197.5 560 224L560 480C560 506.5 538.5 528 512 528L128 528C101.5 528 80 506.5 80 480L80 224C80 197.5 101.5 176 128 176L232 176zM296 280C296 275.6 299.6 272 304 272L336 272C340.4 272 344 275.6 344 280L344 320C344 324.4 347.6 328 352 328L392 328C396.4 328 400 331.6 400 336L400 368C400 372.4 396.4 376 392 376L352 376C347.6 376 344 379.6 344 384L344 424C344 428.4 340.4 432 336 432L304 432C299.6 432 296 428.4 296 424L296 384C296 379.6 292.4 376 288 376L248 376C243.6 376 240 372.4 240 368L240 336C240 331.6 243.6 328 248 328L288 328C290.1 328 292.2 327.2 293.7 325.7C295.2 324.2 296 322.2 296 320L296 280zM304 256C290.7 256 280 266.7 280 280L280 312L248 312C234.7 312 224 322.7 224 336L224 368C224 381.3 234.7 392 248 392L280 392L280 424C280 437.3 290.7 448 304 448L336 448C349.3 448 360 437.3 360 424L360 392L392 392C405.3 392 416 381.3 416 368L416 336C416 322.7 405.3 312 392 312L360 312L360 280C360 266.7 349.3 256 336 256L304 256z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Malpraxis
                </h3>
              </div>
              <Link
                href="/asigurari/rcp"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/health"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Sănătate - Asigurare de sănătate"
              >
                <span className="sr-only">
                  Sănătate - Asigurare de sănătate
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M442.9 112C405.3 112 370 130 348 160.5L326.5 190.2C325 192.3 322.6 193.5 320 193.5C317.4 193.5 315 192.3 313.5 190.2L292 160.5C270 130 234.7 112 197.1 112C132.4 112 80 164.4 80 229.1C80 273.1 99.8 314.8 125.5 352.4C126.3 352.1 127.1 352 128 352L186.7 352C196.4 352 205.1 346.2 208.9 337.2L240.7 260.9C241.9 258 244.7 256.1 247.9 256C251.1 255.9 254 257.7 255.3 260.6L320.5 398.2L377 292.2C378.4 289.6 381.2 287.9 384.2 288C387.2 288.1 389.9 289.7 391.2 292.4L414.4 338.7C418.5 346.8 426.8 352 435.9 352L512.1 352C513 352 513.8 352.1 514.6 352.4C540.3 314.8 560.1 273.2 560.1 229.1C560.1 164.4 507.7 112 443 112zM512 368L435.8 368C420.7 368 406.8 359.4 400 345.9L383.8 313.4L327.1 419.7C325.7 422.4 322.9 424 319.9 423.9C316.9 423.8 314.2 422.1 312.9 419.3L248.6 283.6L223.7 343.3C217.5 358.2 202.9 367.9 186.8 367.9L117 367.9C88.1 327.5 64 280.3 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 280.3 551.9 327.5 523.1 368L512 368zM155 416L176.4 416C214.6 458.1 256.4 494.2 286.6 517.2C295.9 524.3 307.6 528 320 528C332.4 528 344.1 524.3 353.4 517.2C383.6 494.2 425.4 458.1 463.6 416L485 416C443.5 463.6 396.3 504.5 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C243.6 504.5 196.5 463.6 155 416z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Sănătate
                </h3>
              </div>
              <Link
                href="/asigurari/health"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/accidents-traveler"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Accidente Călători - Asigurare de accidente pentru călători"
              >
                <span className="sr-only">
                  Accidente Călători - Asigurare de accidente pentru călători
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M192 80L448 80C492.2 80 528 115.8 528 160L112 160C112 115.8 147.8 80 192 80zM112 176L312 176L312 336L112 336L112 176zM528 336L328 336L328 176L528 176L528 336zM112 352L528 352L528 448C528 474.5 506.5 496 480 496L160 496C133.5 496 112 474.5 112 448L112 352zM224 512L416 512L416 544C416 561.7 430.3 576 448 576L480 576C497.7 576 512 561.7 512 544L512 503.4C531.1 492.3 544 471.7 544 448L544 160C544 107 501 64 448 64L192 64C139 64 96 107 96 160L96 448C96 471.7 108.9 492.4 128 503.4L128 544C128 561.7 142.3 576 160 576L192 576C209.7 576 224 561.7 224 544L224 512zM208 512L208 544C208 552.8 200.8 560 192 560L160 560C151.2 560 144 552.8 144 544L144 510C149.1 511.3 154.5 512 160 512L208 512zM432 544L432 512L480 512C485.5 512 490.9 511.3 496 510L496 544C496 552.8 488.8 560 480 560L448 560C439.2 560 432 552.8 432 544zM192 400C200.8 400 208 407.2 208 416C208 424.8 200.8 432 192 432C183.2 432 176 424.8 176 416C176 407.2 183.2 400 192 400zM192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448zM432 416C432 407.2 439.2 400 448 400C456.8 400 464 407.2 464 416C464 424.8 456.8 432 448 432C439.2 432 432 424.8 432 416zM480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416C416 433.7 430.3 448 448 448C465.7 448 480 433.7 480 416zM264 112C259.6 112 256 115.6 256 120C256 124.4 259.6 128 264 128L376 128C380.4 128 384 124.4 384 120C384 115.6 380.4 112 376 112L264 112z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Accidente Călători
                </h3>
              </div>
              <Link
                href="/asigurari/accidents-traveler"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/accidents"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Accidente Persoane - Asigurare de accidente persoane"
              >
                <span className="sr-only">
                  Accidente Persoane - Asigurare de accidente persoane
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M320 304C381.9 304 432 253.9 432 192L208 192C208 253.9 258.1 304 320 304zM320 80C263.6 80 216.9 121.7 209.1 176L299.5 176L355.1 85.6C344.1 82 332.3 80 320 80zM370.1 91.8L318.3 176L430.9 176C425.6 139.1 402.3 107.9 370.2 91.8zM448 192C448 262.7 390.7 320 320 320C249.3 320 192 262.7 192 192C192 121.3 249.3 64 320 64C390.7 64 448 121.3 448 192zM112 560L306.2 560L219.8 408.7C157 430.4 112 489.9 112 560zM104 576C99.6 576 96 572.4 96 568L96 560C96 462.8 174.8 384 272 384L368 384C465.2 384 544 462.8 544 560L544 568C544 572.4 540.4 576 536 576C531.6 576 528 572.4 528 568L528 560C528 471.6 456.4 400 368 400L272 400C259.5 400 247.3 401.4 235.6 404.2L269.8 464L360 464C390.9 464 416 489.1 416 520C416 550.9 390.9 576 360 576L320.2 576C320.1 576 320 576 319.9 576L104 576zM324.6 560L360 560C382.1 560 400 542.1 400 520C400 497.9 382.1 480 360 480L278.9 480L324.6 560z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Accidente Persoane
                </h3>
              </div>
              <Link
                href="/asigurari/accidents"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/accidents-taxi"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Accidente Taxi - Asigurare de accidente pentru taximetriști"
              >
                <span className="sr-only">
                  Accidente Taxi - Asigurare de accidente pentru taximetriști
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M256 80C247.2 80 240 87.2 240 96L240 128L400 128L400 96C400 87.2 392.8 80 384 80L256 80zM224 128L224 96C224 78.3 238.3 64 256 64L384 64C401.7 64 416 78.3 416 96L416 128L419.2 128C458.7 128 493.4 154.4 504 192.4L526.6 273.6C554.9 280.2 576.1 305.6 576.1 335.9L576.1 511.9C576.1 529.6 561.8 543.9 544.1 543.9L528.1 543.9C510.4 543.9 496.1 529.6 496.1 511.9L496.1 479.9L144.1 479.9L144.1 511.9C144.1 529.6 129.8 543.9 112.1 543.9L96.1 543.9C78.4 543.9 64.1 529.6 64.1 511.9L64 336C64 305.7 85.1 280.2 113.5 273.7L136 192.4C146.6 154.4 181.3 128 220.8 128L224 128zM416 144L220.8 144C188.5 144 160.1 165.6 151.4 196.7L130.5 272L509.5 272L488.6 196.7C479.9 165.5 451.6 144 419.2 144L416 144zM512 288L128 288C101.5 288 80 309.5 80 336L80 464L560 464L560 336C560 309.5 538.5 288 512 288zM560 480L512 480L512 512C512 520.8 519.2 528 528 528L544 528C552.8 528 560 520.8 560 512L560 480zM80 512C80 520.8 87.2 528 96 528L112 528C120.8 528 128 520.8 128 512L128 480L80 480L80 512zM160 384C168.8 384 176 376.8 176 368C176 359.2 168.8 352 160 352C151.2 352 144 359.2 144 368C144 376.8 151.2 384 160 384zM160 336C177.7 336 192 350.3 192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336zM496 368C496 359.2 488.8 352 480 352C471.2 352 464 359.2 464 368C464 376.8 471.2 384 480 384C488.8 384 496 376.8 496 368zM448 368C448 350.3 462.3 336 480 336C497.7 336 512 350.3 512 368C512 385.7 497.7 400 480 400C462.3 400 448 385.7 448 368z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Accidente Taxi
                </h3>
              </div>
              <Link
                href="/asigurari/accidents-taxi"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/cmr"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="CMR - Asigurare de transport mărfuri"
              >
                <span className="sr-only">
                  CMR - Asigurare de transport mărfuri
                </span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M384 112C410.5 112 432 133.5 432 160L432 403.3C395.1 413.7 368 447.7 368 488C368 490.7 368.1 493.4 368.4 496L271.7 496C271.9 493.4 272.1 490.7 272.1 488C272.1 439.4 232.7 400 184.1 400C135.5 400 96.1 439.4 96.1 488C96.1 490.7 96.2 493.4 96.5 496L96.1 496C69.6 496 48.1 474.5 48.1 448L48 160C48 133.5 69.5 112 96 112L384 112zM96 512L99.3 512C109.7 548.9 143.7 576 184 576C224.3 576 258.2 548.9 268.7 512L371.3 512C381.7 548.9 415.7 576 456 576C496.3 576 530.2 548.9 540.7 512L544 512C579.3 512 608 483.3 608 448L608 298.5C608 279.4 600.4 261.1 586.9 247.6L552.4 213.1C538.9 199.6 520.6 192 501.5 192L448 192L448 160C448 124.7 419.3 96 384 96L96 96C60.7 96 32 124.7 32 160L32 448C32 483.3 60.7 512 96 512zM448 208L501.5 208C516.4 208 530.6 213.9 541.1 224.4L575.6 258.9C586.1 269.4 592 283.6 592 298.5L592 320L448 320L448 208zM448 400.4L448 336L592 336L592 448C592 474.5 570.5 496 544 496L543.6 496C543.8 493.4 544 490.7 544 488C544 439.4 504.6 400 456 400C453.3 400 450.6 400.1 448 400.4zM112 488C112 448.2 144.2 416 184 416C223.8 416 256 448.2 256 488C256 527.8 223.8 560 184 560C144.2 560 112 527.8 112 488zM384 488C384 448.2 416.2 416 456 416C495.8 416 528 448.2 528 488C528 527.8 495.8 560 456 560C416.2 560 384 527.8 384 488zM216 200C216 195.6 219.6 192 224 192L256 192C260.4 192 264 195.6 264 200L264 240C264 244.4 267.6 248 272 248L312 248C316.4 248 320 251.6 320 256L320 288C320 292.4 316.4 296 312 296L272 296C267.6 296 264 299.6 264 304L264 344C264 348.4 260.4 352 256 352L224 352C219.6 352 216 348.4 216 344L216 304C216 299.6 212.4 296 208 296L168 296C163.6 296 160 292.4 160 288L160 256C160 251.6 163.6 248 168 248L208 248C210.1 248 212.2 247.2 213.7 245.7C215.2 244.2 216 242.2 216 240L216 200zM224 176C210.7 176 200 186.7 200 200L200 232L168 232C154.7 232 144 242.7 144 256L144 288C144 301.3 154.7 312 168 312L200 312L200 344C200 357.3 210.7 368 224 368L256 368C269.3 368 280 357.3 280 344L280 312L312 312C325.3 312 336 301.3 336 288L336 256C336 242.7 325.3 232 312 232L280 232L280 200C280 186.7 269.3 176 256 176L224 176z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  CMR
                </h3>
              </div>
              <Link
                href="/asigurari/cmr"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Vezi ofertele
              </Link>
            </div>

            <div className="bg-white group rounded-xl p-6 shadow-sm border md:hover:-translate-y-1 md:hover:shadow-lg transition-all duration-300 relative">
              <Link
                href="/asigurari/life"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Viață - Asigurare de viață"
              >
                <span className="sr-only">Viață - Asigurare de viață</span>
              </Link>
              <div className="text-blue-800 flex flex-col justify-center items-center gap-5 mb-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="currentColor"
                    d="M144 192C144 130.1 194.1 80 256 80C317.9 80 368 130.1 368 192C368 253.9 317.9 304 256 304C194.1 304 144 253.9 144 192zM384 192C384 121.3 326.7 64 256 64C185.3 64 128 121.3 128 192C128 262.7 185.3 320 256 320C326.7 320 384 262.7 384 192zM48 544C48 455.6 119.6 384 208 384L272.2 384C272.6 378.5 273.5 373.2 274.9 368L208 368C110.8 368 32 446.8 32 544L32 568C32 572.4 35.6 576 40 576C44.4 576 48 572.4 48 568L48 544zM346.9 376L456 339.6L456 590.4L455.6 590.2L437.1 581.5C375.4 552.5 336 490.4 336 422.2L336 391.1C336 384.2 340.4 378.1 346.9 375.9zM472.4 590.2L472 590.4L472 339.6L581.1 376C587.6 378.2 592 384.3 592 391.2L592 422.3C592 490.5 552.6 552.5 490.9 581.5L472.4 590.2zM453.9 323.5L341.9 360.8C328.8 365.2 320 377.4 320 391.2L320 422.3C320 496.7 363 564.4 430.2 596L448.7 604.7C453.5 606.9 458.7 608.1 463.9 608.1C469.1 608.1 474.4 606.9 479.1 604.7L497.6 596C565 564.3 608 496.6 608 422.2L608 391.1C608 377.3 599.2 365.1 586.1 360.7L474.1 323.4C467.5 321.2 460.4 321.2 453.9 323.4z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-black transition-all duration-500 ease-in-out">
                  Viață
                </h3>
              </div>
              <Link
                href="/asigurari/life"
                className="relative z-20 bg-blue-600 text-white py-3 px-6 rounded-md font-normal block text-center md:hover:bg-blue-700 transition-all duration-300 w-full shadow-sm"
              >
                Cere ofertele
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
