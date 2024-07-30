const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './grid-list-template';

const BLOCKNAME = "gridlist";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Grid List',
    description: ( 'Grid List' ),
    icon: 'grid-view',
    category: 'blocks-core',

    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline grid-list-container',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );
