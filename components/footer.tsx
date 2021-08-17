import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import ClaimLogo from './ClaimLogo'

const FooterTag = styled.footer`
    width: 100%;

    a{
      color: var(--brandPrimary);
    }

    .footer-info-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      padding-bottom: 1.1rem;

      p{
        margin: 2rem 0;
      }

      div{
        display: flex;
        margin-bottom: 1rem;

        a{
          text-align: center;
        }
      }
    }

    .widget-container{
      width: 100%;
      margin-bottom: 5rem;

      & *{
        text-align: center;
      }
      a{
          padding: 0;
          color: white;
      }
    }

    @media (min-width: 576px){
      .footer-menu-wrap{
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-end;
      }

      .footer-info-wrap{
        margin-top: 2rem;
        p{
          margin: 0.1rem 0.35rem;
        }
      }

      .widget-container{
        margin: 0;

        & *{
          text-align: left;
        }
      }

    }

    @media (min-width: 990px){
      .footer-wrap{
        display: grid;
        grid-template-columns: 45% 55%;
      }

      .footer-info-wrap{
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 0;
        p{
          margin: 0.1rem 0.3rem;
          width: 100%;
          text-align: right;
        }

        a{
          font-size: 1.8rem;
        }
        div{
          margin: 0;
          h4{
            text-align: right;
          }
        }
      }
    }

    @media (min-width: 1400px){

      .footer-wrap{
        grid-template-columns: 45% 55%;
      }

      .footer-info-wrap{
        flex-direction: row;

        p{
          margin: 0.1rem 0.3rem;
          width: 13vw;
          text-align: left;
        }

        div{
          h4{
            text-align: right;
          }
        }
      }

      .widget-container:first-child{
        padding-right: 5vw;
      }

    }
`;


export default function Footer() {

    var array:MenuLink[];
    array = [
        new MenuLink('Behance','#'),
        new MenuLink('Instagram','#'),
        new MenuLink('LinkedIn','#'),
        new MenuLink('Twitter','#')
    ];

    return(
        <FooterTag>
            <div className="footer-wrap">
                <div className="footer-menu-wrap">
                    <div className="widget-container">
                        <h4 className="secondary-title">CONTACT</h4>
                        <p>Calle Jorge Juan, 34, 1º<br/>46004 Valencia<br/><a href="mailto:hola@supermundano.com">hola@supermundano.com</a><br/><a href="tel:+34695268598">+34 695 268 598</a></p>
                    </div>
                    <div className="widget-container">
                        <h4 className="secondary-title">SOCIAL NETWORKS</h4>
                        <Menu { ...array } />
                    </div>
                </div>
                <div className="footer-info-wrap">
                    <p>2021® Terms</p>
                    <ClaimLogo />
                </div>
            </div>
        </FooterTag>
    )
}
