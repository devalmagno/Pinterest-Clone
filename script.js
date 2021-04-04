const title = document.getElementById('title');

title.onclick = (e) => {
    const name = document.querySelector('.name');
    const hi = document.querySelector('.hi');
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];

    const rando = () => colors[Math.floor(Math.random() * colors.length)];

    name.classList.add('animation');
    name.style.cssText = `
        transform: translateX(5%);
    `

    hi.style.cssText = `
        color: ${rando()}
    `
}