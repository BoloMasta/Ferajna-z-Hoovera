// import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import { Helmet } from "react-helmet-async";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import Layout from "../layouts/Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const MusicPage = lazy(() => import("../pages/MusicPage/MusicPage"));
const GalleriesPage = lazy(() => import("../pages/GalleriesPage/GalleriesPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));

function App() {
  // const [count, setCount] = useState(0);
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Helmet titleTemplate="%s - Ferajna z Hoovera" defaultTitle="Ferajna z Hoovera">
        <meta name="description" content="Ferajna z Hoovera" />
        <meta
          name="keywords"
          content="ferajna, hoover, ferajna z hoovera, muzyka, Polska, patriotyzm, powstanie, piosenka, wojna, okupacja, niepodległość, ułani, piechota, kawaleria, wojsko, żołnierze, żołnierz, polska pieśń, polska piosenka, polska muzyka, polska muzyka patriotyczna, polska muzyka powstańcza, polska muzyka wojenna"
        />
        <meta name="author" content="Bolesław Adamiec" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}

      {/* <Layout>
        <h1>Witajcie w Ferajnie z Hoovera!</h1>
        <p>
          Ferajna z Hoovera to zespół muzyczny, który powstał w 2019 roku. Jego założycielem jest
          Bolesław Adamiec, który jest autorem tekstów i kompozytorem piosenek. Wszystkie utwory są
          inspirowane historią Polski, a w szczególności okresem II wojny światowej.
        </p>
        <p>
          Wszystkie piosenki są dostępne na platformach streamingowych, takich jak Spotify, Apple
          Music, Deezer, Tidal, Amazon Music, YouTube Music, itd.
        </p>
      </Layout> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/gallery" element={<GalleriesPage />} />
          <Route path="/gallery/:galleryId" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default App;
