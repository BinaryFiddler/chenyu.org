import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

// TODO: scan drawing, figure out storage option
// Fetch drawing through API
// Styling


const DrawingPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Chenyu's drawings</title>
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
                Drawing
            </h1>
            <hr />
            <p className="text-1xl leading-10 tracking-widest mb-2">
                I took drawing lessons when I was very young. Unfortunately, my interest waned 
                over the years, and I ended up with practically nothing to show for. In 2022, I 
                made an effort to start to take drawing lessons again at North Seattle College, and 
                try to make an concious effort to practice more. Here, you will find various 
                sketches and doodlings.
            </p>
        </>
    )
}

const DrawingContainer = () => {
  return (
    <>
      <Drawing />
    </>
  )
}

const Drawing = () => {
  return (
    <>
    </>
  )
}

export default DrawingPage