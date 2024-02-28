import emptyWatchlistLogo from "../Assets/svg/emptyWatchlist.svg";

const ClientError = (props) => {
  console.log(props?.error);
  const handleSendEmail = () => {
    const subject = encodeURIComponent("App Crash Report - Cryptocademy");
    const body = encodeURIComponent(
      `Hello,\n\nI encountered an issue with the app. Here are the details:\n\n${props.error}`
    );

    window.location.href = `mailto:webdripdev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="w-screen h-screen">
      <div className="shadow-lg rounded-2xl px-4 py-4 md:px-4 flex flex-col lg:justify-center align-center text-center max-w-xl m-auto">
        <img src={emptyWatchlistLogo} alt="empty watchlist" />
        <p className="text-white text-2xl lg:text-3xl font-bold my-6 lg:text-center">
          OOPS! The App Just Crashed!!
        </p>
        <p className="text-gray-300 lg:text-center mb-5">
          Looks like there is a bug in the app 😢. <br /> Please drop an email at
          webdripdev@gmail.com if you are seeing this page. We will fix it ASAP!!
        </p>
        <button
          onClick={handleSendEmail}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send An Email!
        </button>
      </div>
    </section>
  );
};

export default ClientError;
