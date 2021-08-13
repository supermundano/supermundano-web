import styled from "styled-components";
import Link from 'next/link'

const ClaimLogoStyles = styled.div`
  a{
    font-size: 1.4rem;
    color: white;
    margin: 0;
    font-weight: 400;
  }

  .title-secondary{
    color: #4E4E4E;
    margin-left: 1rem;
  }
`;


export default function ClaimLogo() {

    return(
        <ClaimLogoStyles>
            <Link href="/">
                <a>SUPERMUNDANO ® <span className="title-secondary">CREATIVE BRANDS IN CONTEXT</span></a>
            </Link>
        </ClaimLogoStyles>
    )
}
