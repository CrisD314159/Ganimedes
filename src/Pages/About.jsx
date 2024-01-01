import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundTitle,
  ContentTextContainer,
  Credits,
  FeatureContainer,
  FeatureText,
  FeatureTitle,
  FeaturesContainer,
  FeaturesMainContainer,
  FeaturesTitle,
} from "../Style/AboutPage/About";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Diferentes bases numéricas",
    body: "Convierte de forma rápida números de diferentes bases numéricas como decimal, binaria y hexadecimal.",
  },
  {
    title: "Utilízalo en cualquier dispositivo",
    body: "El diseño de la aplicación se adapta a cualquier dispositivo (Celular, tablet, PC).",
  },
  {
    title: "Para nada es invasivo",
    body: "Puedes usar la aplicación sin ningún anuncio publicitario invasivo.",
  },
];

const About = () => {
  return (
    <div className="mainContainer">
      <BackgroundImage>
        <ContentTextContainer>
          <BackgroundTitle>
            Una herramienta práctica para convertir entre diferentes bases
            numéricas
          </BackgroundTitle>
        </ContentTextContainer>
      </BackgroundImage>

      <FeaturesMainContainer>
        <FeaturesTitle>Características</FeaturesTitle>
        <FeaturesContainer>
          {features.map((element) => {
            return (
              <FeatureContainer>
                <FeatureTitle>{element.title}</FeatureTitle>
                <FeatureText>{element.body}</FeatureText>
              </FeatureContainer>
            );
          })}
        </FeaturesContainer>
      </FeaturesMainContainer>
      <Credits>
        <FeatureText>
          Created by{" "}
          <Link
            to={"https://crisdev.web.app/"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Crisdev
          </Link>{" "}
        </FeatureText>
      </Credits>
    </div>
  );
};

export default About;
