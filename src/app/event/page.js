import React from 'react';
import { Metadata } from 'next';

export async function generateMetadata({ searchParams }) {
    const {
      title = "The Baby Show Jul 29 2024",
      description = "Lean boil pivot future-proof but engagement users giant ballpark new...",
      imageUrl = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    } = searchParams || {};

    return {
      title,
      description,
      keywords: ["baby show", "events", "2024"],
      authors: [{ name: "Event Organizer" }],
      robots: "index, follow",
      openGraph: {
        title,
        description,
        url: "https://perks.hireacoder.in",
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    };
}

const EventPage = () => {
    return (
        <div>
            abc
        </div>
    );
};

export default EventPage;
