import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/img/ganimedes-404.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Gateway = () => {
  return (
    <div>
      <Background></Background>
    </div>
  );
};
export default Gateway;
