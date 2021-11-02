import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const AllPosts = ({ posts }: Props) => {
  return (
    <section>
      <div className="flex-col flex mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default AllPosts
