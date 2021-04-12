import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Wrapper = styled.footer`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.marginTop2};

  > .left-side {
    display: flex;
    align-items: center;

    > .copyright {
      display: block;
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <div className='left-side'>
        <Logo />
        <span className='copyright'>
          Copyright ⓒ 2021. Save Earth. <br />본 사이트는 사업적 용도의 사이트가
          아닙니다.
        </span>
      </div>
      <Menu />
    </Wrapper>
  );
};

export default Footer;