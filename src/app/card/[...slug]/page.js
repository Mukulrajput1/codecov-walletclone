import React from 'react';
import Head from 'next/head';

export async function generateStaticParams() {
    // Define paths if you have them in advance; otherwise, leave it empty
    return []; // Example: [{ slug: ['8f5e523ee6b2479e26ecc91b9c25261e', '1015f', 'MainAfter.jpg'] }]
}

export async function generateMetadata({ params }) {
    console.log(params.slug)
    const slugs = params.slug

    const slugPath = params.slug.join('/'); // Join parts to form the full path
    const joinedPath = slugs.slice(0, slugs.indexOf('MainAfter.jpg') + 1).join('/');
    const [, , , afterJpg, desc] = slugs
    const title = afterJpg || "abc";
    console.log(afterJpg)
    const description = desc || "abc";
    const imageUrl = `https:/letsenhance.io/static/${joinedPath}`; // Full image URL
    const url = `https://walletclone.in.net/card/${slugPath}`;

    return {
      title,
      description,
      keywords: ["baby show", "events", "2024"],
      authors: [{ name: "Event Organizer" }],
      robots: "index, follow",
      openGraph: {
        title,
        description,
        url: "https://walletclone.in.net/event",
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: title,
          },
        ],
      },
      // twitter: {
      //   card: "summary_large_image",
      //   title,
      //   description,
      //   images: [imageUrl],
      // },
    };
}

const CardPage = async ({ params }) => {
    
    console.log(params.slug)
    const slugs = params.slug

    const slugPath = params.slug.join('/'); // Join parts to form the full path
    const joinedPath = slugs.slice(0, slugs.indexOf('MainAfter.jpg') + 1).join('/');
    const [, , , afterJpg, desc] = slugs
    const title = afterJpg || "abc";
    console.log(afterJpg)
    const description = desc || "abc";
    const image = `https:/letsenhance.io/static/${joinedPath}`; // Full image URL
    console.log(image)
    const url = `https://walletclone.in.net/card/${slugPath}`;

    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={image} alt={title} />
            </div>
        </>
    );
};

export default CardPage;
