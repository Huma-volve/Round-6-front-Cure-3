import { useState } from 'react';
import { MessageCircle, Repeat2, Heart, MoreHorizontal, Globe, CheckCircle } from 'lucide-react';

const Posts = () => {
  const [posts, setPosts] = useState([
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
        },
        {
          type: "photo",
          image_file_uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/557119842_10116956286542641_8033060557856486868_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7XZH4W4938cQ7kNvwHjCg5F&_nc_oc=AdmWx4Ay4XLKmM8npdLa7c-4uvNEKtsDW3YfsAXSkJiT1cmCLglldzj0IOrleUX7Rsg&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_Aff5fLyj5uWN8ciCVCgSsxtxmmrVOliYj7H-ym8U6H-gtA&oe=68F67D63",
          url: "https://www.facebook.com/photo.php?fbid=10116956286492741&set=a.612287952871&type=3",
          id: "10116956286492741"
        },
        {
          type: "photo",
          image_file_uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558666682_10116956286552621_286792986157244784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RDYJqbWShRQQ7kNvwHVqOhX&_nc_oc=AdnoXkH6WTuMAJR3UbSOwyPbMq7JhYqd2Jc-Ket7WUKggFOuQB9ja_fgiSKlAtA0QOk&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfdWqRjAuxnkxzRn15gyT_AUMXqCGyU_oBLagdF8ldrXuA&oe=68F68F01",
          url: "https://www.facebook.com/photo.php?fbid=10116956286452821&set=a.612287952871&type=3",
          id: "10116956286452821"
        },
        {
          type: "photo",
          image_file_uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/559155638_10116956286522681_3048474999283201564_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cMCT6SFtoHgQ7kNvwGFZBre&_nc_oc=AdlCEa1EXdON0_vkUeMLZogjNVQA1i6zd6sccHLisWMse9Zv4bG03FdkkpqC5OKtwrU&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AffgsSoDxxITBiFb7f0VYeKkbj1wA73h3gha1o31wenfDw&oe=68F6AB06",
          url: "https://www.facebook.com/photo.php?fbid=10116956286442841&set=a.612287952871&type=3",
          id: "10116956286442841"
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
      album_preview: null
    }
  ]);

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

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-1 mt-3 rounded-lg overflow-hidden">
          {images.map((image: any, index: any) => (
            <img 
              key={index}
              src={image.image_file_uri} 
              alt={`Post ${index + 1}`} 
              className="w-full h-64 object-cover"
            />
          ))}
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-1 mt-3 rounded-lg overflow-hidden">
          <img 
            src={images[0].image_file_uri} 
            alt="Post 1" 
            className="row-span-2 h-full object-cover"
          />
          <div className="grid grid-rows-2 gap-1">
            <img 
              src={images[1].image_file_uri} 
              alt="Post 2" 
              className="h-32 object-cover"
            />
            <img 
              src={images[2].image_file_uri} 
              alt="Post 3" 
              className="h-32 object-cover"
            />
          </div>
        </div>
      );
    }

    // For 4 or more images
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

  return (
    <div className="space-y-6">
      {/* Posts */}
      {posts.map((post: any) => (
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
                  src={posts[0].author.profile_picture_url}
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
  );
};

export default Posts;