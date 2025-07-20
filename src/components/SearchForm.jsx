import React from "react";

export default function SearchForm({ onSearch }) {
    const [realm, setRealm] = React.useState('');
    const [character, setCharacter] = React.useState('');

    function handleSubmit(e) {
            e.preventDefault();
            onSearch({ realm, character });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Reino (Realm)"
                value={realm}
                onChange={e => setRealm(e.target.value)}
                required
            />
            <input
                placeholder="Personagem (Character)"
                value={character}
                onChange={e => setCharacter(e.target.value)}
                required
            />
            <button type="submit">Buscar Montarias</button>
        </form>
    );
}