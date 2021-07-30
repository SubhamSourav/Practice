
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

    // Interpolated
    console.log('Hello I am a %s string' , 67)

    // Styled
    console.log("%c I am Some Great Text" , 'font-size:50px;color:red;');
    
    // warning!
    console.warn("oh no")
    
    // Error :|
    console.error("error")
    
    // Info
    console.info('fucyivub');
    
    // Testing
    console.assert(1===2 , 'That is wrong!');
    
    // clearing
    console.clear();
    
    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.dir(p);

    console.clear();
    
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    // Grouping together

    dogs.forEach(dog =>{
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('wes');
    console.count('subham');
    console.count('wes');
    console.count('subham');
    console.count('wes');
    
    // timing

    console.time('fetching data');

    fetch('https://api.github.com/users/wesbos').then(data => data.json())
    .then(data => console.timeEnd('fetching data'));

    console.table(dogs)