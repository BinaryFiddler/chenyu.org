import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '51005d1e2d1b447caa38fde39ee83522',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Finding Chenyu',
  domain: 'chenyuh.org',
  author: 'Chenyu Huang',

  // open graph metadata (optional)
  description: 'Finding Chenyu',

  // social usernames (optional)
  twitter: 'chenyu_huang',
  github: 'chenyu-h',
  linkedin: 'chenyu-h-8228a584',
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UCbaPf-YaxS_HtbMkjGnQDMg', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Now',
      pageId: 'a4a2367340314a7f80a19d1e12fc90b1'
    },
    {
      title: 'Blog',
      pageId: '51005d1e2d1b447caa38fde39ee83522'
    },
    {
      title: 'About',
      pageId: 'c7923d588bc94f68bbb9931e1e66f8af'
    },
    {
      title: 'Hobbies',
      pageId: '83d62afcc93f427d86b88b56cec43271'
    }
  ]
})
