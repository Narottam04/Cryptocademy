import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const EmailVerification = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      const { currentUser } = getAuth();
      if (currentUser?.emailVerified) {
        navigate("/app");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="md:border-2 md:border-white max-w-2xl  p-4">
        <h1 className="font-title text-2xl font-extrabold leading-snug  text-left text-green-400 md:text-4xl font-title tracking-wide">
          Email Verification
        </h1>
        <p className="font-title font-medium text-[#1ed760] hover:text-[#1db954] mt-4 border-b-2">
          A confirmation email has been sent to your email address!
        </p>
        <p className="font-text text-xl text-gray-100 mt-4">
          In order to combat spam emails and ensure the security of our platform, we kindly request
          that you verify your email address. By doing so, you'll be helping us maintain a high
          level of trust and safety for all of our users. Thank you for your cooperation and for
          being a part of our community.
        </p>
        <p className="font-text text-xl text-gray-100 mt-4">Keep Rockin'!</p>
        <p className="font-text text-xl text-gray-100 ">Cryptocademy Team</p>
        <button
          type="button"
          class="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-lg w-full px-5 py-2.5 mr-2 mb-2 mt-6 bg-green-600 hover:bg-green-700 focus:ring-green-800"
        >
          Send Verification Email Again!
        </button>
        <p className="font-title font-bold text-[#1ed760] hover:text-[#1db954] mt-6 text-center ">
          Once email is confirmed you will be redirected to app automatically.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
