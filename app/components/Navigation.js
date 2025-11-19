export default function Navigation({ activeSection, scrollToSection }) {
  const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`block w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index 
              ? 'bg-blue-500 scale-125' 
              : 'bg-gray-400 hover:bg-gray-600'
          }`}
          title={section}
        />
      ))}
    </div>
  )
}