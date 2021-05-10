import { LibStorefront } from '@grupakmk/libstorefront';
import {BlogPlugin} from "../../src";
import {BlogService} from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
  api: {
    url: 'https://api.libertymotors.s16.grupakmk.pl'
  },
  plugins: [
    BlogPlugin
  ],
  default_website_id: '1',
  default_store_code: 'lms_pl',
  defaultStoreId: '1',
  websites: [{
    website_id: '1',
    stores: [{
      general: {
        website_code: 'lm',
        store_code: 'lms_pl',
        store_id: '1',
        default_country: 'pl',
        elasticsearch: {
          host: '/api/catalog',
          index: 'vue_storefront_catalog'
        }
      }
    }]
  }],
});

(async () => {
  const service = LSF.get(BlogService);
  const returns3 = await service.getBlogCategories();
  const blogReduxState = await LSF.getState().blog;
})();
