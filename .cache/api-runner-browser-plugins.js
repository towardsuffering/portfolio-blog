module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"caRot","short_name":"Landing Page","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"./content/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"2370be03184fff6544a7a5f80a14ff12"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"googleAnalytics":{"trackingId":"UA-197563814-1","cookieName":"gatsby-gdpr-google-analytics","anonymize":true},"environments":["production","development"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
