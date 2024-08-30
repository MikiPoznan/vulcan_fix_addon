function changeColor(items, color) {
    for (let i = 0; i < items.length; i++) {   
        items[i].style.background = color;
    }
}
function removeBorder(items){
    for(let i=0; i<items.length; i++){
        items[i].style.borderTop ="0px";
        items[i].style.borderBottom ="0px";
    }
}
function changebgcolor(items, color) {
    for (let i = 0; i < items.length; i++) {   
        var style = items[i].style;
        style.backgroundColor = color;
        style.background = color;
        style.borderRadius= "5px";
        removeBorder(items[i]);
    } 
}
function clear(){
    var zreal = document.querySelectorAll('.zrealizowane');
    var odwol = document.querySelectorAll('.odwolane')
    var free = document.querySelectorAll('.plan-scheduler-cell__unavailable');
    var conf = document.querySelectorAll('.cell--multi--conflicted');
    var freq = document.querySelectorAll('.frequency-position__one-item')
    removeBorder(conf);
   // removeBorder(freq);
    changeColor(free, "rgba(0, 0, 0, 0)");
    changebgcolor(zreal, "rgb(59, 51, 85,0.2)");
    changebgcolor(odwol, "rgb(152, 95, 111,0.2)");
}
function cellfix(){
    const kolumna = document.querySelectorAll('.wolne');
    const cells = document.querySelectorAll( '.plan-scheduler-cell__free-day:not(.plan-scheduler-cell__current)' );    
    for(let i = 0; i < kolumna.length; i++){
        kolumna[i].style.borderRadius= "25px";
    }
    changeColor(kolumna, "rgba(93, 93, 129, 0.21)");
    changeColor(cells, "rgba(93, 93, 129, 0.21)");
    clear();
}
document.addEventListener("click", (event) => {
    clear();
});
function change(){
    var color = "#439775";
    const svgElements = document.querySelectorAll('svg');
    var elements = document.querySelectorAll('*');
    elements.forEach(function(element) {
        if (window.getComputedStyle(element).color !== color && element.closest('.header__tools') == null&& element.closest('.wider--oceny') == null) {//wider--oceny
            element.style.color = color;
        }
    });
    svgElements.forEach(function(svgElement) {
        svgElement.setAttribute('fill', '#D0D6B5');
    });

}
function removeElementByClass(className) {
    var element = document.querySelector('.' + className);
    if (element) {
        element.remove();
    }
}
setInterval(function checkForTargetText() {
    var elements = document.querySelectorAll('*');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent === "Panel ucznia" || elements[i].textContent === "Panel wiadomości") {
            change();
            cellfix();
            removeElementByClass('column.current.wolne');
            clearInterval(this);
            break;
        }
    }
}, 50);

