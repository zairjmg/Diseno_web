var list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach(function (item) { return item.classList.remove('active'); });
    this.classList.add('active');
}
list.forEach(function (item) { return item.addEventListener('click', activeLink); });
