import Link from "next/link"; 
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <MaxWidthWrapper>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold">SOU9-FPK</h3>
              <p className="mt-4 text-sm text-gray-300">
                Discover exclusive deals and premium products. Your one-stop
                shop for an exceptional shopping experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Products", path: "/" },
                  { name: "Categories", path: "/categories" },
                  { name: "Cart", path: "/cart" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="text-sm">
                  <span className="font-medium text-white">Email:</span>{" "}
                  <a
                    href="mailto:support@SOU9-FPK.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    support@SOU9-FPK.com
                  </a>
                </li>
                <li className="text-sm">
                  <span className="font-medium text-white">Phone:</span>{" "}
                  (555) 123-4567
                </li>
                <li className="text-sm">
                  <span className="font-medium text-white">Address:</span> 123
                  E-commerce St.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SOU9-FPK. All rights reserved.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
