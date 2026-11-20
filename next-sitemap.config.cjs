/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tiburonmartillo.github.io',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
  trailingSlash: true,
  exclude: ['/404/'],
  changefreq: 'monthly',
  priority: 0.7,
};
