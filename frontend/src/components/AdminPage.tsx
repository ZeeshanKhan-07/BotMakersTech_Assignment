import { useEffect, useState } from "react";
import { getAdminContent } from "../services/authService";

const AdminPage = () => {

  const [message, setMessage] = useState("");

  useEffect(() => {

    const load = async () => {
      try {
        const res = await getAdminContent();
        setMessage(res);
      } catch {
        setMessage("Admin access required");
      }
    };

    load();

  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-96 text-center">

        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>

        <p className="text-gray-700">{message}</p>

      </div>

    </div>
  );
};

export default AdminPage;