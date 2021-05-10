import {BlogCategory, BlogEntry} from '../types';

export namespace BlogActions {
    const SN_BLOG = 'blog';

    export const SET_BLOG_POSTS = SN_BLOG + '/SET_POSTS';
    export const setBlogPosts = (posts: BlogEntry[]) => ({
        type: SET_BLOG_POSTS,
        payload: posts
    });

    export const SET_CURRENT = SN_BLOG + '/SET_CURRENT';
    export const setCurrent = (post: BlogEntry) => ({
        type: SET_CURRENT,
        payload: post
    });

    export const SET_CATEGORIES = SN_BLOG + '/SET_CATEGORIES';
    export const setCategories = (categories: BlogCategory[]) => ({
        type: SET_CATEGORIES,
        payload: categories
    });
}
