// // const { registerBlockType } = wp.blocks;
// // const { InspectorControls, RichText } = wp.blockEditor;
// // const { PanelBody, TextControl } = wp.components;
// // const { useState } = wp.element;

// // registerBlockType('customcore/item-block', {
// //     title: 'Item Block',
// //     category: 'blocks-core',
// //     parent: ['customcore/parent-block'], // This ensures it can only be used within the parent block
// //     attributes: {
// //         title: {
// //             type: 'string',
// //             default: 'Default Title',
// //         },
// //         paragraphContent: {
// //             type: 'string',
// //             source: 'html',
// //             selector: 'p',
// //             default: 'Edit this paragraph content',
// //         },
// //     },
// //     edit: ({ attributes, setAttributes }) => {
// //         const { title, paragraphContent } = attributes;

// //         const onChangeTitle = (value) => {
// //             setAttributes({ title: value });
// //         };

// //         const onChangeParagraphContent = (value) => {
// //             setAttributes({ paragraphContent: value });
// //         };

// //         return (
// //             <div className="item-block">
// //                 <InspectorControls>
// //                     <PanelBody title="Item Settings">
// //                         <TextControl
// //                             label="Title"
// //                             value={title}
// //                             onChange={onChangeTitle}
// //                         />
// //                         <TextControl
// //                             label="Paragraph Content"
// //                             value={paragraphContent}
// //                             onChange={onChangeParagraphContent}
// //                         />
// //                     </PanelBody>
// //                 </InspectorControls>
// //                 <div>
// //                     <RichText
// //                         tagName="h2"
// //                         value={title}
// //                         onChange={onChangeTitle}
// //                         placeholder="Enter title"
// //                     />
// //                     <RichText
// //                         tagName="p"
// //                         value={paragraphContent}
// //                         onChange={onChangeParagraphContent}
// //                         placeholder="Enter paragraph content"
// //                     />
// //                 </div>
// //             </div>
// //         );
// //     },
// //     save: ({ attributes }) => {
// //         const { title, paragraphContent } = attributes;
// //         return (
            
// //             <div className="item-block">
// //                 <RichText.Content tagName="h2" value={title} />
// //                 <RichText.Content tagName="p" value={paragraphContent} />
// //             </div>
// //         );
// //     },
// // });



// // const { InnerBlocks } = wp.blockEditor;

// // registerBlockType('customcore/parent-block', {
// //     title: 'Parent Block',
// //     category: 'blocks-core',
// //     edit: () => {
// //         const ALLOWED_BLOCKS = ['customcore/item-block'];
// //         const TEMPLATE = [['customcore/item-block']];

// //         return (
// //             <div className="parent-block">
// //                 <InspectorControls>
// //                     <PanelBody title="Parent Block Settings">
// //                         <p>Settings for the parent block can be added here.</p>
// //                     </PanelBody>
// //                 </InspectorControls>
// //                 <InnerBlocks
// //                     allowedBlocks={ALLOWED_BLOCKS}
// //                     template={TEMPLATE}
// //                     renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
// //                 />
// //             </div>
// //         );
// //     },
// //     save: () => {
// //         return (
// //             <div className="parent-block">
// //                 <InnerBlocks.Content />
// //             </div>
// //         );
// //     },
// // });




// const { registerBlockType } = wp.blocks;
// const { InspectorControls, RichText, InnerBlocks } = wp.blockEditor;
// const { PanelBody, TextControl } = wp.components;
// const { useSelect, useDispatch } = wp.data;
// const { Fragment } = wp.element;
// const svgIcon = (
//     <span class="button icon">
//         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <title>arrow-right</title><path d="M0 12.333H24M24 12.333C20.7345 12.333 17.9564 10.246 16.9268 7.33301M24 12.333C20.7345 12.333 17.9564 14.42 16.9268 17.333" stroke="currentColor"></path> </svg>
//     </span>
// );
// // Custom Panel Component for Item Block Inspector within Parent Block
// const ItemBlockInspector = ({ clientId }) => {
//     const { updateBlockAttributes } = useDispatch('core/block-editor');
//     const innerBlocks = useSelect((select) =>
//         select('core/block-editor').getBlocks(clientId)
//     );

//     return (
//         <PanelBody title="Item Blocks Settings">
//             {innerBlocks.map((block, index) => (
//                 <Fragment key={index}>
//                     <div class="fragment">
//                         <h3>Item Block {index + 1}</h3>
//                         <TextControl
//                             label={`Title`}
//                             value={block.attributes.title}
//                             onChange={(value) =>
//                                 updateBlockAttributes(block.clientId, { title: value })
//                             }
//                         />
//                         <TextControl
//                             label={`Paragraph Content`}
//                             value={block.attributes.paragraphContent}
//                             onChange={(value) =>
//                                 updateBlockAttributes(block.clientId, { paragraphContent: value })
//                             }
//                         />
//                         <TextControl
//                             label={`Link`}
//                             value={block.attributes.href}
//                             onChange={(value) =>
//                                 updateBlockAttributes(block.clientId, { href: value })
//                             }
//                         />

