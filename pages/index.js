import Head from 'next/head';
import { useState } from 'react';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NotOptimized from '../components/NotOptimized';
import Search from '../components/Search';
import User from '../components/User';

export default function Home(props) {
  const [darkMode, setDarkMode] = useState('dark');
  const [user, setUser] = useState(props.userData);
  const [hasResult, setHasResult] = useState(true);

  const darkModeChangeHandler = () => {
    if (darkMode === 'dark') {
      setDarkMode('');
    } else if (darkMode === '') {
      setDarkMode('dark');
    }
  };

  const inputHandler = async (enteredUser) => {
    const response = await fetch(`/api/get-user/${enteredUser}`, {
      method: 'GET',
    });
    const data = await response.json();
    if (data.message) {
      setHasResult(false);
    } else {
      setUser(data);
      setHasResult(true);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | GitHub user search app</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='A Frontend Mentor challenge project' />
        <link rel='icon' type='image/png' sizes='32x32' href='./img/favicon-32x32.png' />
      </Head>
      <NotOptimized />
      <div id='darkmode' className={darkMode}>
        <div className='bg-lm-color5 flex justify-center px-[10%] h-screen dark:bg-dm-color3'>
          <div className='flex flex-col justify-center space-y-5 w-full max-w-4xl'>
            <Navbar onDarkModeChange={darkModeChangeHandler} darkMode={darkMode} />
            <Search
              onInput={inputHandler}
              hasError={hasResult === false ? '' : 'hidden'}
            />
            <User selectedUserData={user} />
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/octocat');
  const data = await response.json();
  return {
    props: {
      userData: data,
    },
  };
}
