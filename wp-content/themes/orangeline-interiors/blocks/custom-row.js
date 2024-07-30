

const { registerBlockType, registerBlockVariation} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;

const BLOCKNAME = "rows";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Custom Rows',
    description: ( 'Custom Rows' ),
    icon: 'grid-view',  
   //  category: 'blocks-core',

    edit: (props) =>{

      const MY_TEMPLATE = [
         ['core/columns', {className: 'row-container'}, [
            ['core/column', {className: 'row-list-item'},[
               ['core/paragraph', {placeholder: 'Code', className: 'row-code'}],
               ['core/column', {className: 'row-content'},[
                  ['core/heading', {level: 2, placeholder: 'Content', className: 'content'}]
               ]],
               ['core/paragraph', {placeholder: 'Year', className: 'row-year'}]
            ]],
            ['core/image', {className: 'row-image'}]
         ]]
     ];
     const blockProps = useBlockProps.save( {
      className: 'rows',
   } );  
   const { clientId } = props;
   const removeRow = () => {
      wp.data.dispatch("core/block-editor").removeBlocks(clientId);
    };
   return (
      <section {...blockProps}>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
         <div className="custom-remove-row">
            <div className="btn" onClick={removeRow}></div>
         </div>
      </section>
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




            



// onChange={(newValue) => handleHeadingTypeChange(newValue)}