const { useBlockProps, InnerBlocks } = wp.blockEditor;
const { PanelBody, CheckboxControl} = wp.components;
const { InspectorControls } = wp.blockEditor;
const { useState } = wp.element;

const Edit = ({attributes, setAttributes}) => {
   const [position, setPosition] = useState( attributes.position );
   const positionHandler = ( newPosition ) => {
      setPosition( newPosition );
      setAttributes( { position: !!newPosition } )
   };
   const blockProps = useBlockProps.save({
      className: `pd-block pd-inline column-content-section ${position ? 'remove-img' : 'img-present'}`,
   });
   

   const MY_TEMPLATE = [
      ["core/columns", { className: 'column-countent-block mobile-scroll' },
         Array.from({ length: 3 }, () =>
      ['core/column', {className: 'column-content-container'},[
         ['core/image', { className: 'content-img' } ],
         ['core/column', {className: 'content-text'},[
            ['core/column', {className: 'heading-section'},[
               [ 'core/heading', { level: 2, placeholder: 'Heading', className: 'content-heading' } ],
               ['core/column', {className: 'seprator'}],
            ]],
            [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' } ],
            [ 'core/button', {className: 'button', placeholder: 'Button Text...'} ],
          
         ]],

      ]],
      )
   ],
   ];
  
   return (
      <section { ...blockProps }>
          <InspectorControls>
             <PanelBody title="Column Content Block">
                <CheckboxControl
                  label="Disable Image?"
                  checked={ attributes.position }
                  onChange={ positionHandler }
               />
            </PanelBody>
         </InspectorControls>
         
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
      </section>
   )
}

export default Edit;

