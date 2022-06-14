import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'

// todo: call youtube api to get all video links
// Style youtube video box
// Group youtube videos by play list

const Music = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{"Chenyu's music"}</title>
        </Head>
        <Container>
          <Header />
          <Summary />
          <br />
          <MusicVideos />
        </Container>
      </Layout>
    </>
  )
}

const Summary = () => {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-tighter">
                Music (Under construction)
            </h1>
            <hr />
            <p className="text-1xl leading-10 tracking-widest mb-2">
                {"For me, music has been a continuous source of strength and joy. \
                I'm not a professional musician by any measure, but I enjoy listening \
                and playing music more than anything else in the world. I started \
                playing the piano when I was 13, continued with it through most of the time \
                in college. Nowadays, you are more likely finding me playing the violin which \
                I started learning when I started my first full time job in Seattle since 2018."}
            </p>
        </>
    )
}

const MusicVideos = () => {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-tighter">
                {"Chenyu's performances"}
            </h1>
            <hr />
            <YoutubeVideo />
        </>
    )
}

const YoutubeVideo = () => {
    return (
        <>
            <iframe
                src="https://www.youtube.com/embed/7WYo6bML2P0"
                allow="autoplay; encrypted-media"
                allowFullScreen={true}
                title="video"
            />{" "}
            <p>Music video title</p>
        </>
    )
}

export default Music