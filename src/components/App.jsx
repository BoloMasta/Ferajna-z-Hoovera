import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layouts/Layout/Layout";

// Lazy loading for pages
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const MusicPage = lazy(() => import("../pages/MusicPage/MusicPage"));
const GalleriesPage = lazy(() => import("../pages/GalleriesPage/GalleriesPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const PlayerPage = lazy(() => import("../pages/PlayerPage/PlayerPage"));
const DownloadPage = lazy(() => import("../pages/DownloadPage/DownloadPage"));

function App() {
  return (
    <>
      <Helmet titleTemplate="%s - Ferajna z Hoovera" defaultTitle="Ferajna z Hoovera">
        {/* Basic meta tags */}
        <meta
          name="description"
          content="Oficjalna strona zespołu Ferajna z Hoovera. Znajdziesz tutaj informacje o zespole, muzyce i kontakt."
        />
        <meta
          name="keywords"
          content="ferajna, hoover, ferajna z hoovera, ferajnazhoovera, muzyka, Polska, patriotyzm, powstanie, piosenka, wojna, okupacja, niepodległość, ułani, piechota, kawaleria, wojsko, żołnierze, żołnierz, polska pieśń, polska piosenka, polska muzyka, polska muzyka patriotyczna, polska muzyka powstańcza, polska muzyka wojenna, historia, folk, muzyka ludowa, polskie piosenki wojenne, polski zespół, muzyka patriotyczna Polska, koncerty, albumy, płyty CD, pobierz muzykę, nagrania audio, zespół muzyczny, polskie utwory, muzyka powstańcza, pieśni wojenne, muzyka ludowa Polska, polskie śpiewy, muzyka historyczna, utwory patriotyczne, album muzyczny, muzyka warszawska, muzyka Polska, muzyka narodowa, muzyka patriotyczna polska, pieśni patriotyczne, polski folk, muzyka powstańcza Polska"
        />
        <meta name="author" content="Bolesław Adamiec" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Ferajna z Hoovera" />
        <meta
          property="og:description"
          content="Oficjalna strona zespołu Ferajna z Hoovera. Znajdziesz tutaj informacje o zespole, muzyce i kontakt."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://ferajnazhoovera.pl/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ferajna z Hoovera" />
        <meta
          name="twitter:description"
          content="Oficjalna strona zespołu Ferajna z Hoovera. Znajdziesz tutaj informacje o zespole, muzyce i kontakt."
        />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:url" content="https://ferajnazhoovera.pl/" />

        {/* Canonical URL to avoid duplicate content issues */}
        <link rel="canonical" href="https://ferajnazhoovera.pl/" />

        {/* Robots meta tag for search engine indexing */}
        <meta name="robots" content="index, follow" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
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
          <Route path="/ktosietakwydzierapobierzplyte" element={<DownloadPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
