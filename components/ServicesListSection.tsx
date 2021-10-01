import styled from "styled-components"
import dynamic from 'next/dynamic';
const Link = dynamic( ()=>  import('next/link'));
const ServicesListItem = dynamic( ()=>  import('./ServicesListItem'));

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
                <p>Brand claims</p>
            </ServicesListItem>
            <ServicesListItem title="CREATIVITY">
                <p>Brand narrative</p>
                <p>Design &amp; Art direction</p>
                <p>UI / UX</p>
                <p>Wireframe &amp; Prototyping</p>
                <p>Website &amp; Ecommerce</p>
                <p>Print &amp; Packaging</p>
            </ServicesListItem>
            <ServicesListItem title="TECHNOLOGY">
                <p>Technology consulting</p>
                <p>Creative development</p>
                <p>Frontend development</p>
                <p>Backend development</p>
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
            <p>Chocolates Valor</p>
            <p>El Corte Inglés</p>
            <p>Teoxane</p>
            <p><Link href="/project/instituto-ginecologico-bau"><a>Instituto Ginecológico Bau</a></Link></p>
            <p>Dg Arquitectos</p>
            <p><Link href="/project/zalamero"><a>Zalamero</a></Link></p>
            <p><Link href="/project/bowi-croqueta"><a>Bowi Croqueta</a></Link></p>
            <p><Link href="/project/better-by-letter"><a>Bettter by Letter</a></Link></p>
            <p>Calma Chechu</p>
            <p>Fabián León Masterchef</p>
            <p>The Sunglasses Box</p>
            <p>Banak</p>
            <p>R de Room</p>
            <p><Link href="/project/lada"><a>Lada Interiorismo</a></Link></p>
            <p>Dr. Anido</p>

          </ServicesListItem>
        </div>
    </ServicesListSectionStyle>
  )
}
