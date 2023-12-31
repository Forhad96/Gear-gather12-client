import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo/Logo";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const goTo = useNavigate()
  const location = useLocation()
  console.log(location);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const allInputData = new FormData(e.target);
      const { email, password } = Object.fromEntries(allInputData);
      console.log(email, password);


      const res = await signIn(email,password)
      console.log(res);
      if(res){
        toast.success("Login successful")
        goTo(`${location.state ? location.state : "/"}`);

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <Logo></Logo>
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <a className="text-center btn btn-link">Forgot password?</a>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium btn btn-primary active:bg-primary rounded-lg duration-150">
            Sign in
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-center">
          Don&rsquo;t have an account?
          <Link to="/register" className="font-medium btn btn-link">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};
export default Login;
