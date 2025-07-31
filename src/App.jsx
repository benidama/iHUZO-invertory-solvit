import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import NoPage from "./pages/NoPage";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ProductProvider } from "./providers/ProductProvider";
import { UsersProvider } from "./providers/UsersProvider";

export default function App() {
  return (
    <UsersProvider>
      <ProductProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigation />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Categories />} />
                <Route path="users" element={<Users />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ProductProvider>
    </UsersProvider>
  );
}
