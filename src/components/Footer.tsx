import logo_supreme from "../assets/logo_supreme.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="mb-12">
          <img src={logo_supreme} alt="Supreme Group" className="h-10" loading="lazy" />
        </div>

        {/* Footer Links */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Applications Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">APPLICATIONS</h3>
            <ul className="space-y-2">
              {["Apparel", "Automotive", "Filtration", "Customized Solutions"].map((item) => (
                <li key={item} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">COMPANY</h3>
            <ul className="space-y-2">
              {["Innovation", "Global Competency", "About Us", "Contact Us"].map((item) => (
                <li key={item} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">MORE</h3>
            <ul className="space-y-2">
              {["Careers", "Privacy Policy", "Terms and Conditions"].map((item) => (
                <li key={item} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">FOLLOW US</h3>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "Instagram", "Medium"].map((item) => (
                <li key={item} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
          <address>Supreme House, 110, 16th Road Chembur, Mumbai - 400071</address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
