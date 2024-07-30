const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'instagram-container'},[
         
         ['core/column', {className: 'instagram-header'},[
            [ 'core/paragraph', { placeholder: 'Stay Connected', className: 'overline' } ],
            [ 'core/heading', { level: 3, placeholder: 'Heading', className: 'h3' } ],
            
         ]],
           
         ['core/column', {className: 'instagram-item'},[
            [ 'core/paragraph', { placeholder: 'instagram', className: 'overline' } ],
            
         ]]
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'instagram-section pd-block',
} );
   return (
      <section { ...blockProps }>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
      </section>
   )
}

export default Edit;