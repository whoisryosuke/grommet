const { mergeWith } = require('lodash/fp');
const fs = require('fs-extra');

let custom = {};
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js');

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom');
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    );
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Grommet',
    description: 'focus on the essential experience',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/photoroom/Development/References/grommet/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Grommet',
        description: 'focus on the essential experience',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/photoroom/Development/References/grommet',
          templates:
            '/Users/photoroom/Development/References/grommet/node_modules/docz-core/dist/templates',
          docz: '/Users/photoroom/Development/References/grommet/.docz',
          cache: '/Users/photoroom/Development/References/grommet/.docz/.cache',
          app: '/Users/photoroom/Development/References/grommet/.docz/app',
          appPackageJson:
            '/Users/photoroom/Development/References/grommet/package.json',
          gatsbyConfig:
            '/Users/photoroom/Development/References/grommet/gatsby-config.js',
          gatsbyBrowser:
            '/Users/photoroom/Development/References/grommet/gatsby-browser.js',
          gatsbyNode:
            '/Users/photoroom/Development/References/grommet/gatsby-node.js',
          gatsbySSR:
            '/Users/photoroom/Development/References/grommet/gatsby-ssr.js',
          importsJs:
            '/Users/photoroom/Development/References/grommet/.docz/app/imports.js',
          rootJs:
            '/Users/photoroom/Development/References/grommet/.docz/app/root.jsx',
          indexJs:
            '/Users/photoroom/Development/References/grommet/.docz/app/index.jsx',
          indexHtml:
            '/Users/photoroom/Development/References/grommet/.docz/app/index.html',
          db:
            '/Users/photoroom/Development/References/grommet/.docz/app/db.json',
        },
      },
    },
  ],
};

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});

module.exports = merge(config, custom);
