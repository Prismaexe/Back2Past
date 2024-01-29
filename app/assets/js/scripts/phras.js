document.addEventListener('DOMContentLoaded', function() {
    var greetingContainer = document.createElement('div');
    greetingContainer.id = 'greetingContainer';
    greetingContainer.style.textAlign = 'center';
    greetingContainer.style.padding = '20px';
    greetingContainer.style.color = '#fff';

    // Ajoutez une logique pour choisir dynamiquement la phrase
    var phrases = [
        { text: "Mhhhh..", author: "@Prisma" },
        { text: "1.., 2..., 3..., BOOM", author: "@Prisma" },
        { text: "Merci :)", author: "@Prisma" },
        { text: "Il pleut aujourd'hui, jouons?", author: "@Prisma" }
    ];

    var randomPhraseIndex = Math.floor(Math.random() * phrases.length);
    var selectedPhrase = phrases[randomPhraseIndex];

    // Modifiez l'id pour correspondre à celui dans le HTML
    var greetingMessage = document.getElementById('greetingMessage');
    var greetingAuthor = document.getElementById('greetingAuthor'); // Added line

    if (greetingMessage && greetingAuthor) {
        greetingMessage.innerHTML = selectedPhrase.text;
        greetingMessage.style.top = '20px'; // Added line

        greetingAuthor.innerHTML = selectedPhrase.author;
        greetingAuthor.style.position = 'absolute'; // Added line
        greetingAuthor.style.top = '30px'; // Added line

        document.body.appendChild(greetingContainer);
    }
});
