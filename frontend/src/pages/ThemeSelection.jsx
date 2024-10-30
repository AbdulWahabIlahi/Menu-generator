import React, { useState } from 'react';

const themes = [
  {
    id: 'theme1',
    name: 'Midnight',
    image: '/placeholder.svg?height=200&width=300',
    video: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 'theme2',
    name: 'Eclipse',
    image: '/placeholder.svg?height=200&width=300',
    video: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 'theme3',
    name: 'Nebula',
    image: '/placeholder.svg?height=200&width=300',
    video: '/placeholder.svg?height=200&width=300'
  }
];

const DarkThemeSelector = () => {
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-white">Choose Your Theme</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                selectedTheme === theme.id ? 'ring-2 ring-purple-700' : ''
              } hover:shadow-purple-900/30 hover:shadow-xl`}
              onMouseEnter={() => setHoveredTheme(theme.id)}
              onMouseLeave={() => setHoveredTheme(null)}
            >
              <div className="relative w-full h-48">
                <img 
                  src={theme.image} 
                  alt={theme.name} 
                  className="w-full h-full object-cover"
                />
                {hoveredTheme === theme.id && (
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={theme.video} 
                    autoPlay 
                    loop 
                    muted 
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-3 text-white">{theme.name}</h2>
                <button 
                  onClick={() => setSelectedTheme(theme.id)}
                  className={`w-full px-4 py-2 rounded-md transition-colors duration-300 ${
                    selectedTheme === theme.id 
                      ? 'bg-purple-900 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-purple-900/50 hover:text-white'
                  }`}
                >
                  {selectedTheme === theme.id ? 'Selected' : 'Select Theme'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkThemeSelector;