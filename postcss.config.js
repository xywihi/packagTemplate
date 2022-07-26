// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('autoprefixer')({ 
      overrideBrowserslist : ['last 100 versions']
     })
  ]
}
