import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Auth/Layout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/login" />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
