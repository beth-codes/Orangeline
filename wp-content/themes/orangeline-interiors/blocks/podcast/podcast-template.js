const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'podcast-container'},[
         ['core/column', {className: 'podcast-item-containers'},[
             ['core/column', {className: 'podcast-header'},[
               [ 'core/audio', { className: 'podcast-item', controls: false } ],
               ['core/image', {className: 'podcast-image'}],
            ]],
            [ 'core/heading', { placeholder: 'Podcast', className: 'podcast' } ]
         ]],
         ['core/column', {className: 'podcast-item-containers'},[
            ['core/column', {className: 'podcast-header'},[
              [ 'core/audio', { className: 'podcast-item', controls: false } ],
              ['core/image', {className: 'podcast-image'}],
           ]],
           [ 'core/heading', { placeholder: 'Podcast', className: 'podcast' } ]
        ]],
        ['core/column', {className: 'podcast-item-containers'},[
            ['core/column', {className: 'podcast-header'},[
            [ 'core/audio', { className: 'podcast-item', controls: false } ],
            ['core/image', {className: 'podcast-image'}],
            ]],
            [ 'core/heading', { placeholder: 'Podcast', className: 'podcast' } ]
         ]],
      ]]
   
  ];
  const tracks = Array.from(document.querySelectorAll('audio'));
//   console.log(tracks)
  
  tracks.forEach(function(track) {
    track.addEventListener('play', (event) => {
      tracks.forEach(function(track) {
        if(track !== event.target) track.pause();
      })
    })
  })
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline podcast-section',
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