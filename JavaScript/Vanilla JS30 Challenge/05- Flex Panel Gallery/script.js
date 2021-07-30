const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    // this.classList.toggle('open');
    // The toggle() method of the DOMTokenList interface removes a given token from the list and returns false . If token doesn't exist it's added and the function returns true .
    this.classList.toggle('open');
}

function toggleActive(e){
    // // console.log(e)
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));