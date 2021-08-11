
// Images preview
import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'
const urlFor = source => urlBuilder(client).image(source)

const twoImagesPreview = ({ value = {} }) => {
  return (
    <div>
      {value && value.images &&
        value.images.map(image => (
          <div
            key={image._key}
            style={{ display: 'inline-block' }}
          >
            <figure style={{ margin: '1em' }}>
              {/* eslint-disable-next-line */}
              <img src={urlFor(image.asset).width(50).url()} style={{ marginRight: '0.5em' }} />
            </figure>
          </div>
        ))}
    </div>
  )
}

// Declare TwoImages block with preview
const TwoImages = {
  name: 'twoImages',
  title: 'Two Images',
  type: 'object',
  preview: {
    select: {
      images: 'images'
    },
    component: twoImagesPreview
  },
  fields: [
    {
      name: 'images',
      title: 'Imágenes',
      type: 'twoimages',
    }
  ]
}

export default TwoImages;