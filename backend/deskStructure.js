// in sanity-structure.js

import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = listItem => ![    'homepage'  ].includes(listItem.getId())

const structure = () =>
  S.list()
    .title('Content')
    .items([
        S.listItem()
          .title('Opciones generales')
          .child(
            S.editor()
              .id('homepage')
              .schemaType('homepage')
              .documentId('singleton-homepage')
          ),
        ...S.documentTypeListItems().filter(hiddenDocTypes) ]);

export default structure;
