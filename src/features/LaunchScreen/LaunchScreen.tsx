const LaunchScreen = () => {
  return (
    <>
      <section className="bg-black min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          
          {/* الشعار المتحرك */}
          <div className="mb-12 animate-bounce">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* المحتوى */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome to 
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                  Pharaoh Social
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                Your social world, connected. Share, chat, and explore with people who matter.
              </p>
            </div>

            {/* شريط التقدم */}
            <div className="max-w-xs mx-auto">
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse"></div>
              </div>
              <p className="text-cyan-400 text-sm mt-2">Preparing your experience...</p>
            </div>

            {/* معلومات إضافية */}
            <div className="flex justify-center space-x-8 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Social</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchScreen;