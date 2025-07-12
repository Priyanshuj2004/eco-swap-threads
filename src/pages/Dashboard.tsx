
import React, { useState } from 'react';
import { Package, ArrowRightLeft, CheckCircle, Plus, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NavBar from '@/components/NavBar';
import PointsDisplay from '@/components/PointsDisplay';
import SwapStatusBadge from '@/components/SwapStatusBadge';
import ItemCard from '@/components/ItemCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user] = useState({
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    points: 1250,
    earnedThisMonth: 340,
    joinDate: 'March 2024',
    location: 'Downtown',
    totalSwaps: 23,
    rating: 4.8
  });

  // Mock data
  const myItems = [
    {
      id: '1',
      title: 'Vintage Denim Jacket',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      uploader: 'Sarah Chen',
      category: 'Outerwear',
      size: 'M',
      condition: 'Excellent',
      points: 150,
      status: 'available' as const,
      datePosted: '2024-01-15'
    },
    {
      id: '2',
      title: 'Summer Floral Dress',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      uploader: 'Sarah Chen',
      category: 'Dresses',
      size: 'S',
      condition: 'Good',
      points: 120,
      status: 'pending' as const,
      datePosted: '2024-01-12'
    }
  ];

  const swapRequests = [
    {
      id: '1',
      type: 'incoming',
      item: 'Designer Wool Coat',
      requester: 'Emma Wilson',
      requesterRating: 4.6,
      dateRequested: '2024-01-10',
      status: 'pending' as const,
      message: 'Hi! I love this coat. Would love to swap for my vintage bag.'
    },
    {
      id: '2',
      type: 'outgoing',
      item: 'Casual Cotton Tee',
      owner: 'Alex Rodriguez',
      ownerRating: 4.9,
      dateRequested: '2024-01-08',
      status: 'approved' as const,
      message: 'Perfect condition tee, exactly what I was looking for!'
    }
  ];

  const completedSwaps = [
    {
      id: '1',
      item: 'Leather Boots',
      swappedWith: 'Jordan Kim',
      date: '2024-01-05',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&h=150&fit=crop'
    },
    {
      id: '2',
      item: 'Silk Scarf',
      swappedWith: 'Maya Patel',
      date: '2023-12-28',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-50 via-white to-earth-50">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="eco-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-gray-600 mb-4">
                Keep up the great work making fashion more sustainable
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined {user.joinDate}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {user.location}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 md:mt-0">
              <PointsDisplay 
                points={user.points} 
                earned={user.earnedThisMonth}
                showTrend={true}
              />
              
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-600">{user.totalSwaps}</div>
                <div className="text-sm text-gray-600">Total Swaps</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-eco-600">{user.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/add-item">
            <Button className="eco-card p-6 h-auto w-full group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-eco-500 to-eco-600 text-white border-0">
              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-2xl mr-4 group-hover:bg-white/30 transition-colors">
                  <Plus className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">List New Item</div>
                  <div className="text-sm opacity-90">Share something from your closet</div>
                </div>
              </div>
            </Button>
          </Link>

          <Link to="/browse">
            <Button className="eco-card p-6 h-auto w-full group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-earth-400 to-earth-500 text-white border-0">
              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-2xl mr-4 group-hover:bg-white/30 transition-colors">
                  <Package className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Browse Items</div>
                  <div className="text-sm opacity-90">Discover amazing finds</div>
                </div>
              </div>
            </Button>
          </Link>

          <Button className="eco-card p-6 h-auto w-full group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-400 to-purple-500 text-white border-0">
            <div className="flex items-center">
              <div className="p-3 bg-white/20 rounded-2xl mr-4 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">View Analytics</div>
                <div className="text-sm opacity-90">Track your impact</div>
              </div>
            </div>
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-1/2 bg-white rounded-2xl p-1 shadow-sm">
            <TabsTrigger value="items" className="rounded-xl">My Items</TabsTrigger>
            <TabsTrigger value="swaps" className="rounded-xl">Swaps</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-xl">History</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-xl">Profile</TabsTrigger>
          </TabsList>

          {/* My Items Tab */}
          <TabsContent value="items" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Items</h2>
              <Link to="/add-item">
                <Button className="eco-button-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myItems.map((item) => (
                <div key={item.id} className="relative">
                  <ItemCard {...item} />
                  <div className="absolute top-4 left-4">
                    <SwapStatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>

            {myItems.length === 0 && (
              <div className="eco-card p-12 text-center">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No items yet</h3>
                <p className="text-gray-600 mb-6">Start by listing your first item to the community</p>
                <Link to="/add-item">
                  <Button className="eco-button-primary">List Your First Item</Button>
                </Link>
              </div>
            )}
          </TabsContent>

          {/* Swap Requests Tab */}
          <TabsContent value="swaps" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Swap Requests</h2>

            <div className="space-y-6">
              {swapRequests.map((swap) => (
                <div key={swap.id} className="eco-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        swap.type === 'incoming' ? 'bg-eco-100 text-eco-600' : 'bg-earth-100 text-earth-600'
                      }`}>
                        <ArrowRightLeft className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{swap.item}</h3>
                        <p className="text-sm text-gray-600">
                          {swap.type === 'incoming' ? `Request from ${swap.requester}` : `Request to ${swap.owner}`}
                        </p>
                      </div>
                    </div>
                    <SwapStatusBadge status={swap.status} />
                  </div>

                  <p className="text-gray-600 mb-4 italic">{swap.message}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Requested on {new Date(swap.dateRequested).toLocaleDateString()}
                    </span>
                    
                    {swap.status === 'pending' && swap.type === 'incoming' && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="rounded-xl">
                          Decline
                        </Button>
                        <Button size="sm" className="eco-button-primary">
                          Accept
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {swapRequests.length === 0 && (
                <div className="eco-card p-12 text-center">
                  <ArrowRightLeft className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No swap requests</h3>
                  <p className="text-gray-600">Swap requests will appear here when users are interested in your items</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Completed Swaps Tab */}
          <TabsContent value="completed" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Completed Swaps</h2>

            <div className="space-y-4">
              {completedSwaps.map((swap) => (
                <div key={swap.id} className="eco-card p-6">
                  <div className="flex items-center">
                    <img
                      src={swap.image}
                      alt={swap.item}
                      className="w-16 h-16 rounded-2xl object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{swap.item}</h3>
                      <p className="text-sm text-gray-600">Swapped with {swap.swappedWith}</p>
                      <p className="text-sm text-gray-500">{new Date(swap.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full mr-1 ${
                              i < swap.rating ? 'bg-yellow-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <CheckCircle className="h-6 w-6 text-eco-500" />
                    </div>
                  </div>
                </div>
              ))}

              {completedSwaps.length === 0 && (
                <div className="eco-card p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No completed swaps yet</h3>
                  <p className="text-gray-600">Your swap history will appear here once you complete your first exchange</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>

            <div className="eco-card p-6">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-eco-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-eco-700">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Account Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Points</span>
                      <span className="font-medium">{user.points.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed Swaps</span>
                      <span className="font-medium">{user.totalSwaps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-medium">{user.rating}/5.0</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Preferences</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      Notification Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      Privacy Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
