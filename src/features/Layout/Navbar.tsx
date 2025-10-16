import { Calendar, Home, Gamepad2, Bookmark, Settings, User, Users, Search, Bot, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import Logo from "@/assets/icons/LogoPharo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
        { id: 'friends', label: 'Friends', icon: <Users className="w-5 h-5" /> },
        { id: 'games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" /> },
        { id: 'page-events', label: 'Page events', icon: <Calendar className="w-5 h-5" /> },
        { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
        { id: 'Chatbot', label: 'Chatbot', icon: <Bot className="w-5 h-5" /> },
    ]

    const quickLinks = [
        { icon: <Users className="w-4 h-4" />, label: 'Friends', count: '128' },
        { icon: <Calendar className="w-4 h-4" />, label: 'Events', count: '12' },
        { icon: <Bookmark className="w-4 h-4" />, label: 'Saved', count: '23' },
        { icon: <Settings className="w-4 h-4" />, label: 'Settings' },
    ]

    return (
        <>
            <header className="bg-dark-2 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-0.5">
                                <img 
                                    src={Logo} 
                                    className="w-full h-full rounded-full object-cover border-2 border-dark-2" 
                                    alt="Pharaoh Social" 
                                />
                            </div>
                        </div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="flex-1 max-w-md hidden lg:block">
                            <div className="relative ml-10">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input 
                                    type="text" 
                                    placeholder="Search people, posts, events..." 
                                    className="w-[80%] bg-dark-3 text-black border border-gray-700 rounded-full py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link to={item.id}>
                                <button
                                    key={item.id}
                                    onClick={() => setActiveNav(item.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                                        activeNav === item.id 
                                        ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25' 
                                        : 'text-gray-300 hover:bg-dark-3 hover:text-white'
                                    }`}
                                >
                                    {item.icon}
                                    <span className="text-sm font-medium brand-name">{item.label}</span>
                                </button>
                                    </Link>
                            ))}
                        </nav>

                        {/* Notification & Messages - Desktop */}
                        <div className="hidden md:flex items-center space-x-2">
                            <button className="relative p-2 text-gray-300 hover:text-white hover:bg-dark-3 rounded-lg transition-all duration-200">
                                <MessageCircle className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-2"></span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden  p-2 text-gray-300 hover:text-white hover:bg-dark-3 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-dark-2 border-t border-gray-800 animate-slide-down">
                        <div className="container mx-auto px-4 py-4">
                            
                            {/* Mobile Search */}
                            <div className="mb-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        className="w-full bg-dark-3 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveNav(item.id)
                                            setIsMobileMenuOpen(false)
                                        }}
                                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                                            activeNav === item.id 
                                                ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25' 
                                                : 'text-gray-300 hover:bg-dark-3 hover:text-white'
                                        }`}
                                    >
                                        {item.icon}
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </nav>

                            {/* Quick Links in Mobile */}
                            <div className="mt-6 pt-4 border-t border-gray-800">
                                <div className="grid grid-cols-2 gap-2">
                                    {quickLinks.map((link, index) => (
                                        <button
                                            key={index}
                                            className="flex items-center space-x-2 p-3 text-gray-300 hover:bg-dark-3 hover:text-white rounded-lg transition-all duration-200"
                                        >
                                            {link.icon}
                                            <span className="text-sm font-medium">{link.label}</span>
                                            {link.count && (
                                                <span className="bg-electric-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                                    {link.count}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Bottom Navigation for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-2 border-t border-gray-800 backdrop-blur-lg bg-opacity-95 z-40">
                <div className="flex justify-around items-center h-16">
                    {navItems.slice(0, 4).map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 flex-1 mx-1 ${
                                activeNav === item.id 
                                    ? 'text-electric-400' 
                                    : 'text-gray-400'
                            }`}
                        >
                            {item.icon}
                            <span className="text-xs mt-1">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Add padding for bottom nav on mobile */}
            <style>{`
                @media (max-width: 768px) {
                    body {
                        padding-bottom: 64px;
                    }
                }
            `}</style>
        </>
    )
}

export default Navbar