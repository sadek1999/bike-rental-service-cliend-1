
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

      // Redirect based on role
      navigate(`/${decodedToken.role}/dashboard`);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Reset Password Link */}
        <div className="text-center">
          <a href="/reset-password" className="text-sm text-primary">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
