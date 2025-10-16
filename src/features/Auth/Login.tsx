import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';
import Logo from '@/assets/icons/LogoPharo.png';
import '@/index.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="login-container rounded-lg">
            <div className="login-grid">
                
                {/* الجانب الأيسر - الصورة والترحيب */}
                <div className="login-left">
                    {/* الشعار */}
                    <div className="logo-wrapper">
                        <div className="logo-glow"></div>
                        <div className="logo-main">
                            <img 
                                src={Logo} 
                                alt="Pharaoh Social" 
                                className="logo-image"
                            />
                        </div>
                    </div>

                    {/* النص الترحيبي */}
                    <div className="welcome-section">
                        <h1 className="welcome-title">
                            Welcome to
                            <span className="brand-name">
                                Pharaoh Social
                            </span>
                        </h1>
                        
                        <p className="welcome-description">
                            Connect with friends, share your moments, and discover amazing content.
                        </p>

                        {/* المميزات */}
                        <div className="features-list">
                            {[
                                "Connect with friends instantly",
                                "Share your special moments", 
                                "Discover new communities",
                                "Fast and secure platform"
                            ].map((feature, index) => (
                                <div 
                                    key={index}
                                    className="feature-item"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <Sparkles className="feature-icon" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* الجانب الأيمن - نموذج Login */}
                <div className="login-right">
                    <div className="login-form-container">
                        
                        {/* Header */}
                        <div className="form-header">
                            <h2 className="form-title">
                                Welcome Back
                            </h2>
                            <p className="form-subtitle">
                                Sign in to your account
                            </p>
                        </div>

                        {/* نموذج Login */}
                        <form onSubmit={handleSubmit} className="login-form">
                            
                            {/* حقل الإيميل */}
                            <div className="input-group">
                                <label className="input-label">Email Address</label>
                                <div className="input-wrapper">
                                    <Mail className="input-icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="login-input"
                                        required
                                    />
                                </div>
                            </div>

                            {/* حقل الباسوورد */}
                            <div className="input-group">
                                <label className="input-label">Password</label>
                                <div className="input-wrapper">
                                    <Lock className="input-icon" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className="login-input"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="password-toggle"
                                    >
                                        {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="checkbox-label">Remember me</span>
                                </label>
                                <a href="#" className="forgot-password">
                                    Forgot password?
                                </a>
                            </div>

                            {/* زر Login */}
                            <Link to = "/home">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="login-button"
                            >
                                {isLoading ? (
                                    <div className="button-loading">
                                        <div className="loading-spinner"></div>
                                        <span>Login...</span>
                                    </div>
                                ) : (
                                    "Login"
                                )}
                            </button>
                            </Link>
                            

                            {/* Sign Up Link */}
                            <div className="signup-link">
                              <Link to="/Register">
                                <p>
                                    Don't have an account?{' '}
                                    <span className="signup-text">
                                        Register
                                    </span>
                                </p>
                              </Link>
                            </div>
                        </form>

                        {/* Social Login */}
                        <div className="social-login">
                            <p className="social-divider">Or continue with</p>
                            <div className="social-buttons">
                                {['Google', 'Facebook'].map((provider) => (
                                    <button
                                        key={provider}
                                        className="social-button"
                                    >
                                        <div className="social-icon"></div>
                                        <span>{provider}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;