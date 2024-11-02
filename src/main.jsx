import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './Components/Root';
import Error from './Components/Error/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DeshBoard from './Components/DeshBrod/DeshBoard';
import Home from './Components/Home/Home';
import BookDetail from './Components/BookDetail/BookDetail';
import BookList from './Components/BookList/BookList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'list_books',
        element: <BookList></BookList>,
      },
      {
        path: '/dashboard',
        element: <DeshBoard></DeshBoard>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
