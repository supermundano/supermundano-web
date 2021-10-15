const BlockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    },
    { type: 'twoImages' },
    {
      type: 'image',
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
  ]
}

export default BlockContent;
