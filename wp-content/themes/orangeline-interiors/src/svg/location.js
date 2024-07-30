import * as React from 'react';

/**
 * SVG Location.
 *
 * @param {Object} props Props.
 *
 * @return {Object} SVG content.
 */
function SvgLocation( props ) {
	return (
      <svg  width={ 60 } height={ 50 } { ...props } viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="1" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.56,56.51S14.41,37.67,14.41,25.39c0-14.49,9.48-17.84,17.15-17.84,7.06,0,16.13,3.79,16.13,17.84C47.69,38.07,31.56,56.51,31.56,56.51Z"></path><circle cx="31.05" cy="22.24" r="6.93"></circle></g></svg>
	);
}

export default SvgLocation;