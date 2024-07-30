const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './banner-template';

const BLOCKNAME = "banner";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
   apiVersion: 3,
   title: 'Banner',
   description: ( 'Banner' ),
   icon: 'laptop',
   category: 'blocks-core',
 
    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'banner-section',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
               <a href="#" class="js-scroll-next-block banner-default-continue flex items-center no-margin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none"><title>scroll</title>
                  <path d="M12.924 7.01699C12.924 3.74525 10.2717 1.09299 6.99999 1.09299C3.72825 1.09299 1.07599 3.74525 1.07599 7.01699V14.983C1.07599 18.2547 3.72825 20.907 6.99999 20.907C10.2717 20.907 12.924 18.2547 12.924 14.983V7.01699Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 5.358V7.615" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>           
               </a>
          </section>
      )
    } 
} );