
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse Items' },
    { path: '/add-item', label: 'List Item' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-magenta-100 rounded-xl group-hover:from-purple-200 group-hover:to-magenta-200 transition-all duration-300">
              <Leaf className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">
              ReWear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-charcoal-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-50 hover:text-purple-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-50 hover:text-magenta-500">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-500">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="purple-button-primary text-sm py-2 px-4">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-purple-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-200/50 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-charcoal-500 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-purple-200/50">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full purple-button-primary">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
