import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import UserTable from "../components/UserTable";

export default function Dashboard() {
  return (
    <div>
      <Hero />
      <ProductList />
      <UserTable />
    </div>
  );
}
