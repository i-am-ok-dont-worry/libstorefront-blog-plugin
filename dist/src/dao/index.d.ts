import { Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class BlogDao {
    private taskQueue;
    getBlogEntries(): Promise<Task>;
    getBlogEntry(blogEntryId: any): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
