import * as SvgIcons from '../../src/svg';

/**
 * Get icon component. Return component on icon-content-template.js
 *
 * @param {String} option Option.
 *
 * @return {*|SvgCheck} SVG Component.
 */
const getIconComponent = (option) => {
   const IconsMap = {
       give: SvgIcons.Give,
       volunteer: SvgIcons.Volunteer,
       help: SvgIcons.Help,
       email: SvgIcons.Email,
       location: SvgIcons.Location,
       phone: SvgIcons.Phone,
       chair: SvgIcons.Chair,
       bulb: SvgIcons.Bulb,
       palette: SvgIcons.Palette,
       model: SvgIcons.Model,
   };
   return option in IconsMap ? IconsMap[option] : IconsMap.give;
};

export default getIconComponent;
