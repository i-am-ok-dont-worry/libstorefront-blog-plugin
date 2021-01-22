import { HttpStatus, IOCContainer, Logger } from '@grupakmk/libstorefront';
import { BlogDao } from '../dao';
import { BlogActions } from './blog.actions';

export namespace BlogThunks {

    export const getBlogPosts = () => async (dispatch, getState) => {
        try {
            const response = await IOCContainer.get(BlogDao).getBlogEntries();

            if (response && response.code === HttpStatus.OK && response.result) {
                const items = response.result;
                await dispatch(BlogActions.setBlogPosts(items));

                return items;
            }
        } catch (e) {
            Logger.error('Cannot fetch blog posts', 'blog-plugin', e);
        }
    };

    export const getSingleBlogPost = (blogEntryId) => async (dispatch, getState) => {
      try {
          const response = await IOCContainer.get(BlogDao).getBlogEntry(blogEntryId);

          if (response && response.code === HttpStatus.OK && response.result) {
              await dispatch(BlogActions.setCurrent(response.result));

              return response.result;
          }
      } catch (e) {
          Logger.error('Cannot fetch blog post', 'blog-plugin', e);
      }
    };
}
