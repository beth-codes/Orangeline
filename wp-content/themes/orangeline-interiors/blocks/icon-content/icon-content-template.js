const { useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl, Button, TextControl, CheckboxControl} = wp.components;
const { RichText, InspectorControls } = wp.blockEditor;
const { useState } = wp.element;
import getIconComponent from './svg-map';


const Edit = ({ attributes, setAttributes }) => {
   const { iconContent } = attributes;
  const [position, setPosition] = useState( attributes.position );
  const positionHandler = ( newPosition ) => {
     setPosition( newPosition );
     setAttributes( { position: !!newPosition } )
  };
  const blockProps = useBlockProps.save({
   className: `pd-block pd-inline icon-content-section ${position ? 'contact-icon' : 'content-preesnt'}`,
   });

   const onAddIcon = () => {
       const newIconContent = [...iconContent, { selectedIcon: 'give', heading: 'Heading', content: 'I am a paragraph. Click here to add your own text and edit me.' }];
       setAttributes({ iconContent: newIconContent });
   };

   const onRemoveIcon = (index) => {
       const newIconContent = iconContent.filter((item, i) => i !== index);
       setAttributes({ iconContent: newIconContent });
   };
   const updateIconContent = (index, value) => {
      const newIconContent = [...iconContent];
      newIconContent[index] = Object.assign({}, newIconContent[index], value);
      setAttributes({ iconContent: newIconContent });
  };

   return (
       <section {...blockProps}>
           <InspectorControls>
               <PanelBody title="Icon Content Block">
                  <CheckboxControl
                     label="Image Position"
                     checked={ attributes.position }
                     onChange={ positionHandler }
                   />
                   {iconContent.map((item, index) => (
                       <div key={index} className='icon-content-control'>
                           <SelectControl
                               label="Select Icon"
                               value={item.selectedIcon}
                               options={[
                                   { label: 'Give', value: 'give' },
                                   { label: 'Volunteer', value: 'volunteer' },
                                   { label: 'Help', value: 'help' },
                                   { label: 'Email', value: 'email' },
                                   { label: 'Location', value: 'location' },
                                   { label: 'Phone', value: 'phone' },
                                   { label: 'Chair', value: 'chair' },
                                   { label: 'Bulb', value: 'bulb' },
                                   { label: 'Palette', value: 'palette' },
                                   { label: 'Model', value: 'model' },
                               ]}
                               onChange={(newIcon) => {
                                 updateIconContent(index, { selectedIcon: newIcon });
                               }}
                           />
                           <TextControl
                              label="Heading"
                              value={item.heading}
                              onChange={(newHeading) => updateIconContent(index, { heading: newHeading })}
                            />
                            <div className='richtext-content'>
                              <label>Content</label>
                              <RichText
                                 label="Content"
                                 value={item.content}
                                 className="multiline-text-control"
                                 onChange={(newContent) => updateIconContent(index, { content: newContent })}
                              />
                              <Button isSecondary isDestructive onClick={() => onRemoveIcon(index)}>-</Button>
                            </div>
                       </div>
                   ))}
                   <Button isPrimary onClick={onAddIcon}>+</Button>
               </PanelBody>
           </InspectorControls>
           {iconContent.map((item, index) => {
               const HeadingIcon = getIconComponent(item.selectedIcon);
               return (
                   <div key={index} className='icon-content-item'>
                     <div className="svg-container">
                        <HeadingIcon/>
                     </div>
                     <div className='heading-section'>
                       <RichText
                           tagName="h1"
                           value={item.heading}
                           onChange={(newHeading) => {
                              updateIconContent(index, { heading: newHeading });
                           }}
                           className="content-heading"
                       />
                       <div className="seprator"></div>
                     </div>
                        <RichText
                           tagName="p"
                           value={item.content}
                           onChange={(newContent) => {
                              updateIconContent(index, { content: newContent });
                           }}
                           className="content-paragraph"
                        /> 
                      
                   </div>
               );
           })}
       </section>
   );
}
export default Edit;
