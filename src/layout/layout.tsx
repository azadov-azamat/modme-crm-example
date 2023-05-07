import {LayoutProps} from "./layout.props";
import Sidebar from "../components/sidebar";
import NavbarComponent from "../components/navbar";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen flex flex-col'}>
            <NavbarComponent/>
            <div className="flex w-full h-screen">
                <Sidebar/>
                <main className={'md:ml-40 ml-24 sm:mt-20 mt-16 transition-transform duration-500 w-full px-4 pt-4 h-[1220px]'}>{children}</main>
            </div>
            {/*<FooterComponent/>*/}
        </div>
    );
}

export default Layout;