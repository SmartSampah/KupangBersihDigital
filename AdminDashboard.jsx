import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-lime-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-900">Dashboard Admin</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Laporan Masuk</h2>
          <p className="text-4xl font-bold text-green-700">12</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Dalam Proses</h2>
          <p className="text-4xl font-bold text-yellow-600">5</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Selesai</h2>
          <p className="text-4xl font-bold text-blue-600">18</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2 text-green-800">Jadwal Pengangkutan</h2>
        <ul className="bg-white p-4 rounded-xl shadow space-y-2">
          <li className="flex justify-between">Senin <span>08:00 - 12:00</span></li>
          <li className="flex justify-between">Rabu <span>08:00 - 12:00</span></li>
          <li className="flex justify-between">Jumat <span>08:00 - 12:00</span></li>
        </ul>
      </div>
    </div>
  );
}
