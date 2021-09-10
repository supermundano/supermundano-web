import styled from "styled-components";
import Link from 'next/link'

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

  .logo{
    letter-spacing: .05rem;
  }
`;


export default function ClaimLogo() {

    return(
        <ClaimLogoStyles>
            <Link href="/">
                <a><span className="logo">BLAVET</span> ® <span className="title-secondary">CREATIVE BRANDS IN CONTEXT</span></a>
            </Link>
        </ClaimLogoStyles>
    )
}
