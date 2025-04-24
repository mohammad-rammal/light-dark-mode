const Header = () => {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
          FAQ Center
        </h1>
        <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 --animate-color-cycle">
          Find answers about React JS.
        </p>
      </header>
    </div>
  );
};
export default Header;
