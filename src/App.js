import './App.css';
import './Post/Post';
function App() {
  return (
    <div className="app">
      <header className="app__header">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="img"/>
      </header>
      <Post />
    </div>
  );
}

export default App;
