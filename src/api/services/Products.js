import axios from "../http";

const ProductsServices = {
  getAllProducts: () => {
    const url = "products";
    return axios.get(url);
  },

  getPaginatedProducts: (page, limit) => {
    console.log(page, limit);
    const url = `products/pagination?page=${page}&limit=${limit}`;
    return axios.get(url);
  },

  getFilteredProducts: (category) => {
    const url = `products/filter?category=${category}`;
    return axios.get(url);
  },
};

export default ProductsServices;
