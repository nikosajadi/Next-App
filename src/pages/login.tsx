/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Head from 'next/head';
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth';
import { InputEmail, InputPassword, Button } from '../components';
import H2 from '@/components/Typography/H2';


export default function Login() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('handleSubmit');
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
      <H2 align='center'> Your favorite Online Job</H2>
        <form onSubmit={handleSubmit}>
        
            <InputEmail placeholder="email" />
        
          
            <InputPassword placeholder="Password" />
         
         
            <Button type="submit">Submit</Button>
          
        </form>
      </LayoutAuth>
    </div>
  );
}
