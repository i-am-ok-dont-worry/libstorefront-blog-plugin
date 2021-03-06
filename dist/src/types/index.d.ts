export interface BlogEntry {
    id: null;
    type: string;
    status: string;
    author_id: number;
    name: string;
    short_content: string;
    content: string;
    url_key: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    featured_image: string;
    featured_alt: string;
    created_at: string;
    pinned: string;
    category_ids: string;
    store_ids: string;
    tag_ids: string;
    product_ids: string;
    related_products: string;
    extension_attributes: Record<string, any>;
}
