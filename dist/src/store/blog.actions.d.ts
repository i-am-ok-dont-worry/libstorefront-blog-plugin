import { BlogEntry } from '../types';
export declare namespace BlogActions {
    const SET_BLOG_POSTS: string;
    const setBlogPosts: (posts: BlogEntry[]) => {
        type: string;
        payload: BlogEntry[];
    };
    const SET_CURRENT: string;
    const setCurrent: (post: BlogEntry) => {
        type: string;
        payload: BlogEntry;
    };
}
