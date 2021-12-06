import React from 'react';

const AnimalFriends = () => {
    const animals = ['야옹', '멍', '짹', '삐약'];
    const animalList = animals.map(animal => <li key={animal.id}>{animal}</li>);

    return <ul>{animalList}</ul>;
}

export default AnimalFriends;