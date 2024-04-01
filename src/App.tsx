import './App.css';
import styled from 'styled-components';
import { Header} from '../src/layout/header/Header';
import { Main } from '../src/layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contact } from './layout/section/contacts/Contacts';
import { Slogan } from './layout/section/slogan/Slogan';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
            
        </div>
    );
}

export default App;