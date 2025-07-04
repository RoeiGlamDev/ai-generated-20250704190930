// Get all elements with the class "manga-story"
const mangaStories = document.querySelectorAll('.manga-story');

// Add event listener to each manga story
mangaStories.forEach((story) => {
    story.addEventListener('mouseover', () => {
        story.classList.add('fade-in');
    });
});

// Add event listener to the hero video
const heroVideo = document.querySelector('#hero video');
heroVideo.addEventListener('loadeddata', () => {
    heroVideo.play();
});

// Add event listener to the window
window.addEventListener('load', () => {
    // Add fade-in animation to the hero section
    const hero = document.querySelector('#hero');
    hero.classList.add('fade-in');
});