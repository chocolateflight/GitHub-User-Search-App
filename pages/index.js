import Head from 'next/head';

import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import User from '../components/User';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | GitHub user search app</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' type='image/png' sizes='32x32' href='./img/favicon-32x32.png' />
      </Head>
      <div id='darkmode' className='dark'>
        <div className='bg-lm-color5 flex justify-center px-[10%] h-screen dark:bg-dm-color3'>
          <div className='flex flex-col justify-center space-y-5 w-full max-w-4xl'>
            <Navbar />
            <Search />
            <User />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
