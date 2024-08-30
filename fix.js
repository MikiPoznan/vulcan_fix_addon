function toggleDarkMode() {
    const mainElement = document.querySelector('.app__main');
        mainElement.classList.add('dark-theme');
}
const style = document.createElement('style');
style.innerHTML = `
    .app__main.dark-theme * {
        box-shadow: none !important; 
    }
    .header__tools{
    color: #d0d6b5;
    }        
    `;
document.head.appendChild(style);
toggleDarkMode()





