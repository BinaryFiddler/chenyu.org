import React, { useState, useCallback } from "react";
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import { getAllDrawings } from '../lib/api'
import Gallery from 'react-photo-gallery-next'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// TODO: scan drawing, figure out storage option
// Fetch drawing through API

type Props = {
  allDrawings: string[]
}

const photos = [
  {
    title: 'title 1',
    src: '/assets/blog/authors/hcy.jpeg',
    width: 4,
    height: 4
  },
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
]

const DrawingPage = ({ allDrawings }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{"Chenyu's drawings"}</title>
        </Head>
        <Container>
          <Header />
          <Summary />
          <Gallery photos={photos} onClick={openLightbox} direction='column'/>
          {viewerIsOpen ? 
          <Lightbox
            mainSrc={photos[currentImage].src}
            nextSrc={photos[(currentImage + 1) % photos.length].src}
            prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
            onMoveNextRequest={() => setCurrentImage((currentImage + 1) % photos.length)}/> : null}
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