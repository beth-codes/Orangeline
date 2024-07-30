const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/column', {className: 'project-gallery-container'},[
         ['core/gallery', { className: 'project-gallery-slide'} ],
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'project-gallery-section pd-block',
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