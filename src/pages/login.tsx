/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LayoutAuth from './containers/LayoutAuth/LayoutAuth';
import Header from './components/Header';
import Button from './components/Button';

export default function Login() {
  return(
    <div>
    <Header>
      <title>Login</title>
      <link rel='icon'href=''></link>
    </Header>
    <LayoutAuth>
      <>
      <form>
      <input type='text' placeholder='username'></input>
      <input type='text' placeholder='Password'></input>
      <Button>Login</Button>
      </form>
      </>
    </LayoutAuth>
    </div>
  )
}
