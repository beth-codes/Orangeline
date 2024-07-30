const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'display-con display'},[
         ['core/column', {className: 'full-img'},[
            ['core/video', { className: 'displayed-video' } ],
            ['core/paragraph', {className: 'text h4', placeholder: ''}],
            ['core/column', {className: 'overlay'}],
         ]],
         ['core/column', {className: 'thumb-bar-video'},[
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Video Title' } ],
            ]],
         ]]
      ]], 
  ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline media-container',
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