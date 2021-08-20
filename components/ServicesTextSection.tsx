import styled from "styled-components"

const ServicesTextSectionStyle = styled.div`
  margin-bottom: 5rem;

  .text{
    max-width: 65rem;
    p:not(:last-child){
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 576px){
    display: grid;
    grid-template-columns: 25% 75%;
  }

  @media (min-width: 990px){
    grid-template-columns: 25% 50%;
  }
`;

export default function ServicesTextSection() {

  return  (
    <ServicesTextSectionStyle>
      <div className="title">
          <h2 className="secondary-title">INSIGHTS</h2>
      </div>
      <div className="text">
        <p>Supermundano es un estudio dedicado al diseño de marca que aúna la consultoría y la creatividad estratégica para que las buenas ideas aterricen con seguridad en el mundo real.</p>
        <p>Transformamos proyectos en marcas que cobran vida en armonía con su contexto, cambiante y en constante evolución.</p>
        <p>No entendemos el diseño sin estrategia, ni el éxito sin valentía. Nos gustan las ideas disruptivas y los puntos de vista alternativos.</p>
        <p>Creemos en el trabajo colaborativo con nuestros clientes, con los que siempre defendemos una postura de honestidad aunque sea incómoda.</p>
        <p>Sabemos de marcas y de negocio. Sabemos de diseño y creatividad. Si pensamos que las cosas se pueden hacer mejor, te lo diremos.</p>
        <p>Encajamos con proyectos que creen en el poder de los detalles, que escuchan a sus clientes y aportan valor a su entorno.</p>
      </div>
    </ServicesTextSectionStyle>
  )
}
