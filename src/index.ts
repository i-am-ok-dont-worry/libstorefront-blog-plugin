import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { BlogDao } from './dao';
import { BlogService } from './service';
import { blogReducer } from './store/blog.reducer';
import { BlogDefaultState } from './store/blog.default';

/**
 * Plugin provides support for Magento blog
 */
export const BlogPlugin = ((libstorefront: LibStorefront) => {
  libstorefront.getIOCContainer().bind<BlogDao>(BlogDao).to(BlogDao);
  libstorefront.getIOCContainer().bind<BlogService>(BlogService).to(BlogService);
  libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
    lsf.registerModule(createLibstorefrontModule('blog', blogReducer, BlogDefaultState));
  });
}) as LibstorefrontPlugin;
