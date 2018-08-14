const _ = require('lodash');

module.exports = ({
  variants = {},
  gradients = {},
} = {}) => ({ e, addUtilities }) => {
  addUtilities(
    {
      ...Object.assign(
        {},
        ..._.map(gradients, (colors, name) => {
          if (!_.isArray(colors)) {
            colors = ['transparent', colors];
          }
          return {
            [`.${e(`bg-gradient-to-top-${name}`)}`]: { backgroundImage: `linear-gradient(to top, ${colors.join(', ')})` },
            [`.${e(`bg-gradient-to-right-${name}`)}`]: { backgroundImage: `linear-gradient(to right, ${colors.join(', ')})` },
            [`.${e(`bg-gradient-to-bottom-${name}`)}`]: { backgroundImage: `linear-gradient(to bottom, ${colors.join(', ')})` },
            [`.${e(`bg-gradient-to-left-${name}`)}`]: { backgroundImage: `linear-gradient(to left, ${colors.join(', ')})` },
          };
        }),
      ),
    },
    variants,
  );
};
