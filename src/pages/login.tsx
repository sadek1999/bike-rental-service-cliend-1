import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/features/auth/atuhApi";
import { jwtDecode } from "jwt-decode";


interface TUser {
  id: string;
  name: string;
  role: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const decodedToken: TUser = jwtDecode(res.data.accessToken);

      // Save user data in Redux
      dispatch(setUser({ user: decodedToken, token: res.data.accessToken }));

      toast.success("Login successful!", { id: toastId });

      // Redirect based on role or to home page
      if (decodedToken.role === "admin") {
        navigate(`/admin`);
      } else {
        navigate(`/`);
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Login
          </button>
        </form>

        {/* Reset Password Link */}
        <div className="text-center mt-4">
          <a href="/reset-password" className="text-green-500 text-sm hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
