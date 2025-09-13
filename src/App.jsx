import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ProductProvider } from "./providers/ProductProvider";
import { UsersProvider } from "./providers/UsersProvider";
import { AuthUsersProvider } from "./contexts/AuthUsersProvider";
import { CategoryProvider } from "./contexts/CategoryContext";
import { SettingsProvider } from "./contexts/SettingsProvider";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <SettingsProvider>
      <LanguageProvider>
        <UsersProvider>
          <CategoryProvider>
            <AuthUsersProvider>
              <ProductProvider>
                <ThemeProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="login" element={<Login />} />
                      <Route path="/" element={<Navigation />}>
                        <Route index element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="users" element={<Users />} />
                        <Route path="*" element={<NoPage />} />                       
                      </Route>
                    </Routes>
                  </BrowserRouter>
                </ThemeProvider>
              </ProductProvider>
            </AuthUsersProvider>
          </CategoryProvider>
        </UsersProvider>
      </LanguageProvider>
    </SettingsProvider>
  );
}
