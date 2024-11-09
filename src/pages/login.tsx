/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LayoutAuth from './containers/LayoutAuth/LayoutAuth';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input/Input';

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
      <Input type='text' placeholder='email' />
      <input type='text' placeholder='Password'></input>
      <Button>Submit</Button>
      </form>
      </>
    </LayoutAuth>
    </div>
  )
}