//                     </div>
//                 </Fragment>
//             ))}
//         </PanelBody>
//     );
//     // return (
//     //     <PanelBody title="Item Blocks Settings">
//     //         {innerBlocks.map((block) => (
//     //             <Fragment key={block.clientId}>
//     //                 <TextControl
//     //                     label={`Title (${block.clientId})`}
//     //                     value={block.attributes.title}
//     //                     onChange={(value) =>
//     //                         updateBlockAttributes(block.clientId, { title: value })
//     //                     }
//     //                 />
//     //                 <TextControl
//     //                     label={`Paragraph Content (${block.clientId})`}
//     //                     value={block.attributes.paragraphContent}
//     //                     onChange={(value) =>
//     //                         updateBlockAttributes(block.clientId, { paragraphContent: value })
//     //                     }
//     //                 />
//     //                 <TextControl
//     //                     label={`Link (${block.clientId})`}
//     //                     value={block.attributes.href}
//     //                     onChange={(value) =>
//     //                         updateBlockAttributes(block.clientId, { href: value })
//     //                     }
//     //                 />
//     //             </Fragment>
//     //         ))}
//     //     </PanelBody>
//     // );
// };


// registerBlockType('customcore/parent-block', {
//     title: 'Parent Block',
//     category: 'blocks-core',
//     edit: ({ clientId }) => {
//         const ALLOWED_BLOCKS = ['customcore/item-block'];
//         const TEMPLATE = [['customcore/item-block']];

//         return (
//             <div className="parent-block pd-block pd-inline">
//                 <InspectorControls>
//                     <ItemBlockInspector clientId={clientId} />
//                     <PanelBody title="Parent Block Settings">
//                         <p>Settings for the parent block can be added here.</p>
//                     </PanelBody>
//                 </InspectorControls>
//                 <InnerBlocks
//                     allowedBlocks={ALLOWED_BLOCKS}
//                     template={TEMPLATE}
//                     renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
//                 />
//             </div>
//         );
//     },
//     save: () => {
//         return (
//             <div className="parent-block pd-block pd-inline">
//                 <InnerBlocks.Content />
//             </div>
//         );
//     },
// });


// registerBlockType('customcore/item-block', {
//     title: 'Item Block',
//     category: 'blocks-core',
//     parent: ['customcore/parent-block'],
//     attributes: {
//         title: {
//             type: 'string',
//             default: 'Title',
//         },
//         paragraphContent: {
//             type: 'string',
//             source: 'html',
//             selector: 'p',
//             default: 'Paragraph',
//         },
//         href: {
//             type: 'string',
//             default: 'https://example.com',
//         },
//     },
//     edit: ({ attributes, setAttributes }) => {
//         const { title, paragraphContent, href } = attributes;

//         const onChangeTitle = (value) => {
//             setAttributes({ title: value });
//         };

//         const onChangeParagraphContent = (value) => {
//             setAttributes({ paragraphContent: value });
//         };

//         const onChangeHref = (value) => {
//             setAttributes({ href: value });
//         };

//         return (
//             <div className="item-block">
//                 <InspectorControls>
//                     <PanelBody title="Item Settings">
//                         <TextControl
//                             label="Title"
//                             value={title}
//                             onChange={onChangeTitle}
//                         />
//                         <TextControl
//                             label="Paragraph Content"
//                             value={paragraphContent}
//                             onChange={onChangeParagraphContent}
//                         />
//                         <TextControl
//                             label="Link"
//                             value={href}
//                             onChange={onChangeHref}
//                         />
//                     </PanelBody>
//                 </InspectorControls>
//                 <RichText
//                     tagName="h2"
//                     value={title}
//                     onChange={onChangeTitle}
//                     placeholder="Enter title"
//                 />
//                 <RichText
//                     tagName="p"
//                     value={paragraphContent}
//                     onChange={onChangeParagraphContent}
//                     placeholder="Enter paragraph content"
//                 />
//                 {svgIcon}
//             </div>
//         );
//     },
//     save: ({ attributes }) => {
//         const { title, paragraphContent, href } = attributes;
       
//         return (
//             <div className="item-block pd-block pd-inline">
//                 <a href={href}>
//                     <RichText.Content tagName="h2" value={title} />
//                     <RichText.Content tagName="p" value={paragraphContent} />
//                     {svgIcon}
//                 </a>
//             </div>
//         );
//     },
// });

