import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticationForm from './components/AuthenticationForm';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
   <AuthenticationForm></AuthenticationForm>
  );
}

export default App;
