const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'contact-content-container'},[
         [ 'core/paragraph', { className: 'form-container', placeholder: 'Form ID'} ],
        
         ['core/column', {className: 'contact-content-content'},[
            ['core/column', {className: 'contact-content-content-header'}, [
               [ 'core/heading', { level: 2, placeholder: 'Header', className: 'h2' } ],
               [ 'core/paragraph', {placeholder: 'Subtitle', className: 'subtitle' } ],
            ]],
            ['core/column', {className: 'contact-details'}, [
               [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget neque nulla. Phasellus eleifend quam at felis sagittis,' } ],
            ]],
         ]]
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: ' contact-content-section pd-block pd-inline',
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