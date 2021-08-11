export const featuredProjectsQuery = `
  query GetFeaturedProjects{
    allHomepage(limit: 1){
      featured_projects{
        title
        description
        list_image{
          asset{
            url
          }
        }
      }
    }
  }
`;