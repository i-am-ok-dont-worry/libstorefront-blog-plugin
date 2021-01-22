import { BlogEntry } from '../types';

export const BlogDefaultState = {
    items: [],
    current: null
}

export interface BlogModuleState {
    items: BlogEntry[],
    current: BlogEntry
}
