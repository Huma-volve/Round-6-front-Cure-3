import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import Logo from '@/assets/icons/LogoPharo.png';
import '@/index.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
                            Join
                            <span className="brand-name">
                                Pharaoh Social
                            </span>
                        </h1>
                        
                        <p className="welcome-description">
                            Create your account and start connecting with friends around the world.
                        </p>

                        {/* المميزات */}
                        <div className="features-list">
                            {[
                                "Create your personal profile",
                                "Connect with friends instantly", 
                                "Share your special moments",
                                "Join amazing communities"
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

                {/* الجانب الأيمن - نموذج Register */}
                <div className="login-right">
                    <div className="login-form-container">
                        
                        {/* Header */}
                        <div className="form-header">
                            <h2 className="form-title">
                                Create Account
                            </h2>
                            <p className="form-subtitle">
                                Join our community today
                            </p>
                        </div>

                        {/* نموذج Register */}
                        <form onSubmit={handleSubmit} className="login-form">
                            
                            {/* حقل الاسم الكامل */}
                            <div className="input-group">
                                <label className="input-label">Full Name</label>
                                <div className="input-wrapper">
                                    <User className="input-icon" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="login-input"
                                        required
                                    />
                                </div>
                            </div>

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
                                        placeholder="Create a password"
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

                            {/* حقل تأكيد الباسوورد */}
                            <div className="input-group">
                                <label className="input-label">Confirm Password</label>
                                <div className="input-wrapper">
                                    <Lock className="input-icon" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        className="login-input"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="password-toggle"
                                    >
                                        {showConfirmPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" className="checkbox" required />
                                    <span className="checkbox-label">
                                        I agree to the <a href="#" className="terms-link">Terms & Conditions</a>
                                    </span>
                                </label>
                            </div>

                            {/* زر Register */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="login-button"
                            >
                                {isLoading ? (
                                    <div className="button-loading">
                                        <div className="loading-spinner"></div>
                                        <span>Creating Account...</span>
                                    </div>
                                ) : (
                                    "Create Account"
                                )}
                            </button>

                            {/* Login Link */}
                            <div className="signup-link">
                                <Link to="/Login">
                                    <p>
                                        Already have an account?{' '}
                                        <span className="signup-text">
                                            Login
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </form>

                        {/* Social Register */}
                        <div className="social-login">
                            <p className="social-divider">Or sign up with</p>
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

export default Register;