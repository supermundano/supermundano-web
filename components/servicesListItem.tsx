import styled from "styled-components"

// TODO: Colores a CSS Vars
const ServicesListItemStyle = styled.div`
  border-top: 1px solid #4E4E4E;
  padding: 5rem 0;

  .text{
    margin: 5rem 0;
  }
`;

export default function ServicesListItem( {title, children}:any ) {
  return  (
    <ServicesListItemStyle>
      <h2 className="secondary-title">{ title }</h2>

      <div className="text">
          { children }
      </div>
    </ServicesListItemStyle>
  )
}
