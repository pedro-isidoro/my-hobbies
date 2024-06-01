import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/home-page/homePage.jsx';
import { MoviesAndSeries } from './components/pages/movies-series/MoviesAndSeries.jsx';
import { BooksRead } from './components/pages/books/booksRead.jsx';
import { Musician } from './components/pages/music/Musician.jsx';
import { Cook } from './components/pages/kitchen/cook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "filmes-e-series",
        element: <MoviesAndSeries />,
      },
      {
        path: "livros-e-hqs",
        element: <BooksRead />,
      },
      {
        path: "musica",
        element: <Musician />,
      },
      {
        path: "cozinha",
        element: <Cook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);
