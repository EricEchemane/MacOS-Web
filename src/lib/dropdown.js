export function listenToDropdown() {
    let currentOpenDropdown = null;
    const dropdowns = document.querySelectorAll('div.menu-wrapper');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (currentOpenDropdown) {
                currentOpenDropdown.classList.remove('show');
            }
            currentOpenDropdown = dropdown;
            dropdown.classList.add('show');
        });
    });

    window.onclick = (e) => {
        if (e.target.classList.contains('menu-item')) {
            currentOpenDropdown.classList.remove('show');
            return;
        }
        if (currentOpenDropdown && !currentOpenDropdown.contains(e.target)) {
            currentOpenDropdown.classList.remove('show');
        }
    };
}