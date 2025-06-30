import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const SignInField = () => {
  const submit = () => {};
  return (
    <div className="w-[400px] p-4 flex flex-col gap-6">
      <div>
        <Link href={"/"}>
          <button className=" p-2 border border-[#E4E4E7] rounded-md hover:bg-[#E4E4E7] cursor-pointer">
            <ChevronLeft />
          </button>
        </Link>
      </div>
      <div>
        <p className="text-2xl font-semibold text-[#09090B]">Log in </p>
        <p className="text-[#71717A] text-[16px]">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="w-full text-[#71717A] px-3 py-2 border border-[#E4E4E7] focus:outline-0 rounded-md"
          placeholder="Enter your email address"
        />
        <input
          type="text"
          className="w-full text-[#71717A] px-3 py-2 border border-[#E4E4E7] focus:outline-0 rounded-md"
          placeholder="Password"
        />
        <p className="cursor-pointer">Forgot password ?</p>
      </div>
      <Link href={"/"}>
        <button
          className="py-2 border rounded-md bg-[#9d9da0] text-white cursor-pointer w-full"
          onClick={submit}
        >
          Let's Go
        </button>
      </Link>
      <p className="text-[#71717A] text-center">
        Already have an account?
        <span className="text-[#2563EB] cursor-pointer"> Log in</span>
      </p>
    </div>
  );
};

export default SignInField;
