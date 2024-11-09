
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './components/Button';
import LayoutAuth from './containers/LayoutAuth/LayoutAuth';
import Header from './components/Header';


export default function Home() {
  return (
    <div>
      <Header>
        <title>Login Form</title>
      </Header>
      
    <LayoutAuth>
    <>
      <h1>Hello</h1>
      <Button />
    </>
    </LayoutAuth>
    </div>
  );
}
