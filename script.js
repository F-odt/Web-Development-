// script.js

function updateSectionContent(sectionId, newText) {
    const section = document.querySelector(`#${sectionId} p`);
    if (section) {
        section.textContent = newText;
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}


window.onload = function() {
    updateSectionContent('about-me', "Hi there! I'm a passionate programming student learning and building exciting projects. Take a walk through my portfolio");
};

