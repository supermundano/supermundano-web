// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Import types
import extendedImage from './types/extendedImage';
import images from './types/images';

// Import schemas
import Homepage from './documents/homepage';
import Project from './documents/project';
import BlockContent from './blocks/blockContent';
import TwoImages from './blocks/twoImages';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'supermundano',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Types
    extendedImage,
    images,

    // Schemas
    Homepage,
    Project,
    TwoImages,
    BlockContent,
  ])
})
