import { LibStorefront } from '@grupakmk/libstorefront';
import {BlogPlugin} from "../../src";
import {BlogService} from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        BlogPlugin
    ]
}, 'http://localhost:9001');

(async () => {
    const service = LSF.get(BlogService);
    const returns = await service.getBlogPost('1');
    debugger;
})();
