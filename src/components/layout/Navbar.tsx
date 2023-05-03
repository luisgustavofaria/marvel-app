import styled from 'styled-components';
import Image from 'next/image';

import Logo from '../../../public/Logo.png';

const StyledNavbar = styled.div`
  padding-left: 40px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const StyledLi = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media (max-width: 900px) {
      justify-content: space-around;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    font-size: 1.5rem;
    padding: 10px;
    list-style: none;

    :hover {
      color: #ffffff;
      cursor: pointer;
      border: 1px solid #000000;
      border-radius: 0px 20px 0px 20px;
      background: radial-gradient(circle, #ed1d24, #800000);
    }

    @media (max-width: 900px) {
      width: 100px;
      font-size: 1rem;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Image src={Logo} alt="" width={200} priority />
      <StyledLi>
        <ul>
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>SERIES</li>
          <li>FAVORITES</li>
        </ul>
      </StyledLi>
    </StyledNavbar>
  );
}
