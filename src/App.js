import './App.css';
import Pokemon from './components/Pokemon';
import {useState} from 'react';

function App() {
    
    const [type, setType] = useState("Normal");

    const showPokemon = true;
    return (
        <div className="App">
            {
                showPokemon ? (
                    <>
                        <input type='text' onChange={(e) => {
                            console.log(e.target.value);
                            setType(e.target.value);                            
                        }}/>
                        <Pokemon name="Treeko" type="Grass"/>
                        <Pokemon name="Torchic" type={type}/>
                        <Pokemon name="Mudkip"/>
                    </>
                ) : (
                    <p>You cannot see the Pokemon.</p>
                )
            }
        </div>
    );
}

export default App;
