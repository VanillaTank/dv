window.onload = function () {
    const hoverEffect = document.querySelectorAll('.hoverEffect');

    hoverEffect.forEach(item => {
        let title;
        item.addEventListener('mouseover', () => {
            let currentItem = item;
            let parentLink = currentItem.parentNode.parentNode;
            title = parentLink.querySelector('.section__menu-menu-title');
            title.classList.add('hidden');
        })
        item.addEventListener('mouseout', () => {
            title.classList.remove('hidden');
        })
    })


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        hoverEffect.forEach( item => {
            item.style = "display: none";
        })  
    }
}