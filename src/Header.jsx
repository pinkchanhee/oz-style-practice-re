import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffb6c1;
  font-family: 'Pacifico', cursive; 
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>OZ 코딩스쿨</h1>
      <NavList>
        <NavItem>로그인</NavItem>
        <NavItem>회원가입</NavItem>
        <NavItem>내 클래스</NavItem>
      </NavList>
    </HeaderContainer>
  );
}

export default Header;