import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import ClaimLogo from './ClaimLogo'

const FooterTag = styled.footer`
    width: 100%;

    a{
        color: #E2E2E2;
        font-size: 1.2rem;
        font-weight: 200;
        line-height: 1.3;
    }

    .footer-wrap{
        display: grid;
        grid-template-columns: 40% 60%;
    }

    .footer-menu-wrap{
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: end;
    }

    .footer-info-wrap{
        display: flex;
        justify-content: flex-end;
        align-content: end;
        align-items: end;
        padding-bottom: 1.1rem;

        p{
            margin: 0.1rem 0.3rem;
            width: 13vw;
        }

        div{

            h4{
                text-align: right;
            }

        }

    }

    .widget-container{
        width: 50%;
        padding-right: 5vw;

        a{
            padding: 0;
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
                        <h4 className="widget-title">CONTACT</h4>
                        <p>Calle Jorge Juan, 34, 1º<br/>46004 Valencia<br/><a href="mailto:hola@supermundano.com">hola@supermundano.com</a><br/><a href="tel:+34695268598">+34 695 268 598</a></p>
                    </div>
                    <div className="widget-container">
                        <h4 className="widget-title">SOCIAL NETWORKS</h4>
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