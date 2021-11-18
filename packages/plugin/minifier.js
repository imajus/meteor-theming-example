global.Theme = {
  color: '#ff0000', // red
};

class CssMinifier {

  processFilesForBundle(files, options) {
    for (const file of files) {
      const data = file.getContentsAsString().replace(/dummy/, global.Theme.color);
      file.addStylesheet({ data });
    }
  }
  
}

Plugin.registerMinifier({
  extensions: ['css']
}, () => new CssMinifier());