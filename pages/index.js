import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import LatestProducts from '@/components/LatestProducts';
import BestSellers from '@/components/BestSellers';
import Head from 'next/head';
import Recommended from '@/components/Recommended';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Buy your favorite products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <LatestProducts />
        <BestSellers />
        <Featured />
        <Recommended />
      </main>
    </>
  );
}
