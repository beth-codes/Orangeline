import * as React from 'react';

/**
 * SVG Phone.
 *
 * @param {Object} props Props.
 *
 * @return {Object} SVG content.
 */
function SvgPhone( props ) {
	return (
            <svg width={ 100 } height={ 50 } { ...props } version="1.1" viewBox="0 0 500 550">
                  <path d="m496.75 256.06c0 8.3184-6.5495 15.063-14.629 15.063-8.0792 0-14.629-6.7446-14.629-15.063 0-124.78-98.241-225.94-219.43-225.94-8.0792 0-14.629-6.7437-14.629-15.062s6.5495-15.062 14.629-15.062c137.34 0 248.68 114.64 248.68 256.06zm-87.771 0c0 8.3184-6.5495 15.063-14.629 15.063-8.0792 0-14.629-6.7446-14.629-15.063 0-74.869-58.944-135.56-131.66-135.56-8.0792 0-14.629-6.7437-14.629-15.062s6.5495-15.062 14.629-15.062c88.87 0 160.91 74.181 160.91 165.69zm7.0687 189.68-49.171 50.63c-43.865 45.167-184.5-14.207-261.19-93.181-76.706-78.983-134.37-223.77-90.497-268.94l49.172-50.631c14.683-15.119 37.934-13.851 51.09 2.7058l65.219 82.08c12.45 15.668 11.341 39.395-2.5451 53.692l-31.066 31.987c-3.9195 4.0366-4.9919 12.404-2.2345 17.138 0.8431 1.6499 1.4763 2.8879 2.5111 4.754 1.8087 3.2624 4.0469 6.9849 6.729 11.078 7.7541 11.837 17.455 24.147 29.209 36.25s23.723 22.1 35.243 30.099c3.985 2.7672 7.6097 5.079 10.788 6.9463 1.8196 1.0702 3.0254 1.726 3.5362 1.9821 5.6421 3.3373 13.788 2.2442 17.658-1.7393l31.066-31.988c13.88-14.292 36.941-15.428 52.146-2.6198l79.715 67.155c16.095 13.559 17.325 37.473 2.6276 52.606zm-289.68-212.96 31.066-31.987c3.2414-3.3373 3.5337-9.6072 0.58835-13.315l-65.219-82.08c-2.2215-2.7958-5.3446-2.966-7.7588-0.48012l-49.172 50.631c-27.517 28.333 24.122 158 90.497 226.34 66.368 68.337 192.31 121.51 219.82 93.181l49.171-50.63c2.4286-2.5014 2.2648-5.6889-0.46582-7.9899l-79.715-67.153c-3.5908-3.0256-9.6974-2.7249-12.932 0.60633l-31.066 31.987c-13.127 13.516-35.495 16.631-51.656 7.2676-3.7509-1.9301-9.7411-5.4824-17.374-10.782-13.015-9.0383-26.433-20.247-39.57-33.774-13.137-13.527-24.013-27.327-32.776-40.704-5.1023-7.7882-8.5318-13.911-10.41-17.77-9.3096-16.639-6.2127-39.773 6.9719-53.349z" fill="currentColor" stroke-width="12.078"></path>
            </svg>
	);
}

export default SvgPhone;