
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './components/Button';
import LayoutAuth from './containers/LayoutAuth/LayoutAuth';
import Header from './components/Header';
import Login from './login';


export default function Home() {
  return (
    <div>
      <Header>
        <title>Login Form</title>
        <h1>Hello</h1>
      </Header>

    <LayoutAuth>
    <>
      <h1>Hello</h1>
      <Login />
    </>
    </LayoutAuth>
    </div>
  );
}
