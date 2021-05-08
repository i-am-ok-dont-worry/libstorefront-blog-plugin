# Blog plugin
Extension that allows to display blog posts from Magento.

## Usage
To use plugin add plugin dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        BlogPlugin
    ]
});
```

and get `BlogService` registered by lib:
```javascript
LSF.get(BlogService)
```

## Service
Plugin registers service `BlogService` which serves as a plugin entry point.
Service exposes methods:
* `getBlogPosts (): Promise<BlogEntry[]>` - Returns list blog posts
* `getBlogPost (blogEntryId: string)` - Returns a single blog post
* `getBlogCategories ()` - Returns a list of blog post categories
* `getBlogCategory (blogCategoryId: string)` - Returns a single blog post category
* `getBlogPostsForCategory (blogCategoryId: string)` - Returns posts list for a category

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin can be tested in isolation. To run plugin integration test:
```shell script
npm run test:integration
```
