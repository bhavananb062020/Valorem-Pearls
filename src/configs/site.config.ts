export type SiteConfig = typeof siteConfig;

export enum Paths {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:productId",
  CART = "/cart",
  WISH_LIST = "/wish-list",
  USER_ACCOUNT = "/user-account",
  USER_LOGIN = "/user-login",
  USER_REGISTER = "/user-register",
  USER_ORDERS = "/user-orders",
  NOT_FOUND = "/*",
}

export const siteConfig = {
  name: "Valorem Pearls",
}
