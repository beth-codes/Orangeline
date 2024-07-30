const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'testimonial-container'},[
         ['core/gallery', { className: 'testimonial-slide'} ],
         ['core/columns', {className: 'nav-bar'},[
            ['core/column', {className: 'prev'}],
            ['core/column', {className: 'next'}],
         ]]
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'testimonial-section pd-block',
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