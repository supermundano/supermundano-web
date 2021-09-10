import styled from "styled-components"
import ServicesListItem from "./ServicesListItem"

export const ServicesListSectionStyle = styled.div`
  margin-bottom: 5rem;

  .title h2{
    margin-top:  0;
  }

  p{
    margin: 0;
  }

  @media (min-width: 576px){
    display: grid;
    grid-template-columns: 25% 75%;

    .text:last-child{
      margin-top: 0;
    }
  }
`;

export default function ServicesListSection() {
  return  (
    <ServicesListSectionStyle>
        <div className="title">
          <h2 className="secondary-title">SERVICES</h2>
        </div>
        <div className="wrap">
            <ServicesListItem title="BRAND STRATEGY">
                <p>Research</p>
                <p>Brand Strategy</p>
                <p>Naming</p>
                <p>Claiming</p>
            </ServicesListItem>
            <ServicesListItem title="CREATIVITY">
                <p>Narrativa de marca visual y verbal</p>
                <p>Design &amp; Art direction</p>
                <p>UI / UX</p>
                <p>Wireframe &amp; Prototyping</p>
                <p>Website &amp; Ecommerce</p>
                <p>Print &amp; Packaging</p>
            </ServicesListItem>
            <ServicesListItem title="TECHNOLOGY">
                <p>Creative development</p>
                <p>Front-end development</p>
                <p>Back-end development</p>
            </ServicesListItem>
        </div>
        <div className="title">
          <h2 className="secondary-title">CLIENTS</h2>
        </div>
        <div className="wrap">
          <ServicesListItem title="">
            <p>Hello Creatividad</p>
            <p>Instituto BME (Bolsas y Mercados Españoles)</p>
            <p>Club de Malasmadres</p>
            <p>Grupo Saona</p>
            <p>Instituto Ginecológico Bau</p>
            <p>Dg Arquitectos</p>
            <p>Zalamero</p>
            <p>Bowi Croqueta</p>
            <p>Bettter by Letter</p>
            <p>Calma Chechu</p>
            <p>Fabián León Masterchef</p>
            <p>The Sunglasses Box</p>
            <p>R de Room</p>
            <p>Lada Interiorismo</p>
            <p>Dr. Anido</p>

          </ServicesListItem>
        </div>
    </ServicesListSectionStyle>
  )
}
