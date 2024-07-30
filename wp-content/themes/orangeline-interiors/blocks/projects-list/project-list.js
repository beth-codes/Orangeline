const { registerBlockType, registerBlockVariation } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

const BLOCKNAME = "projects-list";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockVariation('core/query', {
    name: BLOCKPATH,
    title: 'Projects List',
    description: 'Displays a list of Projects',
    icon: 'images-alt2',
    category: 'blocks-core',
    isActive: ({ namespace, query }) => {
        return (
            namespace === 'customcore/projects-list' &&
            query.postType === 'project'
        );
    },
    attributes: {
        query: {
            postType: 'project', // Query for posts of type 'event'
        },
    },
    namespace: 'customcore/projects-list',
    allowedControls: [],
    scope: ['inserter'],
    isActive: ['namespace'],
    innerBlocks: [
        [
            'core/post-template',{className: 'project-list-section'}, // Additional attributes for core/post-template if needed
            [
                ['core/post-title',],
                ['core/post-featured-image'], 
            ],
        ],
    ],
});