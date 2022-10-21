import Head from 'next/head';

const PageHead = ({ title, description }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
};

export default PageHead;
