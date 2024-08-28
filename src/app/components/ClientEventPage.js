// src/app/event/ClientEventPage.js (Client Component)
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const ClientEventPage = () => {
  const router = useRouter();
  const { title, description, imageUrl } = router.query;

  // Optional state to handle title and description
  const [pageTitle, setPageTitle] = useState(title || 'The Baby Show Jul 29 2024');
  const [pageDescription, setPageDescription] = useState(description || 'Lean boil pivot future-proof but engagement users giant ballpark new...');
  const [pageImage, setPageImage] = useState(imageUrl || 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg');

  useEffect(() => {
    // Update states if the query parameters change
    if (title) setPageTitle(title);
    if (description) setPageDescription(description);
    if (imageUrl) setPageImage(imageUrl);
  }, [title, description, imageUrl]);

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content="https://walletclone.in.net/event" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Head>
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
      <img src={pageImage} alt={pageTitle} width="800" height="600" />
    </div>
  );
};

export default ClientEventPage;
