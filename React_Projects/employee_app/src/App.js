import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeView from "./components/EmployeeView";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="add" element={<EmployeeAdd />}></Route>
        <Route path="search" element={<EmployeeSearch />}></Route>
        <Route path="view" element={<EmployeeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
