import { useActiveCategory } from "./useActiveCategory";

type Crumb = {
    name: string
    path: string
}

export function useBreadCrumbs(): Crumb[] {
    const { parentCategory, childCategory } = useActiveCategory();

    return [
        { name: 'Главная', path: '/' },

        ...(parentCategory ? [{
            name: parentCategory?.name,
            path: `/catalog/${parentCategory?.slug}`
        }] : []),

        ...(childCategory ? [{
            name: childCategory.name,
            path: `/catalog/${parentCategory!.slug}/${childCategory.slug}`
        }] : []),
    ];
}