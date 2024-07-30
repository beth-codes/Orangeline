const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './instagram-template';

const BLOCKNAME = "instagram";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Instagram',
   description: ( 'Instagram' ),
   icon: 'images-alt2',
   category: 'blocks-core',
 
    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'instagram-section pd-block',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );