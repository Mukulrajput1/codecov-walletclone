import React from 'react';
import Head from 'next/head';

export async function metadata({ searchParams }) {
    const {
      title = "The Baby Show Jul 29 2024",
      description = "Lean boil pivot future-proof but engagement users giant ballpark new...",
      imageUrl = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    } = searchParams || {};
  
    return {
      title,
      description,
      keywords: ["baby show", "events", "2024"],
      author: "Event Organizer",
      robots: "index, follow",
      canonical: "https://www.example.com/the-baby-show-jul-29-2024",
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
      // Optionally, you can add Twitter metadata as well
      twitter: {
        card: "summary_large_image",
        title,
        description,
        image: imageUrl,
      },
    };
  }
  
const EventPage = ({searchParams}) => {
    const {
        title = "The Baby Show Jul 29 2024",
        description = "Lean boil pivot future-proof but engagement users giant ballpark new...",
        imageUrl = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
      } = searchParams || {};
    return (
        <div>
           {title} {description} {imageUrl}
        </div>
    );
};

export default EventPage;
