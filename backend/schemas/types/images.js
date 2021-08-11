// Needed here as we need to export to GraphQL using  $ sanity graphql deploy and it needs to be lifted to first level
// https://www.sanity.io/docs/graphql#33ec7103289a
const images = {
  name: 'twoimages',
  title: 'Imágenes',
  type: 'array',
  validation: Rule => Rule.required().min(2).max(2),
  of: [
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
  options: {
    layout: 'grid',
  },
}

export default images;