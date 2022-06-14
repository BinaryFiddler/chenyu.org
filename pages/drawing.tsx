import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { getAllDrawings } from '../lib/api'

// TODO: scan drawing, figure out storage option
// Fetch drawing through API
// Styling

type Props = {
  allDrawings: string[]
}

const DrawingPage = ({ allDrawings }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{"Chenyu's drawings"}</title>
        </Head>
        <Container>
          <Header />
          <Summary />
          {allDrawings.map((drawing, idx) => (
            <Image 
              key={idx}
              src={"/assets/blog/authors/hcy.jpeg"}
              alt="drawing"
              width={300}
              height={300}
            />
          ))}
        </Container>
      </Layout>
    </>
  )
}

const Summary = () => {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-tighter">
                Drawing (Under construction)
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

export const getStaticProps = async () => {
  const allDrawings = getAllDrawings([])

  return {
    props: { allDrawings },
  }
}


export default DrawingPage