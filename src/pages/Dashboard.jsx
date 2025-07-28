import AddedProducts from "../components/AddedProducts";
import Hero from "../components/Hero";
import UserTable from "../components/UserTable";
const Dashboard = () => {
  return (
    <div className="h-full">
      <Hero />
      <AddedProducts />
      <UserTable />
    </div>
  );
};

export default Dashboard;
