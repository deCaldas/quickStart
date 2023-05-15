import "./App.css"
import MyButton from "./components/button";
import AboutPage from "./components/aboutPage";
import Profile from "./components/profile";


export default function App() {
  
  return (
    <main className="App">
      <header className="App-header" >
      <h1>Welcome to my app</h1>
      <Profile />
      <AboutPage />
      <MyButton />
      </header>
    </main>
  );  
}


