import styled from "styled-components";

// TODO: Los anchos máximos y márgenes, tenemos que ver si son refactorizables a CSS Vars para que sean comunes y aplicar en todas partes el mismo vertical/horizontal rythm
const PageDescriptionStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 8rem;

    p{
      text-align: center;
    }

    @media (min-width: 576px){
      justify-content: flex-start;

      p{
        text-align: left;
        max-width: 41rem;
      }
    }
`;

export default function PageDescription() {
    return(
        <PageDescriptionStyles>
            <p>Our work focuses on creativity from a strategic perspective to contextualise each brand in its environment.</p>
        </PageDescriptionStyles>
    )
}
