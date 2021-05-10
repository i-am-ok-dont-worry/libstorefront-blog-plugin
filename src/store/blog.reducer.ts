import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { BlogDefaultState, BlogModuleState } from './blog.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { BlogActions } from './blog.actions';

export const blogReducer: Reducer<BlogModuleState, AnyAction> = (state: BlogModuleState, action: AnyAction) => {
    switch (action.type) {
        case BlogActions.SET_BLOG_POSTS: {
            return { ...state, items: action.payload };
        }
        case BlogActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        case BlogActions.SET_CATEGORIES: {
            return { ...state, categories: action.payload };
        }
        default: return state || BlogDefaultState;
    }
}
