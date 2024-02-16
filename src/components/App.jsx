// import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layouts/Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const MusicPage = lazy(() => import("../pages/MusicPage/MusicPage"));
const GalleriesPage = lazy(() => import("../pages/GalleriesPage/GalleriesPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const PlayerPage = lazy(() => import("../pages/PlayerPage/PlayerPage"));

function App() {
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

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/gallery" element={<GalleriesPage />} />
          <Route path="/gallery/:galleryId" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ktosietakwydziera" element={<PlayerPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
