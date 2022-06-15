import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About Chenyu</title>
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
            <p className="text-1xl leading-10 tracking-widest mb-2">
                <span className="font-bold">Welcome</span>
                <br />
                <hr />
                Welcome to this space. My name is Chenyu, here I share my discoveries, thoughts and learnings as we progress through life.
                <br />
                <span className="font-bold">About me</span>
                <br />
                <hr />
                Professionally, I work as a software engineer at a large company. When I am not at work, you 
                are most likely finding me practicing the violin, reading random wikipedia entries, sampling fresh pastries at local bakeries. 
                I like all things art related, museum, theaters, concerts, etc.
                <br />
                <span className="font-bold">Contact</span>
                <hr/>
                To contact me, please write to me at itschenyu@gmail.com
            </p>
        </>
    )
}

export default About