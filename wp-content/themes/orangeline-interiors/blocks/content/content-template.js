const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/column', {className: 'content-container'},[
         ['core/column', {className: 'content-text'},[
            [ 'core/heading', { level: 2, placeholder: 'Heading', className: 'h2' } ],
            [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' } ],
         ]]
      ]],
   ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline content-container',
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


