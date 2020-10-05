import React from 'react';

import AppLayout from '../components/AppLayout';
import SignUpForm from '../components/SignUpForm';

const signUp = () => {
  return (
    <div>
      <AppLayout>
        <SignUpForm />
      </AppLayout>
    </div>
  );
};

export default signUp;
