import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POST_REQUEST } from '../reducers/post';

const Home = () => {
  const { logInDone } = useSelector((state) => state.user);
  const { mainPosts, loadPostLoading, hasPosts } = useSelector(
    (state) => state.post,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);
  useEffect(() => {
    const handleOnScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        if (!loadPostLoading && hasPosts) {
          dispatch({
            type: LOAD_POST_REQUEST,
          });
        }
      }
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, [loadPostLoading]);
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
