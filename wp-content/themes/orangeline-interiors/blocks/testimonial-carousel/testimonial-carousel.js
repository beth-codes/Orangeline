const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './testimonial-carousel-template';

const BLOCKNAME = "testimonial";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Testimonial Carousel',
   description: ( 'Testimonial Carousel' ),
   icon: 'images-alt2',
   category: 'blocks-core',
 
    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'testimonial-section pd-block',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );