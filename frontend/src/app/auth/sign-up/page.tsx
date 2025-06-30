import SignUpField from "@/components/auth/sign-up/SignUp";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="container  flex gap-20 items-center">
        <div className="w-[400px]">
          <SignUpField />
        </div>
        <img src="/auth.png" alt="" className="size-8/12" />
      </div>
    </div>
  );
};

export default SignUpPage;
