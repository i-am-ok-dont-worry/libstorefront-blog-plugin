import { injectable, inject } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class BlogDao {
  public getBlogEntries (): Promise<Task> {
    return this.taskQueue.execute({
      url: URLTransform.getMultistoreApiUrlNext('/api/vendor/blog'),
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
      url: URLTransform.getMultistoreApiUrlNext(`/api/vendor/blog/${blogEntryId}`),
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
      url: URLTransform.getMultistoreApiUrlNext(`/api/vendor/blog/category/${blogCategoryId}`),
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
      url: URLTransform.getMultistoreApiUrlNext(`/api/vendor/blog/category/list`),
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
      url: URLTransform.getMultistoreApiUrlNext(`/api/vendor/blog/post/category/${blogCategoryId}`),
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
