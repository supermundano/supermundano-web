// Then we give our schema to the builder and provide the result to Sanity
const Project = {
  title: "Proyectos",
  name: "project",
  type: "document",

  fields: [
    {
      title: "Título",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "sslug",
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
      title: 'Descripción corta',
      name: 'description',
      type: 'text'
    },
    {
      title: "Imagen listado",
      name: "list_image",
      type: "image",
    },
    {
      title: "Imagen destacada",
      name: "featured_image",
      type: "image",
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
    {
      title: 'Contenido',
      name: 'content',
      type: 'blockContent',
    },
  ]
}

export default Project;