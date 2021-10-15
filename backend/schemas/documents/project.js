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
      type: "image",
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
    },
    {
      title: "Imagen destacada",
      name: "featured_image",
      type: "image",
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
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
