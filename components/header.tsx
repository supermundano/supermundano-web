import styled from 'styled-components';
import MenuLink from '../models/links';
import Menu from './menu'
import ClaimLogo from './ClaimLogo'

const HeaderStyles = styled.header`
    width: 100%;
    margin-bottom: 0;

    h1{
      margin: 0;

      a{
        font-size: 1.8rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    }

    .wrap{
        margin-bottom: 8rem;

        .home &{
            margin-bottom: 0;
        }

        &__menu{
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            flex-direction: column;

            ul{
              margin-top: 3rem;
              display: flex;

              li {
                margin-left: 3rem;

                a{

                  &:after{
                    display: block;
                    content: '';
                    width: 0;
                    margin-top: 0.5rem;
                    height: 1px;
                    background-size: 0 0.1rem;
                    background: linear-gradient(var(--brandFour), var(--brandFour)) 1px no-repeat;
                    background-position: 0 bottom;
                    transition: all .3s linear .1s;
                  }

                  &:hover:after{
                    background-size: 100% 0.1rem;
                    width: 100%;
                    transition: all .3s linear .1s;
                  }

                }

              }

              li:first-child{
                margin: 0;
              }
            }
        }
    }

    @media (min-width: 576px){
      h1{

        a{
          font-size: 2rem;
          align-items: flex-start;
        }

      }

      .wrap{
        margin-bottom: 13rem;

        .home &{
            margin-bottom: 0;
        }

        &__menu{
            flex-direction: row;
            align-items: flex-start;

            ul{
              margin-top: 0;
            }
        }
      }
    }

    @media (min-width: 975px){
      h1{

        a{
          flex-direction: row;
          .title-secondary{
            margin-left: 1rem;
          }
        }

      }
    }
`;

// TODO: H1 en home pero debería cambiar y que otro elemento fuera el H1 en páginas internas
export default function Header() {

    var array:MenuLink[];

    array = [
        new MenuLink('Home','/'),
        new MenuLink('Work','/'),
        new MenuLink('Services','/services')
    ];

    return(
      <HeaderStyles>
          <div className="wrap">
              <div className="wrap__menu">
                  <h1><ClaimLogo /></h1>
                  <Menu { ...array } />
              </div>
          </div>
      </HeaderStyles>
    )
}



export async function getStaticProps() {
    var array:MenuLink[];
    array = [
        new MenuLink('Work','work'),
        new MenuLink('Services','services')
    ];

    return array;
  }
