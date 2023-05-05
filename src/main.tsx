import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const app = (
    <>
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
        />
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </>
)

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)
