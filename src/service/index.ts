import { injectable, inject } from 'inversify';
import {
  AbstractStore,
  LibstorefrontInnerState
} from '@grupakmk/libstorefront';
import {
  BlogEntry,
  BlogCategory
} from '../types';
import { BlogThunks } from '../store/blog.thunks';

@injectable()
export class BlogService {
  /**
   * Returns list of blog posts
   * @returns {Promise<BlogEntry[]>}
   */
  public getBlogPosts (): Promise<BlogEntry[]> {
    return this.store.dispatch(BlogThunks.getBlogPosts());
  }

  /**
   * Returns a single blog post
   * @param {string} blogEntryId
   * @param {Promise<BlogEntry>}
   */
  public getBlogPost (blogEntryId: string): Promise<BlogEntry> {
    return this.store.dispatch(BlogThunks.getSingleBlogPost(blogEntryId));
  }

  /**
   * Returns list of blog post categories
   * @returns {Promise<BlogCategory[]>}
   */
  public getBlogCategories (): Promise<BlogCategory[]> {
    return this.store.dispatch(BlogThunks.getCategories());
  }

  /**
   * Returns a single blog category
   * @param {string} blogCategoryId
   * @param {Promise<BlogCategory>}
   */
  public getBlogCategory (blogCategoryId: string): Promise<BlogCategory> {
    return this.store.dispatch(BlogThunks.getSingleCategory(blogCategoryId));
  }

  /**
   * Returns blog posts for a category
   * @param {string} blogCategoryId
   * @param {Promise<BlogEntry[]>}
   */
  public getBlogPostsForCategory (blogCategoryId: string, updateState?: boolean): Promise<BlogEntry[]> {
    return this.store.dispatch(BlogThunks.getPostsForCategory(blogCategoryId, updateState));
  }

  public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
