import Head from 'next/head';

export async function generateStaticParams() {
    // Define paths if you have them in advance; otherwise, leave it empty
    return []; // Example: [{ slug: ['8f5e523ee6b2479e26ecc91b9c25261e', '1015f', 'MainAfter.jpg'] }]
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
    const url = `https://walletclone.in.net/card/${slugPath}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={image} alt={title} />
            </div>
        </>
    );
};

export default CardPage;
