/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LayoutAuth from './containers/LayoutAuth/LayoutAuth';
import Header from './components/Header';
import { InputEmail,InputPassword,Button } from './components';

export default function Login() {
  const handleSubmit =(event)=> {
    if(event) event.preventDefault();
    console.log('handleSubmit')
  }
  return(
    <div>
    <Header>
      <title>Login</title>
      <link rel='icon'href=''></link>
    </Header>
    <LayoutAuth>
      <>
      <form onSubmit={handleSubmit}>
      <InputEmail  placeholder="email" />
      <InputPassword  placeholder='Password' />
      <Button type='submit'>Submit</Button>
      </form>
      </>
    </LayoutAuth>
    </div>
  )
}
