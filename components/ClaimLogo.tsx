import styled from "styled-components";
import dynamic from 'next/dynamic';
const Link = dynamic( ()=>  import('next/link'));
const BlavetLogo = dynamic( ()=>  import('../public/static/svg/blavet-logo.svg'));

const ClaimLogoStyles = styled.div`
  letter-spacing: 0;

  a{
    text-align: center;
    font-size: 2rem;
    color: white;
    margin: 0;
    font-weight: 600;

    &:hover{
      color: white;
      background: none;
    }

    .title-secondary{
      color: var(--brandFour);
    }
  }
`;


export default function ClaimLogo() {
  return(
      <ClaimLogoStyles>
          <Link href="/">
              <a><span className="logo">
                <BlavetLogo /></span> <span className="title-secondary">CREATIVE BRANDS IN CONTEXT</span>
              </a>
          </Link>
      </ClaimLogoStyles>
  )
}
