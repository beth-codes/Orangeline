const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './project-gallery-template';

const BLOCKNAME = "project-gallery";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Project Gallery',
   description: ( 'Project Gallery' ),
   icon: 'format-image',
   category: 'blocks-core',
 
    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'project-gallery-section pd-block',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );