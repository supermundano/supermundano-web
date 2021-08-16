import styled from "styled-components"
import ServicesListItem from "./servicesListItem"

const ServicesListSectionStyle = styled.div`
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
  }
`;

export default function ServicesListSection() {
  return  (
    <ServicesListSectionStyle>
        <div className="title">
          <h2 className="secondary-title">SERVICES</h2>
        </div>
        <div className="wrap">
            <ServicesListItem title="ESTRATEGIA DE MARCA">
                <p>Research</p>
                <p>Brand Strategy</p>
                <p>Naming</p>
            </ServicesListItem>
            <ServicesListItem title="CREATIVIDAD">
                <p>Narrativa de marca visual y verbal</p>
                <p>Diseño y Dirección de Arte</p>
                <p>UI / UX</p>
                <p>Wireframe &amp; Prototyping</p>
                <p>Website y Ecommerce</p>
                <p>Print &amp; Packaging</p>
            </ServicesListItem>
            <ServicesListItem title="TECNOLOGÍA">
                <p>Creative development</p>
                <p>Front-end development</p>
                <p>Back-end development</p>
            </ServicesListItem>
        </div>
    </ServicesListSectionStyle>
  )
}
