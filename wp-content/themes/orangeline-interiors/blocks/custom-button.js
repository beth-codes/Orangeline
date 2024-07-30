
const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks, InspectorControls} = wp.blockEditor;
const { Button, SelectControl, TextControl} = wp.components;
const { useSelect } = wp.data;
const { useState } = wp.element;
const BLOCKNAME = "button";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

const MyCustomBlocks = ({ attributes, setAttributes }) => {
   const { selectedUrl, selectedTitle } = attributes;

   const onChangeContent = ( setSelectedTitle ) => {
      setAttributes( { selectedTitle: setSelectedTitle } );
   };
   
   const { allContent } = useSelect((select) => {
      const { getEntityRecords } = select('core');
  
      const pages = getEntityRecords('postType', 'page', { per_page: -1 }) || [];
      const posts = getEntityRecords('postType', 'post', { per_page: -1 }) || [];
  
      const allContent = [...pages, ...posts];
      return { allContent };
   });
 
   const buttonOptions = allContent.map((content) => ({
     value: content.link,
     label: content.title.rendered,
   }));
 
   const handleUrlChange = (value) => {
     setAttributes({
       selectedUrl: value,
     });
   };
 
   return (
     <div {...useBlockProps()}>
       <InspectorControls>
         <SelectControl
           label="Select Page/Post"
           options={buttonOptions}
           onChange={(value, label) => handleUrlChange(value, label)}
         />
          <TextControl
            label="Button Text"
            value={selectedTitle}
            onChange={ onChangeContent }
         />
       </InspectorControls>
       
        <a href={selectedUrl} className="button">
         {selectedTitle}
       </a>
      
     </div>
   );
};

const MyCustomBlock = ({ attributes, setAttributes }) => {
   const { selectedUrl, selectedTitle, buttons } = attributes;

   const onChangeContent = (value) => {
      setAttributes({ selectedTitle: value });
   };

   // Define buttonOptions here
   const { allContent } = useSelect((select) => {
      const { getEntityRecords } = select('core');
  
      const pages = getEntityRecords('postType', 'page', { per_page: -1 }) || [];
      const posts = getEntityRecords('postType', 'post', { per_page: -1 }) || [];
  
      const allContent = [...pages, ...posts];
      return { allContent };
   });

   const buttonOptions = allContent.map((content) => ({
     value: content.link,
     label: content.title.rendered,
   }));

   const onAddButton = () => {
      const newButtons = [...buttons, { selectedUrl: '', selectedTitle: '' }];
      setAttributes({ buttons: newButtons });
   };

   const onRemoveButton = (index) => {
      const newButtons = [...buttons];
      newButtons.splice(index, 1);
      setAttributes({ buttons: newButtons });
   };

   const onUpdateButton = (index, key, value) => {
      const newButtons = [...buttons];
      newButtons[index][key] = value;
      setAttributes({ buttons: newButtons });
   };

   return (
     <div {...useBlockProps()}>
       <InspectorControls>
       <Button isPrimary onClick={onAddButton}>+</Button>
         {buttons.map((button, index) => (
           <div key={index}>
             <SelectControl
               label={`Select Page/Post ${index + 1}`}
               value={button.selectedUrl}
               options={buttonOptions}
               onChange={(value) => onUpdateButton(index, 'selectedUrl', value)}
             />
             <TextControl
               label={`Button Text ${index + 1}`}
               value={button.selectedTitle}
               onChange={(value) => onUpdateButton(index, 'selectedTitle', value)}
             />
             <Button isSecondary onClick={() => onRemoveButton(index)}>-</Button>
           </div>
         ))}
       </InspectorControls>
       <div class="buttons button-container">
         {buttons.map((button, index) => (
            <a key={index} href={button.selectedUrl} class="button">
            {button.selectedTitle}
            </a>
            
         ))}
       </div>
     </div>
   );
};


const MyCustomBlockSave = ({ attributes }) => {
   const { selectedUrl, selectedTitle, buttons } = attributes;
   return (
      <div class="buttons button-container">
      {buttons.map((button, index) => (
         <a key={index} href={button.selectedUrl} class="button">
         {button.selectedTitle}
         </a>
      ))}
    </div>
    
   );
 };
 
registerBlockType(BLOCKPATH, {
  title: 'Custom Button',
  description: ( 'Custom Button' ),
  icon: 'button',
  category: 'blocks-core',
  attributes: {
   buttons: {
     type: 'array',
     default: [],
     items: {
       type: 'object',
       properties: {
         selectedUrl: {
           type: 'string',
           default: '',
         },
         selectedTitle: {
           type: 'string',
           default: '',
         },
       },
     },
   },
 },
  edit: MyCustomBlock,
  save: MyCustomBlockSave,

});
export default MyCustomBlock;

//old button with core/button
// const BLOCKNAME = "button";
// const BLOCKPATH = `customcore/${BLOCKNAME}`;

// registerBlockType( BLOCKPATH, {
//     apiVersion: 3,
//     title: 'Custom Button',
//     description: ( 'Custom Button' ),
//     icon: 'button',
//     category: 'blocks-core',

//     edit: () =>{
//       const MY_TEMPLATE = [
//          ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
//             [ 'core/button', {className: 'button', placeholder: 'Button Text...'} ],
//          )],
//      ];
//      const blockProps = useBlockProps.save( {
//       className: 'pd-block pd-inline test-container',
//    } );  
//    return (
//       <InnerBlocks
//       template={ MY_TEMPLATE }
//       templateLock="insert" />
//    )
//    },

