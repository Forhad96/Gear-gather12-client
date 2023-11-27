import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import Logo from "../../shared/Logo/Logo";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/axiosPublicApi/useAxiosPublic";
import imageUpload from "../../utils/imageUpload";
import toast from "react-hot-toast";
import { useState } from "react";
import usePostDataPublic from "../../hooks/axiosPublicApi/usePostDataPublic";

const Register = () => {
  const { user, createUser, updateUserProfile } = useAuth();
  const [error,setError] = useState()
  const {postData} = usePostDataPublic()
    const goTo = useNavigate();
  const axiosPublic = useAxiosPublic();
  console.log(user);

  // handle for register
//   const handleRegister = async (e) => {
//     try {
//       e.preventDefault();
//       const allInputData = new FormData(e.target);
//       const { name, email, password, photo } = Object.fromEntries(allInputData);

//       const imageUploadResponse = await imageUpload(photo);

//       if (imageUploadResponse) {
//         // create user function
//         const createResult = await createUser(email, password);
//         console.log(createResult.user);

// await updateUserProfile(name, imageUploadResponse);
//         // save user data to database
//         const user = {
//           name,
//           email,
//         };
//         const postRes = await axiosPublic.post("/users", user);
//         // const postRes =  await postData('/users',user)
//         console.log("Post res", postRes);

//         toast.success("Account created successful");
//         goTo("/");
//       }
//       // i want to react hot tost promise here when user create successful
      
//     } catch (err) {
//       console.log(err);
//       toast.error(err)
//     }
//   };
const handleRegister = async (e) => {
  try {
    e.preventDefault();

    const allInputData = new FormData(e.target);
    const { name, email, password, photo } = Object.fromEntries(allInputData);

    // Input validation (you can use a library like Yup for validation)
    if (!name || !email || !password || !photo) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const imageUploadResponse = await imageUpload(photo);

    if (imageUploadResponse) {
      const createResult = await createUser(email, password);
      console.log(createResult.user);

      await updateUserProfile(name, imageUploadResponse);

      const user = {
        name,
        email,
      };
      const postRes = await axiosPublic.post("/users", user);
      console.log("Post res", postRes);

      toast.success("Account created successfully");
      goTo("/");
    }
  } catch (error) {
    console.error(error);

    if (error.response && error.response.status === 409) {
      toast.error("Email is already in use. Please choose another.");
    } else {
      toast.error("Error creating account. Please try again.");
    }
  }
};
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <Logo></Logo>
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
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
          <div>
            <label className="font-medium">Photo Url</label>
            <input
              type="file"
              name="photo"
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

              {/* <span>Remember me</span> */}
            </div>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Register
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};
export default Register;
