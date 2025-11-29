import { useState } from 'react'
import Window from './components/Window'
import './App.css'

function App() {
  const [windows, setWindows] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [windowCounter, setWindowCounter] = useState(0);

  const apps = [
    {
      id: 'youtube',
      name: '📺 Playlist',
      color: '#fff',
      content: (
        <iframe
          className="youtube-embed"
          src="https://www.youtube.com/embed/videoseries?list=PL5vhHYNVZ0BDeGx2LiOq3X3QUpMFYyHD5"
          title="YouTube Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    },
    {
      id: 'app2',
      name: '🎨 App 2',
      color: '#FFB3BA',
      content: <div className="placeholder-content">add button 2 functionality later</div>
    },
    {
      id: 'app3',
      name: '🎵 App 3',
      color: '#BAFFC9',
      content: <div className="placeholder-content">add button 3 functionality later</div>
    },
    {
      id: 'app4',
      name: '✨ App 4',
      color: '#BAE1FF',
      content: <div className="placeholder-content">add button 4 functionality later</div>
    },
    {
      id: 'app5',
      name: '🚀 App 5',
      color: '#FFFFBA',
      content: <div className="placeholder-content">add button 5 functionality later</div>
    }
  ];

  const openApp = (app) => {
    const newWindow = {
      id: `${app.id}-${windowCounter}`,
      title: app.name,
      content: app.content,
      color: app.color,
      position: {
        x: 100 + (windowCounter * 30),
        y: 100 + (windowCounter * 30)
      }
    };
    setWindows([...windows, newWindow]);
    setWindowCounter(windowCounter + 1);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBackgroundImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="desktop"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="menu-bar">
        <div className="menu-bar-left">
          <span className="menu-item logo">🌊 A New Vibe</span>
        </div>
        <div className="menu-bar-right">
          <label className="menu-item bg-change">
            🖼️ Change BG
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      {windows.map(window => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          initialPosition={window.position}
          color={window.color}
        >
          {window.content}
        </Window>
      ))}

      <div className="dock">
        {apps.map(app => (
          <button
            key={app.id}
            className="dock-icon"
            onClick={() => openApp(app)}
            title={app.name}
          >
            {app.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
