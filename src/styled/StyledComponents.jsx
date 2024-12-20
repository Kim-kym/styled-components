import styled from "styled-components";
//  스타일을 만드는 새 컴포넌트 작업
//  새 컴포넌트 생성
const Wrapper = styled.div`
  padding: 1em;
  background: gray;
`;
//  h1 기반 새 컴포넌트
const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

function StyledComponents() {
  return (
    <Wrapper>
      <Title>StyledComponents</Title>
    </Wrapper>
  );
}

export default StyledComponents;
