import styled from "@emotion/styled";

import TextArea from "../Style/HomePage/TextArea";

const MainContainer = styled.div`
  padding: 0 40px;
  background-color: ${({ theme }) => theme.body};
`;

const Home = () => {
  return (
    <MainContainer>
      <TextArea />
    </MainContainer>
  );
};

export default Home;
