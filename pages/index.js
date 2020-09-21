import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';

const Home = () => {
  const { login } = useSelector((state) => state.user);
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <title>Next Practice</title>
      </Head>
      <AppLayout>
        {login && <PostForm />}
        {/*<PostCard/>*/}
      </AppLayout>
    </div>
  );
};

export default Home;
