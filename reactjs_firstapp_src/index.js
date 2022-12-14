import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button'
import reportWebVitals from './reportWebVitals';
import Employee from './Employee'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title="StarHealth"  />
    <Button bname="Add"></Button>
   <Button  bname="Update"></Button>
 
  <Employee ename="javeed" salary="50000"></Employee>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
