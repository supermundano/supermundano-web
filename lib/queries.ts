export const featuredProjectsQuery = `
  query GetFeaturedProjects{
    allHomepage(limit: 1){
      featured_projects{
        _key
        title
        description
        list_image{
          asset{
            url
            altText
          }
        }
      }
    }
  }
`;

export const allProjectsQuery = `
  query GetAllProjects{
    allProject {
      _key
      title
      slug{
        current
      }
    }
  }
`;

export const singleProjectQuery = `
  query Project($slug: String!){
    allProject(where: { slug: {current: {eq: $slug} } } ){
      title
      description
      list_image{
        asset{
          altText
          url
        }
      }
      featured_image{
        asset{
          altText
          url
        }
      }
      colaborators
      services
      related{
        slug{
          current
        }
      }
      contentRaw
    }
  }
`;