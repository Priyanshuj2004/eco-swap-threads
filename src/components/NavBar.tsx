
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse Items' },
    { path: '/add-item', label: 'List Item' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  // Mock profile data
  const profile = {
    name: 'Sarah Chen',
    phoneNumber: '+1 (555) 123-4567',
    city: 'New York',
    state: 'NY',
    pincode: '10001'
  };

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
            
            {/* Favorites Link */}
            <Link to="/favorites">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`p-2 hover:bg-purple-50 hover:text-magenta-500 ${
                  isActive('/favorites') ? 'bg-purple-100 text-magenta-600' : ''
                }`}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setShowProfile(!showProfile)}
              >
                <User className="h-5 w-5" />
              </Button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-purple-200 z-50">
                  <div className="p-4 border-b border-purple-100">
                    <h3 className="font-semibold text-charcoal-900">Profile Settings</h3>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={profile.name}
                        readOnly
                        className="w-full px-3 py-2 bg-purple-50 border border-purple-200 rounded-lg text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={profile.phoneNumber}
                        className="w-full px-3 py-2 border border-purple-200 rounded-lg text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1">City</label>
                        <input
                          type="text"
                          value={profile.city}
                          className="w-full px-3 py-2 border border-purple-200 rounded-lg text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1">State</label>
                        <input
                          type="text"
                          value={profile.state}
                          className="w-full px-3 py-2 border border-purple-200 rounded-lg text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        value={profile.pincode}
                        className="w-full px-3 py-2 border border-purple-200 rounded-lg text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
                    </div>
                    
                    <Button className="w-full purple-button-primary text-sm">
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-xl border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-500">
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
              <Link
                to="/favorites"
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive('/favorites')
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-charcoal-500 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Favorites
              </Link>
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

      {/* Overlay for profile dropdown */}
      {showProfile && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfile(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
