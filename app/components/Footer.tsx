const Footer = () => {
    return (
      <footer className="bg-gray-200 dark:bg-gray-800 fixed bottom-0 left-0 right-0">
        <div className="container mx-auto py-4 text-center">
          <hr className="border-t-2 border-teal-500 w-16 mx-auto mb-2" />
          <p className="text-gray-700 dark:text-gray-300">
            Developed by{" "}
            <a
              href="https://github.com/m3hu1/m3hu1-blog"
              className="text-teal-500 hover:glow"
            >
              Mehul
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;