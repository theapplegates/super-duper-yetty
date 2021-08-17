const path = require("path");

module.exports = function imgSize(src, size = '480', format = 'jpg') {
  const extension = path.extname(src);
  const name = path.basename(src, extension);
  /**
   * A path directory for the <img src> attribute
   * e.g. /img/ for <img src="/img/MY_IMAGE.jpg">
   */
  const dirname = "/assets/images/";
  return `${dirname}${name}-${size}.${format}`;
};
