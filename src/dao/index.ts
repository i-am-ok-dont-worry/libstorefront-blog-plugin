import { injectable, inject } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class BlogDao {

    public getBlogEntries (): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/blog'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getBlogEntry (blogEntryId): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/blog/' + blogEntryId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
