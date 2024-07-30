const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './gallery-carousel-template';

const BLOCKNAME = "gallery";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Gallery Carousel',
   description: ( 'Gallery Carousel' ),
   icon: 'images-alt2',
   category: 'blocks-core',
 
    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'gallery-section pd-block',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );