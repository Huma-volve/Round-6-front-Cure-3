import { useState } from 'react';
import { User, Edit2, Briefcase, Globe, CheckCircle } from 'lucide-react';
import Posts from './Posts';

const Profile = () => {
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

  // Sample photos from Meta/Facebook context
  const photos = [
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558982136_10116950903111081_8980398027339277611_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f1aCUlymYtMQ7kNvwEfSmni&_nc_oc=AdmKDG3-w8L2dHJ4TCEBZRNidTauvcqG6q3Dw0UvfS3avTGgYUSr0ANAkW27mvbYFOI&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfeJn-TvOb9yF-gFbeUioX5Z2KSrNbi_BsDEwoaNpt7NEA&oe=68F680A0",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/557119842_10116956286542641_8033060557856486868_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7XZH4W4938cQ7kNvwHjCg5F&_nc_oc=AdmWx4Ay4XLKmM8npdLa7c-4uvNEKtsDW3YfsAXSkJiT1cmCLglldzj0IOrleUX7Rsg&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_Aff5fLyj5uWN8ciCVCgSsxtxmmrVOliYj7H-ym8U6H-gtA&oe=68F67D63",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558666682_10116956286552621_286792986157244784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RDYJqbWShRQQ7kNvwHVqOhX&_nc_oc=AdnoXkH6WTuMAJR3UbSOwyPbMq7JhYqd2Jc-Ket7WUKggFOuQB9ja_fgiSKlAtA0QOk&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfdWqRjAuxnkxzRn15gyT_AUMXqCGyU_oBLagdF8ldrXuA&oe=68F68F01",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/559155638_10116956286522681_3048474999283201564_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cMCT6SFtoHgQ7kNvwGFZBre&_nc_oc=AdlCEa1EXdON0_vkUeMLZogjNVQA1i6zd6sccHLisWMse9Zv4bG03FdkkpqC5OKtwrU&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AffgsSoDxxITBiFb7f0VYeKkbj1wA73h3gha1o31wenfDw&oe=68F6AB06",
  ];

  // Sample friends (Meta executives and public figures)
  const friends = [
    { name: "Sheryl Sandberg", title: "Former COO at Meta", avatar: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558982136_10116950903111081_8980398027339277611_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f1aCUlymYtMQ7kNvwEfSmni&_nc_oc=AdmKDG3-w8L2dHJ4TCEBZRNidTauvcqG6q3Dw0UvfS3avTGgYUSr0ANAkW27mvbYFOI&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=rOHQKi8fM3-IJbeu3OrT3A&oh=00_AfeJn-TvOb9yF-gFbeUioX5Z2KSrNbi_BsDEwoaNpt7NEA&oe=68F680A0" },
    { name: "Chris Cox", title: "CPO at Meta", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Mike Schroepfer", title: "Former CTO at Meta", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Priscilla Chan", title: "Co-founder Chan Zuckerberg", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
  ];

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
                    <CheckCircle className="w-5 h-5 " />
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
                
                {/* About Public Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 mb-6">
                  {profile.about.about_public.map((item, index) => (
                    item.text && (
                      <div key={index} className="flex items-center space-x-2 bg-dark-3 px-4 py-2 rounded-full border border-gray-700">
                        {index === 1 ? <Briefcase className="w-4 h-4 text-electric-400" /> : <User className="w-4 h-4 text-electric-400" />}
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )
                  ))}
                  <div className="flex items-center space-x-2 bg-dark-3 px-4 py-2 rounded-full border border-gray-700">
                    <Globe className="w-4 h-4 text-electric-400" />
                    <span className="text-sm">Facebook.com/zuck</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <button className="bg-electric-500 hover:bg-electric-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg">
                    Follow
                  </button>
                  <button className="bg-dark-3 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium border border-gray-600 transition-all duration-200">
                    Message
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
              {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Check-ins'].map((tab) => (
                <button
                  key={tab}
                  className="flex-shrink-0 px-6 py-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-electric-400 transition-all duration-200 font-medium"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column - Intro & Photos */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Intro Card */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Intro</h3>
              <p className="text-gray-300 mb-4">{profile.intro}</p>
              
              <div className="space-y-3">
                {profile.about.about_public.map((item, index) => (
                  item.text && (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-400">
                      {index === 1 ? (
                        <Briefcase className="w-4 h-4 text-electric-400 flex-shrink-0" />
                      ) : (
                        <User className="w-4 h-4 text-electric-400 flex-shrink-0" />
                      )}
                      <span>{item.text}</span>
                    </div>
                  )
                ))}
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Globe className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <a href={profile.url} className="text-electric-400 hover:text-electric-300 w-full overflow-hidden">
                    {profile.url}
                  </a>
                </div>
              </div>

              {isEditing && (
                <button className="w-full mt-4 bg-dark-3 hover:bg-gray-700 text-gray-300 py-2 rounded-lg border border-gray-700 transition-all duration-200 font-medium">
                  Edit Details
                </button>
              )}
            </div>

            {/* Photos Card */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Photos</h3>
                <span className="text-electric-400 text-sm">See all photos</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {photos.slice(0, 9).map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Posts */}
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
                  placeholder="What's on your mind, Mark?"
                  className="flex-1 bg-dark-3 border border-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                />
              </div>
            </div>

            {/* Sample Posts */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{profile.name}</div>
                  <div className="text-gray-400 text-sm">2 hrs ago · 🌎</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                Excited about the future of AI and how it will help bring people closer together. 
                The work our teams are doing at Meta is truly groundbreaking.
              </p>
              
              <div className="bg-dark-3 rounded-lg overflow-hidden mb-4">
                <img
                  src={profile.cover_image}
                  alt="Post content"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <Posts />
          </div>

          {/* Right Column - Friends */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Friends Card */}
            <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Friends</h3>
                <span className="text-electric-400 text-sm">See all friends</span>
              </div>
              
              <div className="space-y-4">
                {friends.map((friend, index) => (
                  <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5 group-hover:from-electric-300 group-hover:to-electric-500 transition-all duration-300">
                      <img
                        src={friend.avatar}
                        alt={friend.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm group-hover:text-electric-400 transition-colors duration-200">
                        {friend.name}
                      </div>
                      <div className="text-gray-400 text-xs">{friend.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Edit Profile Card */}
            {isEditing && (
              <div className="bg-dark-2 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Edit Profile</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 block mb-2">Bio</label>
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

export default Profile;