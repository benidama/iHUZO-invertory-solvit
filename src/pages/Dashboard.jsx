import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import UserTable from "../components/UserTable";

export default function Dashboard() {
  return (
    <div className="font-poppins">
      <Hero />
      <ProductList />
      <UserTable />
    </div>
  );
}
