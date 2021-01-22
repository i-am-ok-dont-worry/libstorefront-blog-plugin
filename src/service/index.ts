import { injectable, inject } from 'inversify';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { BlogEntry } from '../types';
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

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
