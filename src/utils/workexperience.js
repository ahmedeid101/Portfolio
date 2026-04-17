export const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

// Helper function to get color based on card type
export const getGradientColors = (index) => {
    const gradients = [
        { from: "from-blue-500", to: "to-blue-600", light: "from-blue-50 to-blue-100", border: "border-blue-200" },
        { from: "from-green-500", to: "to-green-600", light: "from-green-50 to-green-100", border: "border-green-200" },
        { from: "from-purple-500", to: "to-purple-600", light: "from-purple-50 to-purple-100", border: "border-purple-200" },
        { from: "from-orange-500", to: "to-orange-600", light: "from-orange-50 to-orange-100", border: "border-orange-200" },
        { from: "from-pink-500", to: "to-pink-600", light: "from-pink-50 to-pink-100", border: "border-pink-200" },
        { from: "from-teal-500", to: "to-teal-600", light: "from-teal-50 to-teal-100", border: "border-teal-200" }
    ];
    return gradients[index % gradients.length];
};