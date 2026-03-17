import { Link } from "react-router-dom";

const LoginHeader = () => {

    return (
        <>
            <header className="fixed top-0 left-0 w-full h-20 py-2 bg-[#F2FEFE] shadow-md z-50">
                <div className="flex items-center justify-between h-16 px-3 sm:px-6 lg:px-8">
                    <Link to={'/'}>
                        <img
                            src="/images/logo-img.png"
                            alt="logo"
                            className="h-20"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="flex items-center gap-4">
                        <Link to={'/login'}>
                            <div className="flex items-center cursor-pointer gap-2">
                                <span className="text-center text-lg pt-1">
                                    <i className="fa-regular fa-user"></i>
                                </span>
                                <p className="text-lg font-bold">Login</p>
                            </div>
                        </Link>
                    </div>
                </div >
            </header >
        </>
    );
};

export default LoginHeader;
