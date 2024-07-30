const { useBlockProps, InnerBlocks } = wp.blockEditor;
const Edit = (props) => {
   const MY_TEMPLATE = [
      ['customcore/customabout'],
   ];
   const addRow = () => {
      const newRow = wp.blocks.createBlock( 'customcore/customabout', {} );
      wp.data.dispatch( 'core/block-editor' ).insertBlocks( newRow, 6, props.clientId,);
    };
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline about-container',
  } );
   return (
      <section {...blockProps}>
         <InnerBlocks templateLock={false} allowedBlocks='customcore/customabout'  template={MY_TEMPLATE} />
         <div className="custom-add-row">
            <button onClick={addRow}>Add Row</button>
         </div>
      </section>
   )
}

export default Edit;




 