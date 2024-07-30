const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './image-content-template';
const BLOCKNAME = "image-content";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Image / Content',
   description: ( 'Image / Content' ),
   icon: 'editor-aligncenter',
   category: 'blocks-core',
 
    edit: Edit,
    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'image-content-section pd-block pd-inline',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );