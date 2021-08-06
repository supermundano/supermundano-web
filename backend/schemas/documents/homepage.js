// Then we give our schema to the builder and provide the result to Sanity
const Homepage = {
  title: "Homepage",
  name: "homepage",
  type: "document",

  fields: [
    {
      title: 'Destacados',
      name: 'featured_projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'project'},
          ]
        }
      ]
    }
  ],

}

export default Homepage;