export const featuredProjectsQuery = `
  query GetFeaturedProjects{
    allHomepage(limit: 1){
      featured_projects{
        _key
        title
        slug{
          current
        }
        description
        list_image{
          asset{
            url
            alt
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
          alt
          url
        }
      }
      featured_image{
        asset{
          alt
          url
        }
      }
      colaborators
      services
      image_seo{
        asset{
          alt
          url
        }
      }
      title_seo
      description_seo
      image_twitter{
        asset{
          alt
          url
        }
      }
      title_twitter
      description_twitter
      related{
        slug{
          current
        }
      }
      contentRaw
    }
  }
`;
