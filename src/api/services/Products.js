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

  addProductToBag: (product) => {
    const url = "boughtProducts";
    return axios.post(url, product);
  },

  getUserProducts: (id) => {
    const url = `boughtProducts/${id}`;
    return axios.get(url);
  },

  deleteProductFromBag: (id) => {
    const url = "boughtProducts/delete";
    return axios.delete(url, { data: id });
  },
};

export default ProductsServices;
