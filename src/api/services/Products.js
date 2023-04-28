import axios from "../http";

const ProductsServices = {
  getAllProducts: () => {
    const url = "products";
    return axios.get(url);
  },

  getPaginatedProducts: (page, limit) => {
    const url = `products/pagination?page=${page}&limit=${limit}`;
    return axios.get(url);
  },

  getFilteredProducts: (category) => {
    const url = `products/filter?category=${category}`;
    return axios.get(url);
  },

  getProductById: (id) => {
    const url = `/products/${id}`;
    return axios.get(url);
  },

  addProductToBag: (product) => {
    const url = "bagProducts";
    return axios.post(url, product);
  },

  getUserProducts: (id) => {
    const url = `bagProducts/${id}`;
    return axios.get(url);
  },

  deleteProductFromBag: (id) => {
    const url = "bagProducts/delete";
    return axios.delete(url, { data: id });
  },

  deleteAllProductsFromBag: (product) => {
    const url = "bagProducts";
    return axios.delete(url, { data: product });
  },

  increaseUserProduct: (product) => {
    const url = "bagProducts/increase";
    return axios.put(url, product);
  },
};

export default ProductsServices;
