const { registerBlockType, registerBlockVariation} = wp.blocks;
const { useBlockProps, InnerBlocks, InspectorControls} = wp.blockEditor;
const { Fragment, createElement } = window.wp.element
const { Panel, PanelBody, PanelRow, DateTimePicker } = window.wp.components;

const BLOCKNAME = "date";
const BLOCKPATH = `customcore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Date',
    description: ( 'Date' ),
    icon: 'text',
    category: 'blocks-core',
    attributes: {
      datetime: {
          type: 'string',
          source: 'html',
          selector: 'p',
          default: '',
      },
  },

    edit: ( { attributes, setAttributes } ) => {
      const { datetime } = attributes;
      const onUpdateDate = ( dateTime ) => {
        var newDateTime = moment(dateTime).format( 'YYYY-MM-DD HH:mm' );
        setAttributes( { datetime: 'Event Time is: ' + newDateTime } );
      };
      return (
        <Fragment>
          <InspectorControls>
            <PanelBody
                title="Some title for the date-tile panel"
                icon=""
                initialOpen={ true }
            >
              <PanelRow>
                <DateTimePicker
                    currentDate={ datetime }
                    onChange={ ( val ) => onUpdateDate( val ) }
                    is12Hour={ true }
                />
              </PanelRow>
            </PanelBody>
          </InspectorControls>
          <Fragment>
        <div>
          <p>{datetime}</p>
        </div> 
          </Fragment>
        </Fragment>
        
      );
    },

    save: ( { attributes } ) =>{

      const { datetime } = attributes;
  
      return (
          <Fragment>
        <div>
         
          <p>{datetime}</p>
        </div> 
          </Fragment>
      );
  }
} );



