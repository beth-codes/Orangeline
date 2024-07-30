const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './column-content-template';

const BLOCKNAME = "column-content";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Column Content',
    description: ( 'Column Content' ),
    icon: 'editor-aligncenter',
    category: 'blocks-core',
    attributes: {
      position: {
         type: 'boolean',
         default: false,
      },
   },
    

    edit: Edit,

   save: ({ attributes }) => {
      const { position } = attributes;

      const blockProps = useBlockProps.save({
         className: `pd-block pd-inline column-content-section ${position ? 'remove-img' : 'img-present'}`,
      });

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );
