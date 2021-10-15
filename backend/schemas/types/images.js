// Needed here as we need to export to GraphQL using  $ sanity graphql deploy and it needs to be lifted to first level
// https://www.sanity.io/docs/graphql#33ec7103289a

const images = {
  name: 'twoimages',
  title: 'Imágenes',
  type: 'array',
  validation: Rule => Rule.required().min(2).max(2),
  of: [
    {
      // As name and title are set by extendedImage, we have to comment them out here. If not, graphql deploy triggers an error
      // https://github.com/sanity-io/sanity/issues/1904
      // name: 'image',
      // title: 'Imagen',
      type: 'extendedImage',
    }
  ],
  options: {
    layout: 'grid',
  },
}

export default images;
