const triggers = document.querySelectorAll('.cool > li');
const backGround = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    // console.log(this.classList)
    setTimeout( ()=>{
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active');
        }
    },150);
    backGround.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCords.height,
        width: dropdownCords.width,
        top: dropdownCords.top - navCoords.top,
        left: dropdownCords.left - navCoords.left,
    };
    // backGround.style.setProperty('width',`${coords.widthpx}px`);
    // backGround.style.setProperty('height',`${coords.height}px`);
    backGround.style.width = `${coords.width}px`;
    backGround.style.height = `${coords.height}px`;
    backGround.style.transform = `translate(${coords.left}px,${coords.top}px)`;

    // console.log(dropdownCords);
}

function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    backGround.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));


