import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import { getAllMusicVideos } from '../lib/api'
import YoutubeVideo from '../types/youtube-video'

// todo: call youtube api to get all video links

type MusicPageProps = {
    allVideos: YoutubeVideo[]
}

type VideoProps = {
    title: string,
    link: string
}

const Music = ({ allVideos }: MusicPageProps) => {
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
          <h1 className="text-2xl font-bold tracking-tighter">
                {"Chenyu's performances"}
          </h1>
          <hr />
          <div className='flex flex-row flex-wrap justify-around'>
            {allVideos.map((video, index) => (
                <VideoBox 
                    key={index}
                    title={video.title}
                    link={video.link}
                />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

const Summary = () => {
    return (
        <>
            <h1 className="text-2xl font-bold tracking-tighter">
                Music
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

const VideoBox = ({title, link}: VideoProps) => {
    return (
        <div className='flex flex-col mx-4 my-2'>
            <iframe
                src={link}
                allow="autoplay; encrypted-media"
                allowFullScreen={true}
                title={title}
            />
            <p>{title}</p>
        </div>
    )
}

export const getStaticProps = async () => {
    const allVideos = getAllMusicVideos([])
  
    return {
      props: { allVideos },
    }
  }

export default Music