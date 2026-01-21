import { faChevronRight, faList } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import {
  BlogArticleData,
  ContentSection,
  Subsection,
  TocItem
} from '@/types/blog'

interface BlogArticleProps {
  data: BlogArticleData
}

export default function BlogArticle({ data }: BlogArticleProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:pt-16">
      <div className="flex items-center gap-4 mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          <strong>{data.title}</strong>
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
        {data.image && (
          <div className="mb-6 relative w-full h-[300px] md:h-[400px]">
            <Image
              src={data.image}
              alt={data.image_alt || ''}
              fill={true}
              className="rounded-lg shadow-sm object-cover"
              priority={true}
            />
          </div>
        )}

        {data.intro_text && (
          <div className="border-l-4 border-green-500 pl-4">
            {data.intro_text.split('|').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {data.toc_items && data.toc_items.length > 0 && (
        <TableOfContents items={data.toc_items} />
      )}

      <div className="prose prose-lg max-w-none">
        {data.content_sections.map((section, idx) => (
          <ContentSectionComponent key={idx} section={section} />
        ))}
      </div>

      {data.conclusion && (
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            {data.conclusion.split('|').map((paragraph, idx) => (
              <p
                key={idx}
                className="text-gray-700 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
      <div className="flex items-center gap-3 mb-6">
        <FontAwesomeIcon
          icon={faList}
          className="text-blue-700 text-lg md:text-2xl"
        />
        <h2 className="text-lg md:text-2xl font-bold">Cuprins</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-start gap-3 p-3 bg-white border-2 border-gray-100 rounded-lg md:hover:bg-gray-100 transition-colors group"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-green-500 mt-1"
            />
            <span className="font-semibold text-gray-800">
              <strong>{item.title}</strong>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ContentSectionComponent({ section }: { section: ContentSection }) {
  return (
    <div
      id={section.id || ''}
      className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8"
    >
      {section.heading && (
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-lg md:text-2xl font-bold">
            <strong>{section.heading}</strong>
          </h2>
        </div>
      )}

      {section.content && (
        <div className="border-l-4 border-green-500 pl-4">
          {section.content.split('|').map((paragraph, idx) => (
            <p
              key={idx}
              className="text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      )}

      {section.lists &&
        section.lists.map((list, idx) => (
          <div key={idx} className="mb-6">
            {list.title && (
              <p className="font-semibold text-gray-900 mb-3">{list.title}</p>
            )}
            <SimpleList items={list.items} ordered={list.ordered} />
          </div>
        ))}

      {section.additional_content && (
        <div className="text-gray-700 leading-relaxed mt-6">
          <p dangerouslySetInnerHTML={{ __html: section.additional_content }} />
        </div>
      )}

      {section.lists_additional &&
        section.lists_additional.map((list, idx) => (
          <div key={`additional-${idx}`} className="mb-6">
            {list.title && (
              <p className="font-semibold text-gray-900 mb-3">{list.title}</p>
            )}
            <SimpleList items={list.items} ordered={list.ordered} />
          </div>
        ))}

      {section.subsections &&
        section.subsections.map((subsection, idx) => (
          <SubsectionComponent key={idx} subsection={subsection} />
        ))}

      {section.image && (
        <div className="my-6 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={section.image.src}
            alt={section.image.alt || ''}
            fill={true}
            className="rounded-lg shadow-sm object-cover"
          />
        </div>
      )}
    </div>
  )
}

function SubsectionComponent({ subsection }: { subsection: Subsection }) {
  const heading = subsection.heading || subsection.subheading

  return (
    <div className="mt-6 mb-6">
      {heading && (
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
          {heading}
        </h3>
      )}

      {subsection.content && (
        <div
          className="text-gray-700 leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: subsection.content }}
        />
      )}

      {subsection.lists &&
        subsection.lists.map((list, idx) => (
          <div key={idx} className="mb-6">
            {list.title && (
              <p className="font-semibold text-gray-900 mb-3">{list.title}</p>
            )}
            <SimpleList items={list.items} ordered={list.ordered} />
          </div>
        ))}

      {subsection.additional_content && (
        <div className="text-gray-700 leading-relaxed mt-6">
          <p
            dangerouslySetInnerHTML={{ __html: subsection.additional_content }}
          />
        </div>
      )}

      {subsection.lists_additional &&
        subsection.lists_additional.map((list, idx) => (
          <div key={`additional-${idx}`} className="mb-6">
            {list.title && (
              <p className="font-semibold text-gray-900 mb-3">{list.title}</p>
            )}
            <SimpleList items={list.items} ordered={list.ordered} />
          </div>
        ))}

      {subsection.image && (
        <div className="my-4 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={subsection.image.src}
            alt={subsection.image.alt || ''}
            fill={true}
            className="rounded-lg shadow-sm object-cover"
          />
        </div>
      )}
    </div>
  )
}

function SimpleList({
  items,
  ordered = false
}: {
  items: string[]
  ordered?: boolean
}) {
  const ListTag = ordered ? 'ol' : 'ul'
  const listStyle = ordered ? 'decimal' : 'disc'

  return (
    <ListTag className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          style={{ listStyle, listStylePosition: 'inside', margin: '0 1em 0' }}
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ListTag>
  )
}
