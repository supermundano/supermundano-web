import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import PageTitle from './pageTitle'

const FooterTag = styled.footer`
    width: 100%; 
    
    a{
        color: #E2E2E2;
        font-size: 1rem;
        font-weight: 100;
        line-height: 1.3;
    }

    .footer-wrap{
        margin-bottom: 5rem;
        display: grid;
        grid-template-columns: 50% 50%;
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
        align-content: center;
        align-items: end;
        padding-bottom: 0.5rem;

        p{
            margin: 0.3rem;
            padding-right: 5vw;
        }

    }

    .widget-container{
        width: 40%;
        padding-right: 5vw;

        a{
            padding: 0;
        }

        h4{
            margin: 0;
            margin-bottom: 2.5rem;
            color: #4E4E4E;
            font-size: 1.4rem;
            line-height: 1.1;
            font-weight: 300;
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
                        <h4>CONTACT</h4>
                        <p>Calle Jorge Juan, 34, 1º<br/>46004 Valencia<br/><a href="mailto:hola@supermundano.com">hola@supermundano.com</a><br/><a href="tel:+34695268598">+34 695 268 598</a></p>
                    </div>
                    <div className="widget-container">
                        <h4>SOCIAL NETWORKS</h4>
                        <Menu { ...array } />
                    </div>
                </div>
                <div className="footer-info-wrap">
                    <p>2021® Terms</p>
                    <PageTitle />
                </div>
            </div>
        </FooterTag>
    )
}