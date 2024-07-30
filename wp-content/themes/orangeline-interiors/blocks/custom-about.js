

const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;

const BLOCKNAME = "customabout";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Custom About',
    description: ( 'Custom About' ),
    icon: 'grid-view',
    category: 'blocks-core',

    edit: (props) =>{

      const MY_TEMPLATE = [
         ['core/column', {className: 'about-header'},[
            [ 'core/heading', { level: 4, placeholder: 'Heading', className:'h4'} ],
            ['core/column', {className: 'about-content'},[
               [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' } ],
            ]]
         ]],
     ];
     const blockProps = useBlockProps.save( {
      className: 'custom-about',
   } );  
   const { clientId } = props;
   const removeRow = () => {
      wp.data.dispatch("core/block-editor").removeBlocks(clientId);
    };
   return (
      <div {...blockProps}>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
         <div className="custom-remove-row">
            <div className="btn" onClick={removeRow}></div>
         </div>
      </div>
   )
   },

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline button-container',
     } );

      return (
         <InnerBlocks.Content />
      )
    } 
} );




            