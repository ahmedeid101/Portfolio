import { FiMonitor } from "react-icons/fi";

// Modern device frame component
export const DeviceFrame = ({ children, type = 'browser' }) => {
    if (type === 'browser') {
      return (
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Browser Header */}
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-600">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white dark:bg-gray-600 rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-300 text-center">
                https://project-demo.com
              </div>
            </div>
            <div className="flex gap-2">
              <FiMonitor className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          {/* Browser Content */}
          <div className="relative overflow-hidden">
            {children}
          </div>
        </div>
      );
    }

    if (type === 'laptop') {
      return (
        <div className="relative">
          {/* Laptop Screen */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="relative">
              {children}
            </div>
          </div>
          {/* Laptop Base */}
          <div className="h-2 bg-gray-800 rounded-b-lg mx-8"></div>
          <div className="h-1 bg-gray-700 rounded-b-lg mx-12"></div>
          <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto mt-1"></div>
        </div>
      );
    }

    return children;
  };  
  
  //Mockup frame component
  export const MockupFrame = ({ children, device = 'desktop' }) => {
    const deviceStyles = {
      desktop: 'rounded-xl shadow-2xl',
      laptop: 'rounded-lg shadow-2xl',
      tablet: 'rounded-lg shadow-xl',
      phone: 'rounded-xl shadow-xl'
    };
  
    return (
      <div className={`relative ${deviceStyles[device]} overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800`}>
        {/* Mockup Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800/90 backdrop-blur-sm flex items-center px-4 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-32 h-4 bg-gray-700 rounded-md"></div>
          </div>
        </div>
        {children}
      </div>
    );
  };