import styled from "styled-components";

export const ContentTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.09);
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("/img/ganimedes-background.png");
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: brightness(0.8);
`;

export const BackgroundTitle = styled.p`
  margin-left: 30px;
  font-family: "Raleway", sans-serif;
  font-size: 85px;
  color: #ffffff;
  @media screen and (max-width: 740px) {
    font-size: 3.5rem;
  }
`;

export const FeaturesMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(10deg, #010b14, #02142e, #052e5c, rgb(1, 18, 47));
  height: 800px;
  background-size: 400% 400%;
  animation: gradient 7s ease-out infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const FeaturesTitle = styled.p`
  text-align: center;
  font-size: 50px;
  font-family: "Lato", sans-serif;
  color: #ffffff;
`;

export const FeaturesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const FeatureContainer = styled.div`
  height: 170px;
`;

export const FeatureTitle = styled.p`
  font-size: 30px;
  font-family: "Lato", sans-serif;
  color: #ffffff;
`;

export const FeatureText = styled.p`
  font-size: 20px;
  font-family: "Lato", sans-serif;
  color: #ffffff;
`;

export const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: #00051f;
`;
