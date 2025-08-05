import { useState } from "react";
import { UsersContext } from "../contexts/UsersContext";

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@huza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
      password: "Estote1",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@huza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
      password: "Estote2",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@huza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago",
      password: "Estote3",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@huza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
      password: "Estote4",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@huza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "6 hours ago",
      password: "Estote5",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.a@huza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago",
      password: "Estote6",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "r.taylor@huza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago",
      password: "Estote7",
    },
    {
      id: 8,
      name: "Christopher Lee",
      email: "c.lee@huza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "2 hours ago",
      password: "Estote8",
    },
    {
      id: 9,
      name: "Amanda White",
      email: "a.white@huza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
      password: "Estote9",
    },
    {
      id: 10,
      name: "James Miller",
      email: "j.miller@huza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 week ago",
      password: "Estote10",
    },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
