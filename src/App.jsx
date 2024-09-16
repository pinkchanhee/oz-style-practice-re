import styled from 'styled-components';
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const Main = styled.main`
  padding: 20px;
  background-color: pink;
  font-family: 'Caveat', cursive; /* 러블리 폰트 적용 */
  min-height: 100vh; /* 최소 높이 설정 */
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* 카드 간격 증가 */
  padding: 20px 40px;
  justify-content: center;
  align-items: flex-start; /* 시작 위치로 정렬 */
`;

function App() {
  return (
    <Main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </Main>
  );
}

export default App;
