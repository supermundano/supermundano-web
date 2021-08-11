// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Import both schemas
import Homepage from './documents/homepage';
import Project from './documents/project';
import BlockContent from './blocks/blockContent';
import images from './types/images';
import TwoImages from './blocks/twoImages';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'supermundano',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    Homepage,
    Project,
    images,
    TwoImages,
    BlockContent,
  ])
})
