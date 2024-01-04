import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthService from './components/AuthService';
import EmployeeCard from './components/EmployeeCard';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeListPage from './components/EmployeeListPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthService />} />
      <Route path="/viewcard" element={<EmployeeCard />} />
      <Route path="/add" element={<AddEmployeeForm />} />
      <Route path="/list" element={<EmployeeListPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
