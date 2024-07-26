import './index.css';
import Pokemon from './components/Pokemon';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {

    const [type, setType] = useState("Normal");
    const [pokemonList, setPokemonList] = useState(
        [
            {
                dex: 252,
                name: "Treeko",
                type: "Grass",
                img: "https://img.pokemondb.net/artwork/alt/treecko-oras.jpg"
            },
            {
                dex: 253,
                name: "Grovyle",
                type: "Grass",
                img: "https://img.pokemondb.net/artwork/large/grovyle.jpg"
            },
            {
                dex: 254,
                name: "Sceptile",
                type: "Grass",
                img: "https://img.pokemondb.net/artwork/large/sceptile.jpg"
            },
            {
                dex: 255,
                name: "Torchic",
                type: "Fire",
                img: "https://img.pokemondb.net/artwork/large/torchic.jpg"
            },
            {
                dex: 256,
                name: "Combusken",
                type: "Fire, Fighting",
                img: "https://img.pokemondb.net/artwork/large/combusken.jpg"
            },
            {
                dex: 257,
                name: "Blaziken",
                type: "Fire, Fighting",
                img: "https://img.pokemondb.net/artwork/large/blaziken.jpg"
            },
            {
                dex: 258,
                name: "Mudkip",
                type: "Water",
                img: "https://img.pokemondb.net/artwork/large/mudkip.jpg"
            },
            {
                dex: 259,
                name: "Marshtomp",
                type: "Water, Ground",
                img: "https://img.pokemondb.net/artwork/large/marshtomp.jpg"
            },
            {
                dex: 260,
                name: "Swampert",
                type: "Water, Ground",
                img: "https://img.pokemondb.net/artwork/large/swampert.jpg"
            },
        ]
    );

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
                        <div className="flex flex-wrap justify-center">
                            {pokemonList.map((mon) => {
                                return (< Pokemon
                                    key={uuidv4()}
                                    name={mon.name}
                                    type={mon.type}
                                    dex={mon.dex}
                                    img={mon.img}
                                />);
                            })}
                        </div>
                    </>
                ) : (
                    <p>You cannot see the Pokemon.</p>
                )
            }
        </div>
    );
}

export default App;
