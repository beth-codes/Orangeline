const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks, RichText} = wp.blockEditor;
import Edit from './media-template';

const BLOCKNAME = "media";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Media',
    description: ( 'Media' ),
    icon: 'video-alt3',
    category: 'blocks-core',
    edit: Edit,
    save: () =>{

      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline media-container',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );
