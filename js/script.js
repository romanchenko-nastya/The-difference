const contentLinks = document.querySelectorAll('[data-goto]');
if (contentLinks.length > 0){
    contentLinks.forEach(contentLink => {
        contentLink.addEventListener('click', onContentLinkClick);

    });
    function onContentLinkClick (e){
        const contentLink = e.target;
        if (contentLink.dataset.goto && document.querySelector(contentLink.dataset.goto)){
            const gotoBlock = document.querySelector(contentLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu){
    const headerMenu = document.querySelector('.menu__body');
    iconMenu.addEventListener('click',function (e){
        iconMenu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        headerMenu.classList.toggle('_active');
    })
}
const iconSearch = document.querySelector('.search__icon');
if (iconSearch){
    const searchForm = document.querySelector('.search-form__input');
    iconSearch.addEventListener('click',function (e){
        iconSearch.classList.toggle('_active');
        searchForm.classList.toggle('_active');
    })
}