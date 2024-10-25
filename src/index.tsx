import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { Layout } from './Layout';
import FormEditor from './FormEditor';
import JsonEditor from './JsonEditor';


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/form-editor",
        element: <FormEditor />,
      },
      {
        path: "/json-editor",
        element: <JsonEditor />,
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
