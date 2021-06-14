const urlFor = require('./src/utils/imageUrl');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');

  // sanity image plugin
  eleventyConfig.addShortcode('imageUrlFor', (image, width = '400') => {
    return urlFor(image).width(width).auto('format');
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
