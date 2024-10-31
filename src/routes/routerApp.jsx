import Home from '../pages/Home'
import ErrorNotFound from '../pages/ErrorNotFound'
import Dashboard from '../pages/Dashboard'
import { Children } from 'react'
import About from '../pages/section/About'
import Services from '../pages/section/Services'
import Contact from '../pages/section/Contact'

export let routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorNotFound />
    },
    {
        path: '/dashboard/',
        element: <Dashboard />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'contact',
                element: <Contact />
            }


        ]
    }
]