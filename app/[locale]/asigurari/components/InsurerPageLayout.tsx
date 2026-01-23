import { ReactNode } from 'react'

type InsurerSection = {
  heading: string
  paragraphs: string[]
  list_items?: string[]
}

type InsurerContent = {
  title: string
  intro: string[]
  sections: InsurerSection[]
}

export default function InsurerPageLayout({
  banner,
  content
}: {
  banner?: ReactNode
  content: InsurerContent
}) {
  return (
    <>
      {banner}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:pt-16">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            <strong>{content.title}</strong>
          </h1>

          {content.intro.length > 0 && (
            <div className="border-l-4 border-green-500 pl-4 mt-4 space-y-4">
              {content.intro.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {content.sections.map((section, index) => (
          <div
            key={`${section.heading}-${index}`}
            className="bg-white rounded-xl p-4 md:p-6 shadow-sm w-full mb-8"
          >
            <h2 className="text-lg md:text-2xl font-bold mb-4">
              <strong>{section.heading}</strong>
            </h2>

            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="text-gray-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}

            {section.list_items && section.list_items.length > 0 && (
              <ul className="space-y-2">
                {section.list_items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-700 leading-relaxed list-disc list-inside"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
