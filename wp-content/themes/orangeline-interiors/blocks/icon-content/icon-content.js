const { registerBlockType } = wp.blocks;
const { RichText, useBlockProps } = wp.blockEditor;
import Edit from './icon-content-template.js'
import getIconComponent from './svg-map'; 
const BLOCKNAME = "icon-content";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType(BLOCKPATH, {
   apiVersion: 3,
   title: 'Icon Content',
   description: 'Icon Content',
   icon: 'editor-aligncenter',
   category: 'blocks-core',
   attributes: {
      position: {
         type: 'boolean',
         default: false,
      },
      iconContent: {
          type: 'array',
          default: [
              { selectedIcon: 'give', heading: 'Heading', content: 'I am a paragraph. Click here to add your own text and edit me.' }
          ],
      },  
   },
  
   edit: Edit,
   save: ({ attributes }) => {
      const { position } = attributes;
      const blockProps = useBlockProps.save({
         className: `pd-block pd-inline icon-content-section ${position ? 'contact-icon' : 'content-preesnt'}`,
     });
       const { iconContent } = attributes;
       return (
           <section {...blockProps}>
               {iconContent.map((item, index) => {
                   const HeadingIcon = getIconComponent(item.selectedIcon);
                   return (
                       <div key={index} className='icon-content-item'>
                           
                           <div className="svg-container">
                              <HeadingIcon/>
                           </div>
                           <div className='heading-section'>
                              <RichText.Content
                                 tagName="h1"
                                 value={item.heading}
                                 className="content-heading"
                              />
                              <div className="seprator"></div>
                           </div>
                           <RichText.Content
                              tagName="p"
                              value={item.content}
                              className="content-paragraph"
                           /> 
                       </div>
                   );
               })}
           </section>
       );
   },
});


 




// registerBlockType( BLOCKPATH, {
//     apiVersion: 3,
//     title: 'Content',
//     description: ( 'Content' ),
//     icon: 'editor-aligncenter',
//     category: 'blocks-core',
//     attributes: {
//       position: {
//           type: 'boolean',
//           default: false,
//       },
//   },

//     edit: Edit,

//     save: ({ attributes }) => {
//       const { position } = attributes;
      
//       const blockProps = useBlockProps.save({
//          className: `pd-block pd-inline content-container ${position ? 'left-align' : 'right-align'}`,
//      });

//       return (
//           <section { ...blockProps }>
//               <InnerBlocks.Content />
//           </section>
//       )
//     } 
// } );