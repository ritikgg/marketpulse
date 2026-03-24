import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from './ui/Button';

export const Navigation: React.FC = () => {
  const { cart, user } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            MarketPulse
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="h-10 w-64 rounded-full border pl-10 pr-4 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link to="/wishlist">
              <Button variant="ghost" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
            {user ? (
              <Link to="/profile">
                <Button variant="ghost">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>

            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto space-y-4 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="h-10 w-full rounded-full border pl-10 pr-4 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/wishlist"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart ({cart.length})
              </Link>
              {user ? (
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              ) : (
                <Button onClick={() => setIsMenuOpen(false)}>Sign In</Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};