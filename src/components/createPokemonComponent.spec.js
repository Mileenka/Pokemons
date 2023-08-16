/**
 * @jest-environment jsdom
 */

import createPokemonComponent from './createPokemonComponent.js';

describe('createPokemonComponent', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    test('creates a container with the correct class and content', () => {
        const pokemon = {
            name: 'Pikachu',
            sprites: {
                other: {
                    home: {
                        front_default: 'https://example.com/pikachu.png'
                    }
                }
            }
        };

        const result = createPokemonComponent(pokemon);

        expect(result).toBeInstanceOf(HTMLDivElement);

        const pokeImg = result.querySelector('.pokeImg');
        expect(pokeImg).not.toBeNull();

        const image = pokeImg.querySelector('img');
        expect(image).not.toBeNull();
        expect(image.src).toEqual(pokemon.sprites.other.home.front_default);
        expect(image.alt).toEqual('pokemon image');

        const pokeName = result.querySelector('.pokeName');
        expect(pokeName).not.toBeNull();
        expect(pokeName.innerText).toEqual(pokemon.name);
    });
});
