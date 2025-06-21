function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        let subMenu = item.nextElementSibling;
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    });
});
