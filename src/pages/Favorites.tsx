
import React, { useState } from 'react';
import { Heart, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NavBar from '@/components/NavBar';
import ItemCard from '@/components/ItemCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: 'Vintage Leather Jacket',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
      uploader: 'Emma Wilson',
      category: 'Outerwear',
      size: 'L',
      condition: 'Excellent',
      points: 180,
      location: 'Downtown',
      rating: 4.8,
      isLiked: true
    },
    {
      id: '2',
      title: 'Designer Handbag',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
      uploader: 'Alex Rodriguez',
      category: 'Accessories',
      size: 'One Size',
      condition: 'Good',
      points: 220,
      location: 'Midtown',
      rating: 4.6,
      isLiked: true
    },
    {
      id: '3',
      title: 'Silk Evening Dress',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop',
      uploader: 'Maya Patel',
      category: 'Dresses',
      size: 'M',
      condition: 'Excellent',
      points: 250,
      location: 'Uptown',
      rating: 4.9,
      isLiked: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Outerwear', 'Accessories', 'Dresses', 'Tops', 'Bottoms'];

  const handleRemoveFavorite = (itemId: string) => {
    setFavorites(prev => prev.filter(item => item.id !== itemId));
  };

  const filteredFavorites = favorites.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.uploader.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-magenta-50">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="purple-card p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-charcoal-900 mb-2 flex items-center">
                <Heart className="h-8 w-8 text-magenta-500 mr-3 fill-current" />
                Your Favorites
              </h1>
              <p className="text-charcoal-600">
                {favorites.length} items you've saved for later
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-magenta-500">{favorites.length}</div>
              <div className="text-sm text-charcoal-600">Saved Items</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="purple-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal-400" />
              <Input
                placeholder="Search favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl border-purple-200 focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-charcoal-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-xl ${
                      selectedCategory === category
                        ? 'purple-button-primary'
                        : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavorites.map((item) => (
              <div key={item.id} className="relative group">
                <ItemCard 
                  {...item}
                  onLike={() => handleRemoveFavorite(item.id)}
                />
                
                {/* Remove button overlay */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 rounded-full bg-red-500/90 text-white hover:bg-red-600 backdrop-blur-sm"
                    onClick={() => handleRemoveFavorite(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="purple-card p-12 text-center">
            <Heart className="h-16 w-16 text-charcoal-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
              {favorites.length === 0 ? 'No favorites yet' : 'No items match your search'}
            </h3>
            <p className="text-charcoal-600 mb-6">
              {favorites.length === 0 
                ? 'Start browsing items and click the heart icon to save them here'
                : 'Try adjusting your search or filter criteria'
              }
            </p>
            {favorites.length === 0 && (
              <Button className="purple-button-primary">
                Browse Items
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
