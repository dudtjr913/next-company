import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { logInDone } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <title>Next Practice</title>
      </Head>
      <AppLayout>
        {logInDone && <PostForm />}
        {mainPosts.map((v) => (
          <PostCard key={v.id} post={v} />
        ))}
      </AppLayout>
    </div>
  );
};

export default Home;
