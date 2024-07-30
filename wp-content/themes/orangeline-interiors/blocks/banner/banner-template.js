const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/column', {className: 'banner-container'}, [ 
         ['core/column', {className: 'banner-images'}, [
            ['core/gallery', { className: 'banner-img' } ],
         ]],
         ['core/column', {className: 'banner-content'}, [
            [ 'core/paragraph', {placeholder: 'Overline', className: 'overline' } ],
            ['core/column', {className: 'banner-header'},[
               [ 'core/heading', { level: 1, placeholder: 'Header', className: 'banner-h1' } ],
            ]],
            [ 'core/paragraph', {placeholder: 'Lorem ipsum dolor', className: 'banner-text' } ],
         ]],

      ]],
   ];
   const blockProps = useBlockProps();
   return (
      <section { ...blockProps }>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
      </section>
   )
}

export default Edit;