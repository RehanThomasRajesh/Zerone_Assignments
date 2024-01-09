import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeView from "./components/EmployeeView";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EmployeeView/>}></Route>
        <Route path="add" element={<EmployeeAdd />}></Route>
        <Route path="search" element={<EmployeeSearch />}></Route>
        <Route path="list" element={<EmployeeList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
