import {BlogCategory, BlogEntry} from '../types';

export const BlogDefaultState = {
    items: [],
    current: null,
    categories: []
};

export interface BlogModuleState {
    items: BlogEntry[],
    current: BlogEntry,
    categories: BlogCategory[]
}
