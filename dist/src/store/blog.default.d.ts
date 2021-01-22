import { BlogEntry } from '../types';
export declare const BlogDefaultState: {
    items: any[];
    current: any;
};
export interface BlogModuleState {
    items: BlogEntry[];
    current: BlogEntry;
}
