import * as React from 'react';

/**
 * SVG Email.
 *
 * @param {Object} props Props.
 *
 * @return {Object} SVG content.
 */
function SvgEmail( props ) {
	return (
      <svg width={ 50 } height={ 50 } { ...props } viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8" y="12" width="48" height="40"></rect><polyline points="56 20 32 36 8 20"></polyline></g></svg>
	);
}

export default SvgEmail;