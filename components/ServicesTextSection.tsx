import styled from "styled-components"

export const ServicesTextSectionStyle = styled.div`
  margin-bottom: 5rem;

  .text{
    max-width: 65rem;

    > ul,
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
        <p>Supermundano is a studio devoted to brand design that unites consulting and strategic creativity for good ideas to safely land in the real world.</p>
        <p>We transform projects into brands that come to life in harmony with their changing and constantly evolving contexts.</p>
        <p>We don&apos;t understand design without strategy or success without courage. We like disruptive ideas and alternative points of view.</p>
        <p>We believe in working collaboratively with our clients with whom we always advocate honesty even if it entails an awkward position.</p>
        <p>We know about brands and business. We know about creativity and design. If we think things can be done in a better way, we&apos;ll let you know.</p>
        <p>We become one with projects that believe in the power of details, listen to their customers and add value to their environment.</p>
      </div>
    </ServicesTextSectionStyle>
  )
}
