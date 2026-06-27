function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-white rounded-xl">

      <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h3 className="font-bold">
            Smart Meeting Summary Generator
          </h3>

          <p className="text-sm text-gray-300">
            Built using Spring Boot • React • Google Gemini
          </p>

        </div>

        <div className="text-sm text-gray-300 mt-4 md:mt-0">

          Version 1.0 | © 2026 Yash Ahire

        </div>

      </div>

    </footer>
  );
}

export default Footer;