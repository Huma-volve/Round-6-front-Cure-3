import { useState } from 'react';
import { Plus, ChevronRight, ChevronLeft } from 'lucide-react';
import "@/index.css"

const StoryFeed = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: {
        name: "You",
        username: "Add Story",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        isMe: true
      },
      hasNewStory: false,
      isSeen: false
    },
    {
      id: 3,
      user: {
        name: "Mike",
        username: "@mikec",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        isMe: false
      },
      hasNewStory: true,
      isSeen: false
    },
    {
      id: 4,
      user: {
        name: "Emma",
        username: "@emmad",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        isMe: false
      },
      hasNewStory: false,
      isSeen: true
    },
    {
      id: 5,
      user: {
        name: "Alex",
        username: "@alexm",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        isMe: false
      },
      hasNewStory: true,
      isSeen: false
    },
    {
      id: 6,
      user: {
        name: "Lisa",
        username: "@lisak",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
        isMe: false
      },
      hasNewStory: false,
      isSeen: true
    },
    {
      id: 7,
      user: {
        name: "David",
        username: "@davidw",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
        isMe: false
      },
      hasNewStory: true,
      isSeen: false
    }
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(prev => Math.max(prev - 300, 0));
  };

  const scrollRight = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollPosition(prev => Math.min(prev + 300, maxScroll));
    }
  };

  return (
    <div className="bg-dark-2 rounded-2xl border border-gray-800 p-4 sm:p-6 mb-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white brand-name">Stories</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 bg-dark-3 hover:bg-gray-700 rounded-full transition-colors duration-200 text-gray-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 bg-dark-3 hover:bg-gray-700 rounded-full transition-colors duration-200 text-gray-400 hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stories Container */}
      <div className="relative">
        <div 
          id="stories-container"
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {stories.map((story) => (
            <div 
              key={story.id}
              className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer group"
            >
              {/* Story Circle */}
              <div className={`relative p-0.5 rounded-full ${
                story.user.isMe 
                  ? 'bg-gradient-to-r from-gray-600 to-gray-400' 
                  : story.hasNewStory 
                    ? 'bg-gradient-to-r from-electric-400 to-purple-500' 
                    : 'bg-gradient-to-r from-gray-500 to-gray-400'
              }`}>
                <div className="bg-dark-2 p-1 rounded-full">
                  <div className="relative">
                    <img 
                      src={story.user.avatar} 
                      alt={story.user.name}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dark-2 object-cover transition-all duration-300 group-hover:scale-110 ${
                        story.isSeen ? 'opacity-75' : 'opacity-100'
                      }`}
                    />
                    
                    {/* Add Story Icon for "You" */}
                    {story.user.isMe && (
                      <div className="absolute -bottom-1 -right-1 bg-electric-500 rounded-full p-1 border-2 border-dark-2">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="text-center max-w-20">
                <p className={`text-xs font-medium truncate ${
                  story.user.isMe 
                    ? 'text-electric-400' 
                    : story.hasNewStory 
                      ? 'text-white' 
                      : 'text-gray-400'
                }`}>
                  {story.user.name}
                </p>
                {!story.user.isMe && (
                  <p className="text-xs text-gray-500 truncate">
                    {story.user.username}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for Scroll Indication */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-dark-2 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-dark-2 to-transparent pointer-events-none"></div>
      </div>

      {/* Progress Dots - Mobile Only */}
      <div className="flex justify-center space-x-1 mt-4 sm:hidden">
        {[1, 2, 3].map((dot) => (
          <div 
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot === 1 ? 'bg-electric-400' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StoryFeed;