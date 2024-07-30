const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './podcast-template';

const BLOCKNAME = "podcast";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Podcast',
    description: ( 'Podcast' ),
    icon: 'podio',
    category: 'blocks-core',

    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline podcast-section',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );

//https://www.buzzsprout.com/214255/13138719-demystifying-opms-understanding-their-role-in-graduate-education-s4-e15.mp3?client_source=small_player&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F214255%2F13138719-demystifying-opms-understanding-their-role-in-graduate-education-s4-e15%3Fclient_source%3Dsmall_player%26iframe%3Dtrue
