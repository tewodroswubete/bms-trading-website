import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMS Trading PLC - Manufacturing Excellence",
  description: "BMS Trading PLC - Leading manufacturer of plastic and soap products in Ethiopia since 2000 E.C.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-green-600">
                BMS Trading PLC
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-green-600">Home</a>
                <a href="/about" className="text-gray-700 hover:text-green-600">About</a>
                <a href="/products" className="text-gray-700 hover:text-green-600">Products</a>
                <a href="/gallery" className="text-gray-700 hover:text-green-600">Gallery</a>
                <a href="/quote" className="text-gray-700 hover:text-green-600">Quote</a>
                <a href="/contact" className="text-gray-700 hover:text-green-600">Contact</a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BMS Trading PLC</h3>
                <p className="text-gray-300 text-sm">
                  Leading manufacturer of plastic and soap products in Ethiopia since 2000 E.C.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>Alemgena, Sheger City</li>
                  <li>Phone: +251911217316</li>
                  <li>Email: bmstrading21@gmail.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">Telegram</a>
                  <a href="#" className="text-gray-300 hover:text-white">WhatsApp</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 BMS Trading PLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}