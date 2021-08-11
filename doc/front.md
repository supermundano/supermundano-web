#Fetch data parent to child components
    
    (Child) => model & markkup -> export
    (Parent) => Get Data from CMS & set values to component as property of it

#Style component example

    const HeaderWrap = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    <HeaderWrap>
        <div>
    <HeaderWrap/>
