import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { BlogEntry } from '../types';
export declare class BlogService {
    private store;
    /**
     * Returns list of blog posts
     * @returns {Promise<BlogEntry[]>}
     */
    getBlogPosts(): Promise<BlogEntry[]>;
    /**
     * Returns a single blog post
     * @param {string} blogEntryId
     * @param {Promise<BlogEntry>}
     */
    getBlogPost(blogEntryId: string): Promise<BlogEntry>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
