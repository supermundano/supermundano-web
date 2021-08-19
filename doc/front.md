# Fetch data parent to child components
    
    (Child) => model & markkup -> export
    (Parent) => Get Data from CMS & set values to component as property of it

# Style component example

    const HeaderWrap = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    <HeaderWrap>
        <div>
    <HeaderWrap/>


# Typescript
- Object Types
https://www.typescriptlang.org/docs/handbook/2/objects.html

# Nextjs Dynamic Routes
https://nextjs.org/docs/routing/dynamic-routes

# Packages used
https://www.sanity.io/plugins/next-sanity-image     (Utility for using responsive images hosted on the Sanity.io CDN with the Next.js image component.)

# Con 'onExitComplete' podemos ejecutar código antes de crear una nueva instancia de vista durante la animación
<AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>


# Add Google Analytics code and Custom track functions
https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
