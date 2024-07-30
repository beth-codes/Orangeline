const { registerBlockType, registerBlockVariation} = wp.blocks;
const { useBlockProps, InnerBlocks, InspectorControls, PanelBody} = wp.blockEditor;
import Edit from './about-template';

const BLOCKNAME = "about";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'About',
    description: ( 'About' ),
    icon: 'text',
    category: 'blocks-core',

    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline about-container',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );