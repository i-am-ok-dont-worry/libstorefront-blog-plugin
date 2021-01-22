export declare namespace BlogThunks {
    const getBlogPosts: () => (dispatch: any, getState: any) => Promise<any>;
    const getSingleBlogPost: (blogEntryId: any) => (dispatch: any, getState: any) => Promise<any>;
}
