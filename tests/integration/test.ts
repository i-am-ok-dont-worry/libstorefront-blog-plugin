import { LibStorefront } from '@grupakmk/libstorefront';
import {BlogPlugin} from "../../src";
import {BlogService} from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
  plugins: [
    BlogPlugin
  ]
}, 'https://api.liberty.s16.grupakmk.pl');

(async () => {
  const service = LSF.get(BlogService);
  const returns = await service.getBlogPost('1');
  debugger;

  const returns2 = await service.getBlogPosts();
  debugger;

  const returns3 = await service.getBlogCategories();
  debugger;

  const returns4 = await service.getBlogCategory(4);
  debugger;

  const returns5 = await service.getBlogPostsForCategory('4');
  debugger;
})();
