import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './features/Layout/Layout'
import HomePage from './features/Home/Home'
import Network from './features/Network/Network'
import Notifications from './features/Notifications/Notifications'
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'

const router = createBrowserRouter([
  { path: "/", element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <HomePage /> },
      { path: "network", element: <Network /> },
      { path: "notifications", element: <Notifications /> },
      { path: "login", element: <Login /> },
      { path: "Register", element: <Register /> },
    ]
  },
]);


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "محمود أحمد", role: "مطور واجهات أمامية", avatar: "MA", time: "منذ ساعتين" },
      content: `تعلمت اليوم تقنيات متقدمة في React وTypeScript لبناء تطبيقات أكثر قوة واستقراراً.

🔸 استخدام Custom Hooks لإدارة الحالة
🔸 تحسين الأداء باستخدام React.memo  
🔸 TypeScript للكود الأكثر أماناً

ما هي التقنيات التي تفضلونها في مشاريعكم؟`,
      stats: { likes: 124, comments: 24, shares: 8 },
      liked: false,
      saved: false
    },
    {
      id: 2, 
      user: { name: "سارة محمود", role: "مصممة واجهات مستخدم", avatar: "SA", time: "منذ 5 ساعات" },
      content: `شاركوني رأيكم في آخر تصميم لمتجر إلكتروني! 🛍️

🎨 نظام الألوان الدارك مع أزرق كهربائي
📱 تصميم متجاوب يعمل على جميع الشاشات  
⚡ تحسين تجربة المستخدم وسرعة التحميل

أي جزء يعجبكم أكثر في التصميم؟`,
      stats: { likes: 89, comments: 16, shares: 3 },
      liked: true,
      saved: false
    },
    {
      id: 1,
      user: { name: "محمود أحمد", role: "مطور واجهات أمامية", avatar: "MA", time: "منذ ساعتين" },
      content: `تعلمت اليوم تقنيات متقدمة في React وTypeScript لبناء تطبيقات أكثر قوة واستقراراً.

🔸 استخدام Custom Hooks لإدارة الحالة
🔸 تحسين الأداء باستخدام React.memo  
🔸 TypeScript للكود الأكثر أماناً

ما هي التقنيات التي تفضلونها في مشاريعكم؟`,
      stats: { likes: 124, comments: 24, shares: 8 },
      liked: false,
      saved: false
    },
    {
      id: 2, 
      user: { name: "سارة محمود", role: "مصممة واجهات مستخدم", avatar: "SA", time: "منذ 5 ساعات" },
      content: `شاركوني رأيكم في آخر تصميم لمتجر إلكتروني! 🛍️

🎨 نظام الألوان الدارك مع أزرق كهربائي
📱 تصميم متجاوب يعمل على جميع الشاشات  
⚡ تحسين تجربة المستخدم وسرعة التحميل

أي جزء يعجبكم أكثر في التصميم؟`,
      stats: { likes: 89, comments: 16, shares: 3 },
      liked: true,
      saved: false
    },
    {
      id: 1,
      user: { name: "محمود أحمد", role: "مطور واجهات أمامية", avatar: "MA", time: "منذ ساعتين" },
      content: `تعلمت اليوم تقنيات متقدمة في React وTypeScript لبناء تطبيقات أكثر قوة واستقراراً.

🔸 استخدام Custom Hooks لإدارة الحالة
🔸 تحسين الأداء باستخدام React.memo  
🔸 TypeScript للكود الأكثر أماناً

ما هي التقنيات التي تفضلونها في مشاريعكم؟`,
      stats: { likes: 124, comments: 24, shares: 8 },
      liked: false,
      saved: false
    },
    {
      id: 2, 
      user: { name: "سارة محمود", role: "مصممة واجهات مستخدم", avatar: "SA", time: "منذ 5 ساعات" },
      content: `شاركوني رأيكم في آخر تصميم لمتجر إلكتروني! 🛍️

🎨 نظام الألوان الدارك مع أزرق كهربائي
📱 تصميم متجاوب يعمل على جميع الشاشات  
⚡ تحسين تجربة المستخدم وسرعة التحميل

أي جزء يعجبكم أكثر في التصميم؟`,
      stats: { likes: 89, comments: 16, shares: 3 },
      liked: true,
      saved: false
    },
    {
      id: 1,
      user: { name: "محمود أحمد", role: "مطور واجهات أمامية", avatar: "MA", time: "منذ ساعتين" },
      content: `تعلمت اليوم تقنيات متقدمة في React وTypeScript لبناء تطبيقات أكثر قوة واستقراراً.

🔸 استخدام Custom Hooks لإدارة الحالة
🔸 تحسين الأداء باستخدام React.memo  
🔸 TypeScript للكود الأكثر أماناً

ما هي التقنيات التي تفضلونها في مشاريعكم؟`,
      stats: { likes: 124, comments: 24, shares: 8 },
      liked: false,
      saved: false
    },
    {
      id: 2, 
      user: { name: "سارة محمود", role: "مصممة واجهات مستخدم", avatar: "SA", time: "منذ 5 ساعات" },
      content: `شاركوني رأيكم في آخر تصميم لمتجر إلكتروني! 🛍️

🎨 نظام الألوان الدارك مع أزرق كهربائي
📱 تصميم متجاوب يعمل على جميع الشاشات  
⚡ تحسين تجربة المستخدم وسرعة التحميل

أي جزء يعجبكم أكثر في التصميم؟`,
      stats: { likes: 89, comments: 16, shares: 3 },
      liked: true,
      saved: false
    },
  ])



  const handleLike = (postId:number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked,
            stats: { ...post.stats, likes: post.stats.likes + (post.liked ? -1 : 1) }
          }
        : post
    ))
  }

  const handleSave = (postId:number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, saved: !post.saved } : post
    ))
  }

  return <>
    {/* <div className="min-h-screen bg-dark-1 text-white">
      <header className="ps-header animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="">
                <img src={Logo} className='w-10 h-10 rounded-full' alt="" />
              </div>
              <h1 className="text-lg font-bold electric-text animate-electric-glow">Pharaoh Social</h1>
            </div>

            <div className="flex-1 max-w-md mx-6">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="ps-search-input w-full"
                />
              </div>
            </div>

            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`ps-nav-item flex items-center space-x-2 ${
                    activeNav === item.id ? 'active' : ''
                  }`}
                >
                  {item.icon}
                  <span className="hidden sm:block">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-1">
              <button className="ps-btn-ghost p-2 relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-electric-400 rounded-full border border-dark-1"></span>
              </button>
              <button className="ps-btn-ghost p-2">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        <aside className="ps-sidebar animate-slide-in">
          <div className="p-5">
            <div className="ps-card p-5 text-center mb-5 animate-float">
              <div className="ps-avatar w-16 h-16 mx-auto mb-3">
                <span className="text-base">MA</span>
              </div>
              <h2 className="text-base font-bold text-white mb-1">محمود أحمد</h2>
              <p className="text-gray-400 text-xs mb-3">مطور واجهات أمامية</p>
              <button className="ps-btn-secondary w-full text-sm">تعديل الملف</button>
            </div>

            <div className="ps-card p-5 mb-5">
              <h3 className="font-bold text-white mb-3 electric-text text-sm">الإحصائيات</h3>
              <div className="space-y-2">
                <div className="ps-stats-item flex justify-between items-center p-3">
                  <span className="text-gray-400 text-sm">المتابعون</span>
                  <span className="electric-text font-bold text-sm">1.2K</span>
                </div>
                <div className="ps-stats-item flex justify-between items-center p-3">
                  <span className="text-gray-400 text-sm">المتابَعون</span>
                  <span className="text-white font-bold text-sm">584</span>
                </div>
                <div className="ps-stats-item flex justify-between items-center p-3">
                  <span className="text-gray-400 text-sm">البوستات</span>
                  <span className="text-white font-bold text-sm">47</span>
                </div>
              </div>
            </div>

            <div className="ps-card p-5">
              <h3 className="font-bold text-white mb-3 electric-text text-sm">روابط سريعة</h3>
              <div className="space-y-1">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="ps-btn-ghost w-full flex items-center justify-between p-2 text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-400">
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                    </div>
                    {link.count && (
                      <span className="bg-electric-400/20 text-electric-400 text-xs px-1.5 py-0.5 rounded-full">
                        {link.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 mr-64 min-h-screen p-5">
          <div className="max-w-2xl mx-auto">
            <div className="ps-card p-5 mb-5 animate-fade-in">
              <div className="flex space-x-3">
                <div className="ps-avatar w-10 h-10">
                  <span className="text-xs">Y</span>
                </div>
                <div className="flex-1">
                  <textarea 
                    placeholder="شارك أفكارك مع المجتمع..." 
                    rows={2}
                    className="ps-input w-full resize-none text-sm"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-3">
                      <button className="ps-btn-ghost flex items-center space-x-1 text-xs">
                        <Camera className="w-3 h-3" />
                        <span>صورة</span>
                      </button>
                      <button className="ps-btn-ghost flex items-center space-x-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>موقع</span>
                      </button>
                    </div>
                    <button className="ps-btn-primary px-4 py-1.5 text-sm">
                      نشر
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {posts.map((post) => (
                <div key={post.id} className="ps-post-card p-5 animate-fade-in">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="ps-avatar w-10 h-10">
                        <span className="text-xs">{post.user.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-base electric-text hover:text-electric-400 transition-colors cursor-pointer">
                          {post.user.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className="text-gray-400 text-xs">{post.user.time}</span>
                          <span className="text-gray-600">•</span>
                          <span className="electric-text text-xs">{post.user.role}</span>
                        </div>
                      </div>
                    </div>
                    <button className="ps-btn-ghost p-1.5">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-3">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-400 text-xs mb-3">
                    <span>{post.stats.likes} إعجاب</span>
                    <span>{post.stats.comments} تعليق</span>
                    <span>{post.stats.shares} مشاركة</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`ps-btn-ghost flex items-center space-x-1 px-3 py-1.5 text-xs ${
                        post.liked ? 'text-red-400' : ''
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${post.liked ? 'fill-current' : ''}`} />
                      <span>إعجاب</span>
                    </button>
                    
                    <button className="ps-btn-ghost flex items-center space-x-1 px-3 py-1.5 text-xs">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>تعليق</span>
                    </button>
                    
                    <button className="ps-btn-ghost flex items-center space-x-1 px-3 py-1.5 text-xs">
                      <Share className="w-3.5 h-3.5" />
                      <span>مشاركة</span>
                    </button>
                    
                    <button 
                      onClick={() => handleSave(post.id)}
                      className={`ps-btn-ghost flex items-center space-x-1 px-3 py-1.5 text-xs ${
                        post.saved ? 'text-electric-400' : ''
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${post.saved ? 'fill-current' : ''}`} />
                      <span>حفظ</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <button className="fixed bottom-6 left-6 w-12 h-12 ps-btn-primary rounded-xl animate-electric-pulse text-sm">
        <span>+</span>
      </button>
    </div> */}
    <RouterProvider router={router} />
    </>
}

export default App