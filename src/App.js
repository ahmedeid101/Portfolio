import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';

function Layout({ theme, toggleTheme }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollRestoration />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout theme={theme} toggleTheme={toggleTheme} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "pricing",
          element: <PricingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;