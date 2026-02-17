import { Outlet, Link, useLocation } from "react-router";
import { Mail, FileText, Github, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Xianzhi Jason Li
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </Link>
              <Link
                to="/publications"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/publications")
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Publications
              </Link>
              <Link
                to="/experience"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/experience")
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/projects")
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Projects
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:21XL17@queensu.ca"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=F7B1QQsAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/xianzhi-li-72071923a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>© 2026 Xianzhi Jason Li. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}