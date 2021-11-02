import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Chenyu</title>
        </Head>
        <Container>
          <Header />
          <Summary />
        </Container>
      </Layout>
    </>
  )
}

const Summary = () => {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-tighter">
                Hi there
            </h1>
            <hr className="mt-2 mb-2" />
            <p className="text-1xl leading-10 tracking-widest mb-2">
                <span className="font-bold">Reading and writing</span>
                <br />
                I use to be an avid reader and writer. Even under extreme pressure back in high school, I 
                would sqeeze out time to read a thing or two daily, and often dedicated long hours writing 
                my thoughts, making up stories, or just doodling out what I dreamt the night before.
                <br />
                After entering college, and growing to be more independent at choosing what to do, 
                I lost much of this consistency. Over the years, I made numerous attempts at getting back to them, 
                but thus far nothing has really sticked. Life seems to have become full of distractions that 
                continuously pulls me away from doing the things I know would be of true value. I 
                want to start this blog as a way of sharing whatever is on my mind, and also a way 
                holding myself a little more accountable at doing more meaningful things and living a more intentional life.
                <br />
                <span className="font-bold">More about me</span>
                <br />
                Professionally, I work as a software engineer at a large company. When I am not at work, you 
                are most likely finding me practicing the violin, reading random wikipedia entries, or mindlessly 
                browsing YouTube. I also enjoy cooking and baking from time to time.
                <br />
                <span className="font-bold">Welcome</span>
                <br />
                Welcome to this space, if you want to reach out to me personally 
            </p>
        </>
    )
}

export default About