$(document).ready(function() {
    let characters = [];

    // Fetch all characters from the new API
    $.ajax({
        url: 'https://akabab.github.io/starwars-api/api/all.json',
        method: 'GET',
        success: function(data) {
            characters = data;
        },
        error: function() {
            $('#character-info').html('<p>Failed to fetch character data. Please try again.</p>');
        }
    });

    $('#generate-btn').click(function() {
        if (characters.length === 0) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * characters.length);
        const character = characters[randomIndex];

        const characterInfo = `
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <h2>${character.name}</h2>
            <p><strong>Species:</strong> ${character.species}</p>
            <p><strong>Homeworld:</strong> ${character.homeworld}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Year of Birth:</strong> ${character.born}</p>
        `;
        $('#character-info').html(characterInfo);
    });
});