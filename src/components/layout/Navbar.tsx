import styled from 'styled-components';
import Image from 'next/image';

import Logo from '../../../public/Logo.png';

const StyledNavbar = styled.div`
  padding-left: 50px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLi = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 10px;
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
      border-radius: 20px 0 20px 0;
      background: radial-gradient(circle, #ed1d24, #800000);
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Image src={Logo} alt="" width={200} />
      <StyledLi>
        <ul>
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>EVENTS</li>
          <li>SERIES</li>
          <li>STORIES</li>
        </ul>
      </StyledLi>
    </StyledNavbar>
  );
}
