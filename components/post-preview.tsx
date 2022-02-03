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
      <div className="px-3 py-3 bg-primary dark:bg-primary-700 rounded-lg shadow mb-2 transition duration-400 ease-in-out transform hover:-translate-y-1">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
          <div>
            <h3 className="text-xl font-bold mb-1 leading-snug">
                <a className="hover:underline">{title}</a>
            </h3>
            <div className="text-lg text-primary-500 dark:text-primary-300">
              <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4 text-primary-600 dark:text-primary-200">{excerpt}</p>
          </div>
        </Link>
      </div>
  )
}

export default PostPreview
