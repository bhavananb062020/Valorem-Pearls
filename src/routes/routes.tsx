import { Paths } from "@/configs/site.config";
import { lazy, type FC, type LazyExoticComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

/********************************** Public Routes *****************************************/
const Home: LazyExoticComponent<FC> = lazy(() => import("@/pages/home"));
const Products: LazyExoticComponent<FC> = lazy(() => import("@/pages/products"));
const ProducctDetails: LazyExoticComponent<FC> = lazy(() => import("@/pages/product-details"));

// Auth Routes
const UserLogin: LazyExoticComponent<FC> = lazy(() => import("@/pages/user-login"));
const UserRegister: LazyExoticComponent<FC> = lazy(() => import("@pages/user-register"));

// Handlers
const NotFound: LazyExoticComponent<FC> = lazy(() => import("@/pages/not-found"));
// const RootErrorBoundary: LazyExoticComponent<FC> = lazy(() => import("@/pages/root-error-boundary"));

/********************************** Private Routes ******************************************/
const AuthLayout: LazyExoticComponent<FC> = lazy(() => import("@/pages/layouts/auth-layout"));

const UserOrders: LazyExoticComponent<FC> = lazy(() => import("@/pages/user-orders"));
const UserAccount: LazyExoticComponent<FC> = lazy(() => import("@/pages/user-account"));
const WishList: LazyExoticComponent<FC> = lazy(() => import("@/pages/whish-list"));
const Cart: LazyExoticComponent<FC> = lazy(() => import("@/pages/cart"));

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={Paths.PRODUCTS} element={<Products />} />
        <Route path={Paths.PRODUCT_DETAILS} element={<ProducctDetails />} />

        <Route path={Paths.USER_LOGIN} element={<UserLogin />} />
        <Route path={Paths.USER_REGISTER} element={<UserRegister />} />

        <Route element={<AuthLayout />}>
          <Route path={Paths.USER_ORDERS} element={<UserOrders />} />
          <Route path={Paths.USER_ACCOUNT} element={<UserAccount />} />
          <Route path={Paths.WISH_LIST} element={<WishList />} />
          <Route path={Paths.CART} element={<Cart />} />
        </Route>

        <Route path={Paths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>)
}

export default AppRoutes;