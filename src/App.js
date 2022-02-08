import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <AboutMe/>
        <Projects />
        <Resume/>
        <Contact/>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
