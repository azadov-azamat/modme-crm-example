import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './helpers/translation/i18n'

import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const app = (
    <Provider store={store}>
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
    </Provider>
)

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(app)
