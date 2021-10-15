// Needed here as we need to export to GraphQL using  $ sanity graphql deploy and it needs to be lifted to first level
// https://www.sanity.io/docs/graphql#33ec7103289a
const extendedImage = {
  name: 'extendedImage',
  title: 'Imagen',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Texto Alternativo',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
  ],
}

export default extendedImage;
