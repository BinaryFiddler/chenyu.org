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
// Store drawings on persistent storage, fetch drawing through API

type Drawing = {
  src: string,
  width: number,
  height: number
}

type Props = {
  allDrawings: Drawing[]
}

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
          <Gallery photos={allDrawings} onClick={openLightbox} direction='column'/>
          {viewerIsOpen ? 
          <Lightbox
            mainSrc={allDrawings[currentImage].src}
            nextSrc={allDrawings[(currentImage + 1) % allDrawings.length].src}
            prevSrc={allDrawings[(currentImage + allDrawings.length - 1) % allDrawings.length].src}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setCurrentImage((currentImage + allDrawings.length - 1) % allDrawings.length)}
            onMoveNextRequest={() => setCurrentImage((currentImage + 1) % allDrawings.length)}/> : null}
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

export const getStaticProps = async () => {
  const allDrawings = getAllDrawings()

  return {
    props: { allDrawings },
  }
}


export default DrawingPage