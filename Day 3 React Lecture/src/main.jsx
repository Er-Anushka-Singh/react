import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Home from "./Topic-22 useParams/pages/Home.jsx";
import About from "./Topic-22 useParams/pages/About.jsx";
import Career from "./Topic-22 useParams/pages/Career.jsx";
import User from "./Topic-22 useParams/pages/User.jsx";
// Routing Configuration Setup

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"career",
                element:<Career/>
            },
            {
                path:"user/:id",
                element:<User/>
            }      
        ]
    }
])



createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

/*
import { createRoot } from 'react-dom/client'
import './index.css'
//import App,{h2} from './App.jsx'
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Topic-21 React Router Part-1/Home.jsx'

import NotFound from './Topic-21 React Router Part-1/NotFound.jsx'

import Seller from "./Topic-21 React Router Part-1/Seller.jsx"
import User from './Topic-21 React Router Part-1/User.jsx'
import Services from './Topic-21 React Router Part-1/Services.jsx'
import Error from './Topic-21 React Router Part-1/Error.jsx'
import Posts from './Topic-21 React Router Part-2/Posts.jsx'
import Todos from './Topic-21 React Router Part-2/Todos.jsx'
import Albums from './Topic-21 React Router Part-2/Albums.jsx'

/*
Router Configuration Setup


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
       {
        path:"posts",
        element:<Posts/>,
        shouldRevalidate: () => false ,
        loader: async ()=>{
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          return await response.json();
        }
      },
       {
        path:"todos",
        element:<Todos/>,
        shouldRevalidate: () => false ,
        loader: async ()=>{
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");
          return await response.json();
        }
      },
      {
         path:"albums",
        element:<Albums/>,
        shouldRevalidate: () => false ,
        loader: async ()=>{
          const response = await fetch("https://jsonplaceholder.typicode.com/albums");
          return await response.json();
        }
      },
       {
        path:"services",
        element:<Services/>,
        children:[
          {
          index:true,
          element:<h1>Welcome to service page </h1>
        },
        {
          path:"seller",
          element:<Seller/>
        },
         {
          path:"user",
          element:<User/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
      }
    ,
     {
          path:"*",
          element:<NotFound/>
        }
      ]
      }
]);

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={appRouter}/>
 
)

*/

/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App,{h2} from './App.jsx'
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Topic-21 React Router Part-1/Home.jsx'
import Contact from './Topic-21 React Router Part-1/Contact.jsx'
import NotFound from './Topic-21 React Router Part-1/NotFound.jsx'
import About from './Topic-21 React Router Part-1/About.jsx'
import Seller from "./Topic-21 React Router Part-1/Seller.jsx"
import User from './Topic-21 React Router Part-1/User.jsx'
import Services from './Topic-21 React Router Part-1/Services.jsx'
import Error from './Topic-21 React Router Part-1/Error.jsx'

/*
Router Configuration Setup


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
       {
        path:"about",
        element:<About/>
      },
       {
        path:"contact",
        element:<Contact/>
      },
       {
        path:"services",
        element:<Services/>,
        children:[
          {
          index:true,
          element:<h1>Welcome to service page </h1>
        },
        {
          path:"seller",
          element:<Seller/>
        },
         {
          path:"user",
          element:<User/>
        }
      ],
      errorElement:<Error/>
      }
    ],
    errorElement:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={appRouter}/>
 
)


*/



/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App,{h2} from './App.jsx'
import App from "./App.jsx"

console.log("App :" ,App())
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* {h1}
  {parent} }

{/* {h2} }
{/* {App()} --> This is older way }

{/* <App></App>  --> This is new to call jsx}

{/* <h1></h1> }

<App></App>

  </StrictMode>,
)

*/