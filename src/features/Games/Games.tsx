import { useState } from 'react';
import { Edit2, Globe, CheckCircle, MessageCircle, Repeat2, Heart, MoreHorizontal, GamepadIcon, Trophy, Users, Clock } from 'lucide-react';

const Games = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Mark Zuckerberg",
    profile_id: "4",
    url: "https://www.facebook.com/zuck",
    image: "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/549396203_10116914317863211_2996843027695932475_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ry1RxPV-QHYQ7kNvwHRX3H4&_nc_oc=AdlfqrYsg9bAsJEuhv7go3a2JljrLcctWzpfWCR8BFa48uwmMdcgmtPlY9zsCgacLd4&_nc_zt=24&_nc_ht=scontent-hkg1-2.xx&_nc_gid=2Vw-mVvWgpe-XyQX6lgV8A&oh=00_Afc3fXwq22YyWowYOXYPqo7K4V_lm5Lgg1cSU35y5SciXw&oe=68F6A5E4",
    intro: "Bringing the world closer together.",
    cover_image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/510262894_10116675748582961_3647797500193179162_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=7emM940O7GQQ7kNvwGGRqk5&_nc_oc=AdmiarrnAjPYTQyoMqmCVgH-rVZdKGpAqaoz2CYcu7RGrOqR4cRnOYUzJDNjtWwpZtI&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=2Vw-mVvWgpe-XyQX6lgV8A&oh=00_Afe8amft2lk23JUpuAjtZD2DVjp6teqedDpHwtG9GVRBqg&oe=68F6A384",
    gender: "MALE",
    about: {
      about_public: [
        {
          text: "Profile · Public figure"
        },
        {
          text: "Founder and CEO at Meta"
        }
      ]
    },
    verified: true
  });

  // Sample game posts from the API data
  const [gamePosts, setGamePosts] = useState([
    {
      post_id: "10116956286677371",
      type: "post",
      url: "https://www.facebook.com/zuck/posts/pfbid0sq1e3sPDzfMyGos8MtW9HF2EP14gJR5bbMKfY17iAxDnQ28ZDdCK2CMYLWDyGVzvl",
      message: "Congrats to Alex Pereira, Merab Dvalishvili, Jiri Prochazka, and Daniel Santos on a great night! Good to see lots of friends and thanks to Dana and UFC for another amazing event.",
      timestamp: 1759679144,
      comments_count: 66258,
      reactions_count: 244929,
      reshare_count: 7103,
      reactions: {
        angry: 150,
        care: 4319,
        haha: 613,
        like: 197741,
        love: 40602,
        sad: 54,
        wow: 1450
      },
      author: {
        id: "4",
        name: "Mark Zuckerberg",
        url: "https://www.facebook.com/zuck",
        profile_picture_url: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/549396203_10116914317863211_2996843027695932475_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ry1RxPV-QHYQ7kNvwHWONQf&_nc_oc=AdkT_S0Bz7eoL96u2eLVd_F3sS0jLE1Cj7sIuEJ6JPPd6AytAdRUXPYofVN9ktuJ2KE&_nc_zt=24&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AffwamGPevRgt_faldgmvMZucmOgDILuZJHSP2u-ps8k-A&oe=68F6A5E4"
      },
      album_preview: [
        {
          type: "photo",
          image_file_uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558157621_10116956286547631_7491573465806306116_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=COW8KFVyE5sQ7kNvwGmxkFB&_nc_oc=AdmFLQ_Y2Wi0ZwidVZq_YGsZKRf50bjmcmtmFIQ-ekIIoyzXIYVD3ZLP6vtecIt1rQc&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfccngeXLE00XV5DOrygEBlSUS4DbTH2vJA7eUhRz3obyQ&oe=68F69B29",
          url: "https://www.facebook.com/photo.php?fbid=10116956286472781&set=a.612287952871&type=3",
          id: "10116956286472781"
        },
        {
          type: "photo",
          image_file_uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558474303_10116956286532661_2854194421487977940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h9bbKoqv9SAQ7kNvwFbgbGY&_nc_oc=AdnLPjO5KiuIVYwpUcxd9Gs7WkR1dHGBlfiIkyoadZkOhAblFWLEjqWGRLSKnwt1rQc&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_Afd8-LOpTA00_u8IE0A-Q972YJCut4S9l69yIvrSJiwVFQ&oe=68F6A5D8",
          url: "https://www.facebook.com/photo.php?fbid=10116956286477771&set=a.612287952871&type=3",
          id: "10116956286477771"
        }
      ]
    },
    {
      post_id: "10116950906644001",
      type: "post",
      url: "https://www.facebook.com/zuck/posts/pfbid0wGyXxxJZqgfRHTxqD8RDFFqxVFMJFhnEV2BJzwDVpUrUEHVJZz58F8K1J511znfSl",
      message: "Spent the day with our Reality Labs research teams. Excited about the progress we're making to bring personal superintelligence to glasses!",
      timestamp: 1759505757,
      comments_count: 69560,
      reactions_count: 245300,
      reshare_count: 7673,
      reactions: {
        like: 150000,
        love: 75300,
        care: 12000,
        wow: 8000,
        haha: 2000
      },
      author: {
        id: "4",
        name: "Mark Zuckerberg",
        url: "https://www.facebook.com/zuck",
        profile_picture_url: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/549396203_10116914317863211_2996843027695932475_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ry1RxPV-QHYQ7kNvwHWONQf&_nc_oc=AdkT_S0Bz7eoL96u2eLVd_F3sS0jLE1Cj7sIuEJ6JPPd6AytAdRUXPYofVN9ktuJ2KE&_nc_zt=24&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AffwamGPevRgt_faldgmvMZucmOgDILuZJHSP2u-ps8k-A&oe=68F6A5E4"
      },
      image: {
        uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558982136_10116950903111081_8980398027339277611_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f1aCUlymYtMQ7kNvwEfSmni&_nc_oc=AdmKDG3-w8L2dHJ4TCEBZRNidTauvcqG6q3Dw0UvfS3avTGgYUSr0ANAkW27mvbYFOI&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfeJn-TvOb9yF-gFbeUioX5Z2KSrNbi_BsDEwoaNpt7NEA&oe=68F680A0",
        height: 512,
        width: 640,
        id: "10116950903101101"
      }
    }
  ]);

  // Sample games data
  const featuredGames = [
    {
      id: 1,
      name: "UFC 5",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      players: "2.4M",
      category: "Fighting",
      rating: 4.8
    },
    {
      id: 2,
      name: "VR Champions",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=200&fit=crop",
      players: "1.8M",
      category: "VR Sports",
      rating: 4.9
    },
    {
      id: 3,
      name: "Meta Quest Arena",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
      players: "3.2M",
      category: "Action",
      rating: 4.7
    }
  ];

  const gamingFriends = [
    { name: "Sheryl Sandberg", game: "Playing VR Champions", status: "online", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
    { name: "Chris Cox", game: "In Meta Quest Arena", status: "ingame", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Mike Schroepfer", game: "Last seen 2h ago", status: "offline", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const getTotalReactions = (reactions: any) => {
    return Object.values(reactions).reduce((sum: any, count: any) => sum + count, 0);
  };

  const renderImageGrid = (images: any) => {
    if (!images || images.length === 0) return null;

    if (images.length === 1) {
      return (
        <div className="rounded-lg overflow-hidden mt-3">
          <img 
            src={images[0].image_file_uri} 
            alt="Post" 
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-1 mt-3 rounded-lg overflow-hidden">
        {images.slice(0, 4).map((image: any, index: any) => (
          <div key={index} className="relative">
            <img 
              src={image.image_file_uri} 
              alt={`Post ${index + 1}`} 
              className="w-full h-48 object-cover"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{images.length - 4}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-dark-1 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Profile Card */}
        <div className="bg-dark-2 rounded-2xl border border-gray-800 shadow-xl overflow-hidden mb-6">
          
          {/* Cover Photo */}
          <div className="relative h-80 bg-gradient-to-r from-electric-500/80 to-electric-600/80">
            <img
              src={profile.cover_image}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Profile Header */}
          <div className="px-8 pb-8 -mt-24 relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-6 lg:space-y-0">
              
              {/* Avatar Section */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-2 shadow-2xl">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover border-4 border-dark-2"
                  />
                </div>
                {profile.verified && (
                  <div className="absolute bottom-4 right-4 bg-blue-900 text-blue-300 p-2 rounded-full border-4 border-dark-2 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Profile Info and Actions */}
              <div className="flex-1 text-center lg:text-left lg:ml-8 lg:mb-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <h1 className="text-4xl font-bold text-white">{profile.name}</h1>
                  {profile.verified && (
                    <CheckCircle className="w-6 h-6 text-electric-400" />
                  )}
                </div>
                
                <p className="text-xl text-gray-300 mb-4 max-w-2xl">{profile.intro}</p>
                
                {/* Gaming Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 mb-6">
                  <div className="flex items-center space-x-2 bg-dark-3 px-4 py-2 rounded-full border border-gray-700">
                    <Trophy className="w-4 h-4 text-electric-400" />
                    <span className="text-sm">Level 85</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-dark-3 px-4 py-2 rounded-full border border-gray-700">
                    <GamepadIcon className="w-4 h-4 text-electric-400" />
                    <span className="text-sm">24 Games</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-dark-3 px-4 py-2 rounded-full border border-gray-700">
                    <Users className="w-4 h-4 text-electric-400" />
                    <span className="text-sm">128 Friends</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <button className="bg-electric-500 hover:bg-electric-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg">
                    Play Now
                  </button>
                  <button className="bg-dark-3 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium border border-gray-600 transition-all duration-200">
                    Add Friend
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-dark-3 hover:bg-gray-700 text-white p-3 rounded-full border border-gray-600 transition-all duration-200"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-t border-gray-800">
            <div className="flex overflow-x-auto">
              {['Posts', 'Games', 'Friends', 'Photos', 'Videos', 'Streams'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-shrink-0 px-6 py-4 border-b-2 transition-all duration-200 font-medium ${
                    tab === 'Games' 
                      ? 'text-electric-400 border-electric-400' 
                      : 'text-gray-400 border-transparent hover:text-white hover:border-electric-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column - Gaming Stats & Friends */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Gaming Stats Card */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Gaming Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Level</span>
                  <span className="text-electric-400 font-bold">85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">XP</span>
                  <span className="text-white">124,850/150,000</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-electric-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-400">Games Played</span>
                  <span className="text-white">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Achievements</span>
                  <span className="text-white">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Play Time</span>
                  <span className="text-white">284h</span>
                </div>
              </div>
            </div>

            {/* Gaming Friends Card */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Gaming Friends</h3>
                <span className="text-electric-400 text-sm">See all</span>
              </div>
              
              <div className="space-y-4">
                {gamingFriends.map((friend, index) => (
                  <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5 group-hover:from-electric-300 group-hover:to-electric-500 transition-all duration-300">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-dark-2 ${
                        friend.status === 'online' ? 'bg-green-500' : 
                        friend.status === 'ingame' ? 'bg-orange-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm group-hover:text-electric-400 transition-colors duration-200">
                        {friend.name}
                      </div>
                      <div className="text-gray-400 text-xs">{friend.game}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Games */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Featured Games</h3>
              
              <div className="space-y-4">
                {featuredGames.map((game) => (
                  <div key={game.id} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden mb-2">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-2 left-2">
                        <div className="text-white font-semibold text-sm">{game.name}</div>
                        <div className="text-gray-300 text-xs">{game.category}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{game.players} players</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Trophy className="w-3 h-3 text-yellow-500" />
                        <span>{game.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Game Posts & Activity */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Create Post */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Share your gaming achievement..."
                  className="flex-1 bg-dark-3 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                />
              </div>
            </div>

            {/* Game Posts */}
            {gamePosts.map((post: any) => (
              <div key={post.post_id} className="bg-dark-2 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
                
                {/* Post Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5">
                        <img
                          src={post.author.profile_picture_url}
                          alt={post.author.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-semibold text-lg">{post.author.name}</h3>
                          <CheckCircle className="w-5 h-5 text-electric-400" />
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <span>{formatTime(post.timestamp)}</span>
                          <span>•</span>
                          <Globe className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-all duration-200">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post Message */}
                  <div className="mt-4">
                    <p className="text-white text-lg leading-relaxed">{post.message}</p>
                  </div>
                </div>

                {/* Post Images */}
                {post.album_preview && renderImageGrid(post.album_preview)}
                {post.image && !post.album_preview && (
                  <div className="rounded-lg overflow-hidden mt-3 px-6 pb-6">
                    <img 
                      src={post.image.uri} 
                      alt="Post" 
                      className="w-full h-auto max-h-96 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Post Stats */}
                <div className="px-6 py-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <span className="text-electric-400 font-medium">{formatNumber(getTotalReactions(post.reactions))}</span>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span>{formatNumber(post.comments_count)} comments</span>
                        <span>{formatNumber(post.reshare_count)} shares</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-4 py-2 border-t border-gray-800">
                  <div className="grid grid-cols-3 gap-1">
                    <button className="flex items-center justify-center space-x-2 text-gray-400 hover:bg-gray-700 py-3 rounded-lg transition-all duration-200 group">
                      <Heart className="w-5 h-5 group-hover:text-red-500" />
                      <span className="font-medium group-hover:text-white">Like</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 text-gray-400 hover:bg-gray-700 py-3 rounded-lg transition-all duration-200 group">
                      <MessageCircle className="w-5 h-5 group-hover:text-electric-400" />
                      <span className="font-medium group-hover:text-white">Comment</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 text-gray-400 hover:bg-gray-700 py-3 rounded-lg transition-all duration-200 group">
                      <Repeat2 className="w-5 h-5 group-hover:text-green-500" />
                      <span className="font-medium group-hover:text-white">Share</span>
                    </button>
                  </div>
                </div>

                {/* Comments Preview */}
                <div className="p-4 border-t border-gray-800 bg-dark-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5 flex-shrink-0">
                      <img
                        src={profile.image}
                        alt="Your profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="w-full bg-dark-2 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Achievements & Edit Profile */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Recent Achievements */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Recent Achievements</h3>
                <span className="text-electric-400 text-sm">View all</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-dark-3 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Game Master</div>
                    <div className="text-gray-400 text-xs">Completed 20 games</div>
                    <div className="text-electric-400 text-xs">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-dark-3 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Social Player</div>
                    <div className="text-gray-400 text-xs">Played with 50 friends</div>
                    <div className="text-electric-400 text-xs">1 day ago</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-dark-3 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Dedicated Gamer</div>
                    <div className="text-gray-400 text-xs">100 hours played</div>
                    <div className="text-electric-400 text-xs">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile Card */}
            {isEditing && (
              <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Edit Gaming Profile</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 block mb-2">Gaming Bio</label>
                    <textarea
                      value={profile.intro}
                      onChange={(e) => setProfile({...profile, intro: e.target.value})}
                      rows={3}
                      className="w-full bg-dark-3 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric-400 resize-none"
                    />
                  </div>
                  
                  <button
                    onClick={handleSave}
                    className="w-full bg-electric-500 hover:bg-electric-600 text-white py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;