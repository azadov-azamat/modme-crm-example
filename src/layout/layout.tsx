import {LayoutProps} from "./layout.props";
import Sidebar from "../components/sidebar";
import NavbarComponent from "../components/navbar";
import FooterComponent from "../components/footer";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen flex flex-col'}>
            <NavbarComponent/>
            <div className="flex w-full h-screen">
                <Sidebar/>
                <main className={'sm:ml-32 mt-24 transition-transform duration-500 h-[1220px]'}>{children}</main>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default Layout;