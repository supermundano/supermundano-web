// Then we give our schema to the builder and provide the result to Sanity
const Project = {
  title: "Proyectos",
  name: "project",
  type: "document",
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    {
      title: "Título",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: 'title',
        slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
      }
    },
    {
      title: 'Destacado',
      name: 'featured',
      type: 'boolean'
    },
    {
      title: 'Descripción corta',
      name: 'description',
      type: 'text'
    },
    {
      title: "Imagen listado",
      name: "list_image",
      type: "extendedImage",
    },
    {
      title: "Imagen destacada",
      name: "featured_image",
      type: "extendedImage",
    },
    {
      title: 'Colaboradores',
      name: 'colaborators',
      type: 'text'
    },
    {
      title: 'Servicios',
      name: 'services',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Contenido',
      name: 'content',
      type: 'blockContent',
    },

    // SEO
    {
      title: "Imagen SEO",
      name: "image_seo",
      type: "extendedImage",
      fieldset: 'seo',
    },
    {
      title: "Título SEO",
      name: "title_seo",
      type: "string",
      fieldset: 'seo',
    },
    {
      title: "Descripción SEO",
      name: "description_seo",
      type: "text",
      fieldset: 'seo',
    },

    // SEO Twitter
    {
      title: "Imagen Twitter",
      name: "image_twitter",
      type: "extendedImage",
      fieldset: 'seo',
    },
    {
      title: "Título Twitter",
      name: "title_twitter",
      type: "string",
      fieldset: 'seo',
    },
    {
      title: "Descripción Twitter",
      name: "description_twitter",
      type: "text",
      fieldset: 'seo',
    },

    {
      title: 'Relacionados',
      name: 'related',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'project'},
          ]
        }
      ]
    },
  ]
}

export default Project;
