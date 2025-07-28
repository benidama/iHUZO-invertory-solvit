import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Assignments from "./pages/Assignments";
import NoPage from "./pages/NoPage";
import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
