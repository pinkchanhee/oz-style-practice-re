import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  gap: 10px;
  padding: 20px;
  border: 1px solid #ff69b4;
  border-radius: 15px; /* 둥근 모서리 */
  background-color: #ffe4e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  transition: transform 0.3s, box-shadow 0.3s; /* 애니메이션 추가 */
  
  &:hover {
    transform: scale(1.05); /* 마우스 오버 시 확대 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* 그림자 확대 */
  }
`;

const ContentImage = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px; /* 여백 증가 */
`;

const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: bold; /* 폰트 굵게 */
  color: #ff1493;
  text-align: center; /* 중앙 정렬 */
  margin-bottom: 5px;
`;

const ContentText = styled.p`
  font-size: 14px;
  color: #6b6b6b; /* 더 어두운 색상 */
  text-align: center; /* 중앙 정렬 */
`;

function Content({ content }) {
  return (
    <ContentContainer>
      <ContentImage src={content.image} alt={content.title} />
      <ContentTitle>{content.title}</ContentTitle>
      <ContentText>{content.description}</ContentText>
    </ContentContainer>
  );
}

export default Content;