"use client";
import SignInField from "@/components/auth/sign-in/SignIn";

const SignInPage = () => {
  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="container  flex gap-20 items-center">
        <div className="w-[400px]">
          <SignInField />
        </div>
        <img src="/auth.png" alt="" className="size-8/12" />
      </div>
    </div>
  );
};

export default SignInPage;
