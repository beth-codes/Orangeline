const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './contact-content-template';
const BLOCKNAME = "contact-content";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Contact / Content',
   description: ( 'Image / Content' ),
   icon: 'format-aside',
   category: 'blocks-core',
 
    edit: Edit,
    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'contact-content-section pd-block pd-inline',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );