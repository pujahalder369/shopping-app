import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginHeader from "../../components/LoginHeader";
import { useAuth } from "../../context/auth";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email: "user@test.com" });
        navigate("/", { replace: true });
    };

    return (
        <>
            <LoginHeader />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className='bg-white p-8 rounded w-full max-w-md shadow-lg'>
                    <h2 className='text-3xl font-bold text-center mb-4 text-[#9a53d0]'>Login</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-lg font-medium mb-1">
                                Enter Email/Mobile Number
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9a53d0]"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Enter your password"
                                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9a53d0]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9a53d0] text-white text-lg py-2 rounded hover:bg-[#793DA6] transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}

export default LoginPage;