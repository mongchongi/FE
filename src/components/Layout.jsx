import { Outlet } from 'react-router';
import Header from './Header';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 148px;
`;
