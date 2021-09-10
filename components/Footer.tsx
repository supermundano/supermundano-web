import Link from 'next/link';
import styled from 'styled-components';
import MenuLink from '../models/links';
import ClaimLogo from './ClaimLogo'

const FooterTag = styled.footer`
  width: 100%;

  .footer-info-wrap{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column-reverse;
    padding-bottom: 1.1rem;

    p{
      margin: 2rem 0;
    }

    div{
      display: flex;
      margin-bottom: 1rem;

      a{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1.8rem;

        .title-secondary{
          text-align: left;
        }

      }
    }
  }

  .widget-container{
    width: 100%;
    margin-bottom: 5rem;

    & *{
      text-align: left;
      line-height: 1.3;
    }

    a{
        padding: 0;
    }

    ul{
      margin-bottom: 0;
      list-style: none;
      padding: 0;
    }
  }

  @media (min-width: 400px){
    .footer-info-wrap{

      div{
        a{
          font-size: 2rem;
        }
      }
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
      margin-top: 5rem;

      p{
        margin: 0.1rem 0.35rem;
      }
    }

    .widget-container{
      margin: 0;

      & *{
        text-align: left;
      }

      p{
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 600px){
    .footer-info-wrap{
      div{
        a{
          display: block;
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: 990px){
    .footer-wrap{
      display: grid;
      grid-template-columns: 55% 45%;
    }

    .footer-info-wrap{
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: column-reverse;
      margin-top: 0;
      padding: 0;

      p{
        margin: 0.1rem 0.3rem;
        width: 100%;
        text-align: right;
      }

      a{
        font-size: 1.8rem;
        padding: 0;
      }

      div{
        margin: 0;

        h4{
          text-align: right;
        }

        a{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }

      h1{

        .title-secondary{

        }

      }
    }
  }

  @media (min-width: 1200px){
    .footer-info-wrap{
      div{
        a{
          display: block;
        }
      }
    }
  }

  @media (min-width: 1400px){

    .footer-wrap{
      grid-template-columns: 45% 55%;
    }

    .footer-info-wrap{
      justify-content: flex-end;
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

  const menu = [
    {'title': 'Behance', 'url':'https://www.behance.net/blavetstudio'},
    {'title': 'Instagram', 'url':'https://instagram.com/blavetstudio'},
    {'title': 'LinkedIn', 'url':'https://es.linkedin.com/company/blavetstudio'},
    {'title': 'Twitter', 'url':'https://twitter.com/BlavetStudio'},
  ]

  return(
    <FooterTag>
      <div className="footer-wrap">
        <div className="footer-menu-wrap">
          <div className="widget-container">
            <h4 className="secondary-title">CONTACT</h4>
            <p>Jorge Juan, 34, 1º<br/>46004 Valencia<br/><a href="mailto:hola@blavetstudio.com">hola@blavetstudio.com</a><br/><a href="tel:+34695268598">+34 695 268 598</a></p>
          </div>
          <div className="widget-container">
            <h4 className="secondary-title">SOCIAL NETWORKS</h4>
            <ul>
              { menu.map(item => <li key={item.url}><a href={item.url} target="_blank" rel="nofollow noopener noreferrer">{item.title}</a></li> )}
            </ul>
          </div>
        </div>
        <div className="footer-info-wrap">
          <p>2021® <Link href="/terms"><a>Terms</a></Link></p>
          <ClaimLogo />
        </div>
      </div>
    </FooterTag>
  )
}
