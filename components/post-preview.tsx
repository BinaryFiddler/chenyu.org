import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
      <div className="px-4 py-3 cursor-pointer rounded-lg shadow mb-5 transition duration-400 ease-in-out transform hover:-translate-y-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <div>
            <h3 className="text-xl font-bold mb-1 leading-snug">
                <a className="hover:underline">{title}</a>
            </h3>
            <div className="text-lg text-gray-700">
              <DateFormatter dateString={date} />
            </div>
            <p className="text-lg text-gray-500	leading-relaxed mb-4">{excerpt}</p>
          </div>
        </Link>
      </div>
  )
}

export default PostPreview
