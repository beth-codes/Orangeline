const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'gallery-container'},[
         ['core/gallery', { className: 'gallery-slide'} ],
         ['core/columns', {className: 'nav-bar'},[
            ['core/column', {className: 'carousel-action prev'}],
            ['core/column', {className: 'carousel-action next'}],
         ]]
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'gallery-section pd-block',
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