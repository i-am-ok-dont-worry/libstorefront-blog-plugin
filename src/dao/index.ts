import { injectable, inject } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class BlogDao {
  public getBlogEntries (): Promise<Task> {
    return this.taskQueue.execute({
      url: URLTransform.getAbsoluteApiUrl('/api/vendor/blog?storeCode=all'),
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
      url: URLTransform.getAbsoluteApiUrl(`/api/vendor/blog/${blogEntryId}?storeCode=all`),
      payload: {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      },
      silent: true
    });
  }

  public getBlogCategory (blogCategoryId): Promise<Task> {
    return this.taskQueue.execute({
      url: URLTransform.getAbsoluteApiUrl(`/api/vendor/blog/category/${blogCategoryId}?storeCode=all`),
      payload: {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      },
      silent: true
    });
  }

  public getBlogCategories (): Promise<Task> {
    return this.taskQueue.execute({
      url: URLTransform.getAbsoluteApiUrl(`/api/vendor/blog/category/list?storeCode=all`),
      payload: {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      },
      silent: true
    });
  }

  public getPostsForCategory (blogCategoryId): Promise<Task> {
    return this.taskQueue.execute({
      url: URLTransform.getAbsoluteApiUrl(`/api/vendor/blog/post/category/${blogCategoryId}?storeCode=all`),
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
