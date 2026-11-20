import Head from "next/head";

const siteUrl = "https://tiburonmartillo.github.io";
const imageUrl = `${siteUrl}/social/portafolio-sergio-villanueva.png`;

export function SEO({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = `${siteUrl}${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Portafolio de Sergio Villanueva" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Sergio Villanueva" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@tiburonmartillo" />
      <meta name="twitter:creator" content="@tiburonmartillo" />
    </Head>
  );
}
