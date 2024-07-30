const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
   
      ['core/columns', {className: 'grid-list-container'},[
         ['core/column', {className: 'grid-list-header'}, [
            [ 'core/heading', { level: 3, placeholder: 'Heading', className: 'h3'} ],
         ]],
         ['core/columns', {className: 'grid-list-items'}, [
            ['core/column', {className: 'grid-list-item'},[
               [ 'core/heading', { placeholder: 'Lorem Ipsum' } ],
               ['core/column', {className: 'grid-button'},[]]
            ]],
            ['core/column', {className: 'grid-list-item'},[
               [ 'core/heading', { placeholder: 'Lorem Ipsum' } ],
               ['core/column', {className: 'grid-button'},[]]
            ]],
            ['core/column', {className: 'grid-list-item'},[
               [ 'core/heading', { placeholder: 'Lorem Ipsum' } ],
               ['core/column', {className: 'grid-button'},[]]
            ]],
            ['core/column', {className: 'grid-list-item'},[
               [ 'core/heading', { placeholder: 'Lorem Ipsum' } ],
               ['core/column', {className: 'grid-button'},[]]
            ]],
            ['core/column', {className: 'grid-list-item'},[
               [ 'core/heading', { placeholder: 'Lorem Ipsum' } ],
               ['core/column', {className: 'grid-button'},[]]
            ]],
         ]]
       
      ]], 
   ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline grid-list-container',
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