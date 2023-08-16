import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-slate-100 rounded-lg shadow m-4 mt-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
          <Logo />
          <p className="mt-2 md:mt-0 text-gray-700 text-center">
            Connecting you to the future of finance.Your journey starts here.
          </p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-6" />
        <p className="w-full text-sm text-gray-500 text-center">
          © 2023 MovieWatch. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
