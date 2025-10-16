import { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Smile, Image, MapPin } from 'lucide-react';
import StoryFeed from './StoryFeed';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Ahmed Mohamed",
        username: "@ahmedm",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      content: "Just launched my new startup! 🚀 So excited to share this journey with everyone. The future looks bright! #startup #tech",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      likes: 243,
      comments: 45,
      shares: 12,
      time: "2 hours ago",
      isLiked: false,
      isSaved: false
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        username: "@sarahj",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      content: "Beautiful sunset at the beach today! 🌅 Sometimes you just need to disconnect and enjoy nature's beauty.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      likes: 156,
      comments: 23,
      shares: 8,
      time: "5 hours ago",
      isLiked: true,
      isSaved: true
    },
    {
      id: 3,
      user: {
        name: "Mike Chen",
        username: "@mikec",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      content: "Just completed my first marathon! 🏃‍♂️ 42km of pure determination and willpower. Never give up on your goals!",
      likes: 89,
      comments: 34,
      shares: 5,
      time: "1 day ago",
      isLiked: false,
      isSaved: false
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          } 
        : post
    ));
  };

  const handleSave = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved } 
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-dark-1 py-6">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
      <StoryFeed />
        
        {/* Create Post Card */}
        {/* Create Post Card - Mobile Optimized */}
<div className="bg-dark-2 rounded-2xl border border-gray-800 p-4 sm:p-6 shadow-lg">
  <div className="flex items-start space-x-3 sm:space-x-4">
    <img 
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
      alt="Your avatar" 
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-electric-400 flex-shrink-0"
    />
    <div className="flex-1 min-w-0">
      <button className="w-full text-left bg-dark-3 border border-gray-700 rounded-full px-4 sm:px-6 py-3 text-gray-400 hover:text-gray-300 hover:border-gray-600 transition-all duration-200 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
        What's on your mind?
      </button>
      
      <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800">
        <div className="flex space-x-2 sm:space-x-4">
          <button className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-electric-400 transition-colors duration-200 p-1 sm:p-0">
            <Image className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm hidden xs:block">Photo</span>
          </button>
          <button className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-electric-400 transition-colors duration-200 p-1 sm:p-0">
            <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm hidden xs:block">Feeling</span>
          </button>
          <button className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-electric-400 transition-colors duration-200 p-1 sm:p-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm hidden xs:block">Location</span>
          </button>
        </div>
        
        <button className="bg-electric-500 hover:bg-electric-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap">
          Post
        </button>
      </div>
    </div>
  </div>
</div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="bg-dark-2 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.user.avatar} 
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full border-2 border-electric-400/30"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-lg">{post.user.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <span>{post.user.username}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-dark-3 transition-colors duration-200">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Post Content */}
                <div className="mt-4">
                  <p className="text-gray-300 text-lg leading-relaxed">{post.content}</p>
                </div>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-6 pb-4">
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full h-auto rounded-2xl object-cover max-h-96"
                  />
                </div>
              )}

              {/* Post Stats */}
              <div className="px-6 py-3 border-t border-b border-gray-800">
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{post.likes} likes</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                      <span>{post.comments} comments</span>
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Share className="w-4 h-4 text-green-400" />
                    <span>{post.shares} shares</span>
                  </span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 ${
                      post.isLiked 
                        ? 'bg-red-500/10 text-red-400' 
                        : 'text-gray-400 hover:bg-dark-3 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="font-medium">Like</span>
                  </button>
                  
                  <button className="flex items-center justify-center space-x-2 py-3 rounded-xl text-gray-400 hover:bg-dark-3 hover:text-blue-400 transition-all duration-200">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">Comment</span>
                  </button>
                  
                  <button className="flex items-center justify-center space-x-2 py-3 rounded-xl text-gray-400 hover:bg-dark-3 hover:text-green-400 transition-all duration-200">
                    <Share className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                  
                  <button 
                    onClick={() => handleSave(post.id)}
                    className={`flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 ${
                      post.isSaved 
                        ? 'bg-electric-500/10 text-electric-400' 
                        : 'text-gray-400 hover:bg-dark-3 hover:text-electric-400'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${post.isSaved ? 'fill-current' : ''}`} />
                    <span className="font-medium">Save</span>
                  </button>
                </div>
              </div>

              {/* Comments Preview */}
              <div className="px-6 py-4 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face" 
                    alt="Commenter" 
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="bg-dark-3 rounded-2xl px-4 py-2">
                      <span className="font-medium text-white text-sm">John Doe</span>
                      <p className="text-gray-300 text-sm mt-1">Great post! Keep up the amazing work 👏</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-gray-400 text-xs">
                      <span>2h</span>
                      <button className="hover:text-white">Like</button>
                      <button className="hover:text-white">Reply</button>
                    </div>
                  </div>
                </div>
                
                <button className="w-full text-center text-gray-400 hover:text-electric-400 text-sm font-medium mt-3 py-2 transition-colors duration-200">
                  View all {post.comments} comments
                </button>
              </div>

              {/* Add Comment */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                    alt="Your avatar" 
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1 flex items-center space-x-2 bg-dark-3 rounded-full px-4 py-2">
                    <input 
                      type="text" 
                      placeholder="Write a comment..." 
                      className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-sm"
                    />
                    <button className="text-electric-400 hover:text-electric-300 transition-colors duration-200">
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;