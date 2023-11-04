import { basedUrl } from "../Network/Network";

export const createProductUrl = basedUrl + '/products/create-product'

export const getProductsUrl = basedUrl + '/products/get-all-product'

export const getSingelProductUrl = (id) => basedUrl + `/products/get-singel/${id}`

export const updateProductsUrl = (id) => basedUrl + `/products/update-product/${id}`

export const deleteProductUrl = (id) => basedUrl + `/products/delete-product/${id}`

export const getProductByCategoryUrl = (category) => basedUrl + `/products/get-product-by-categories-id/${category}`

export const getProductBySubCategoryUrl = (subcategory) => basedUrl + `/products/get-product-by-sub-categories-id/${subcategory}`

// ======= category

export const createCategoryUrl = basedUrl + '/products/create-categories'

export const createSubCategoryUrl = basedUrl + `/products/create-subcategories`

export const getAllCategoryUrl = basedUrl + '/products/get-all-categories'

export const getAllCategorySubCategoryUrl = basedUrl + '/products/get-all-categories-with-subcategories'

export const getSingelCategoryUrl = (id) => basedUrl + `/products/get-singel-categories/${id}`

export const updateCategoryUrl = (id) => basedUrl + `/products/update-categories/${id}`

export const deleteCategoryUrl = (id) => basedUrl + `/products/delete-categories/${id}`

export const deleteSubCategoryUrl = (id) => basedUrl + `/products/delete-subcategories/${id}`



// ===== Add to cart =======

export const addToCartUrl = (id) => basedUrl + `/cart/add-to-cart/${id}`


export const getCartUrl = (email) => basedUrl + `/cart/get-cart/${email}`


export const removeFromCartUrl = (id) => basedUrl + `/cart/remove-from-cart/${id}`


export const updateCartUrl = (id) => basedUrl + `/cart/update-cart/${id}`