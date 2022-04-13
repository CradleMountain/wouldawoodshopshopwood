import axios from "axios";
import "regenerator-runtime/runtime";

const apiHelpers = {
  get: (endpoint = "") => {
    return axios
      .get(`/products${endpoint}`)
      .catch((err) => {
        console.error(err);
      });
  },
  postCart: (cart) => {
    console.log(cart);
    axios({
      method: "POST",
      url: "/cart",
      params: { sku_id: cart.sku_id },
      data: {
        sku_id: cart.sku_id,
        quantity: cart.purchaseQuantity,
      },
    });
  },
  getCart: () => {
    return axios({
      method: "GET",
      url: "/cart",
    });
  },
  getRatings: (id) => {
    return axios({
      method: 'GET',
      url: '/reviews/meta',
      params: {
        product_id: id
      }
    })
      .then(({data}) => {
        return data.ratings;
      })
      .catch (err => {
        console.error(err);
      });
  }
};

export default apiHelpers;
