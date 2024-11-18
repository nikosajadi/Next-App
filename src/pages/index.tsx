
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth';
import Login from './login';


export default function Home() {
  return (
    <div>

    <LayoutAuth>
    <>
      
      <Login />
    </>
    </LayoutAuth>
    </div>
  );
}