//     save: () =>{
//       const blockProps = useBlockProps.save( {
//          className: 'pd-block pd-inline button-container',
//      } );

//       return (
//          <InnerBlocks.Content />
//       )
//     } 
// } );



// const MyCustomBlockss = () => {
//   const { allContent } = useSelect((select) => {
//     const { getEntityRecords } = select('core');
    
//     const pages = getEntityRecords('postType', 'page', { per_page: -1 }) || [];
//     const posts = getEntityRecords('postType', 'post', { per_page: -1 }) || [];

//     const allContent = [...pages, ...posts];

//     return { allContent };
//   });

//   const buttonOptions = allContent.map((content) => ({
//     value: content.link,
//     label: content.title.rendered,
//   }));

//   const [selectedUrl, setSelectedUrl] = useState('');
//   const [selectedTitle, setSelectedTitle] = useState('');

//   const handleUrlChange = (value, label) => {
//     setSelectedUrl(value);
//     setSelectedTitle(label);
//   };

//   const handleButtonClick = () => {
//     if (selectedUrl) {
//       window.location.href = selectedUrl;
//     }
//   };

//   return (
//     <div>
//       <InspectorControls>
//       <SelectControl
//         label="Select Page/Post"
//         options={buttonOptions}
//         onChange={(value, label) => {
//          handleUrlChange(value, label);
//     console.log('Selected Label:', label, selectedTitle);
//    }} 
//       />
         
//       </InspectorControls>
//       <Button
//         className="button"
//         onClick={handleButtonClick}
//       >
//           {selectedUrl ? 'Go to Page/Post' : 'Select Page/Post'}
//       </Button>
//     </div>
//   );
// };


//text is tweaking, see if you can do the addnutton in previous code above
// const { registerBlockType } = wp.blocks;
// const { useBlockProps, InnerBlocks, InspectorControls } = wp.blockEditor;
// const { Button, SelectControl, TextControl } = wp.components;
// const { useSelect } = wp.data;
// const { useState } = wp.element;
// const BLOCKNAME = "button";
// const BLOCKPATH = `customcore/${BLOCKNAME}`;

// const MyCustomBlock = ({ attributes, setAttributes }) => {
//    const { buttons } = attributes;
 
//    const handleAddButton = () => {
//      const newButton = {
//        selectedUrl: "",
//        selectedTitle: ""
//      };
//      setAttributes({
//        buttons: [...buttons, newButton]
//      });
//    };
 
//    const handleRemoveButton = index => {
//      const updatedButtons = [...buttons];
//      updatedButtons.splice(index, 1);
//      setAttributes({
//        buttons: updatedButtons
//      });
//    };
 
//    const { allContent } = useSelect((select) => {
//      const { getEntityRecords } = select('core');
   
//      const pages = getEntityRecords('postType', 'page', { per_page: -1 }) || [];
//      const posts = getEntityRecords('postType', 'post', { per_page: -1 }) || [];
   
//      return { allContent: [...pages, ...posts] };
//    });
 
//    const buttonOptions = allContent.map((content) => ({
//      value: content.link,
//      label: content.title.rendered,
//    }));

//    const SingleButton = ({ button, index, setAttributes, handleRemoveButton, buttonOptions, attributes }) => {
//       const { selectedUrl, selectedTitle } = button;
    
//       const onChangeContent = setSelectedTitle => {
//         const updatedButtons = [...attributes.buttons];
//         updatedButtons[index].selectedTitle = setSelectedTitle;
//         setAttributes({ buttons: updatedButtons });
//       };
    
//       const handleUrlChange = value => {
//         const updatedButtons = [...attributes.buttons];
//         updatedButtons[index].selectedUrl = value;
//         setAttributes({ buttons: updatedButtons });
//       };
    
//       return (
//         <div>
//           <SelectControl
//             label="Select Page/Post"
//             options={buttonOptions}
//             value={selectedUrl}
//             onChange={handleUrlChange}
//           />
//           <TextControl
//             label="Button Text"
//             value={selectedTitle}
//             onChange={onChangeContent}
//           />
//           <Button onClick={() => handleRemoveButton(index)}>Remove Button</Button>
//         </div>
//       );
//     };
 
//    return (
//      <div {...useBlockProps()}>
//        <InspectorControls>
//        {buttons.map((button, index) => (
//          <SingleButton
//             key={index}
//             index={index}
//             button={button}
//             setAttributes={setAttributes}
//             handleRemoveButton={handleRemoveButton}
//             buttonOptions={buttonOptions}
//             attributes={attributes} // Pass attributes as prop
//          />
//          ))}
//          <Button onClick={handleAddButton}>Add Button</Button>
//        </InspectorControls>
//        {buttons.map((button, index) => (
//          <div>
//             <a key={index} href={button.selectedUrl} className="button">
//                {button.selectedTitle}
//             </a>
//          </div>
//       ))}
//      </div>
//    );
//  };
 

 
//  // The rest of the code remains the same
 

// const MyCustomBlockSave = ({ attributes }) => {
//   const { buttons } = attributes;
//   return (
//     <div>
//       {buttons.map((button, index) => (
//       <div>
//          <a key={index} href={button.selectedUrl} className="button">
//             {button.selectedTitle}
//          </a>
//       </div>
//       ))}
//     </div>
//   );
// };

// registerBlockType(BLOCKPATH, {
//   title: "Page/Post List Button",
//   icon: "button",
//   category: "blocks-core",
//   attributes: {
//     buttons: {
//       type: "array",
//       default: []
//     }
//   },
//   edit: MyCustomBlock,
//   save: MyCustomBlockSave
// });
