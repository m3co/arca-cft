// Tables START
let tableHeaderArray = document.getElementsByClassName('table__part');

for (let i = 0; i < tableHeaderArray.length; i++) {
    tableHeaderArray[i].addEventListener('click', (e) => {
        if(tableHeaderArray[i].querySelector('.svg') !== null) {
            if(!tableHeaderArray[i].querySelector('.svg').classList.contains('rotate')){
                Array.prototype.forEach.call(tableHeaderArray, function (e) {
                    if(e.querySelector('.svg') !== null){
                        e.querySelector('.svg').classList.remove('rotate')
                    }
                });
            }
            tableHeaderArray[i].querySelector('.svg').classList.toggle('rotate');
        }
    })
}

//** hidden table
let tableBodyArray = document.getElementsByClassName('table__row-part');

for (let i = 0; i < tableBodyArray.length; i++) {
    tableBodyArray[i].addEventListener('click', (e) => {
        let currentId = tableBodyArray[i].getAttribute('data-name');
        if(document.getElementById(currentId)!==null){
            document.getElementById(currentId).classList.toggle('open');
        }

        if(tableBodyArray[i].querySelector('.svg') !== null) {
            if(!tableBodyArray[i].querySelector('.svg').classList.contains('rotate')){
                Array.prototype.forEach.call(tableBodyArray, function (e) {
                    if(e.querySelector('.svg') !== null){
                        e.querySelector('.svg').classList.remove('rotate')
                    }
                });
            }
            tableBodyArray[i].querySelector('.svg').classList.toggle('rotate');
        }
    })
}
// Tables END

// Dropdown START
function setSelect() {
    function onClickSelectItem(e) {
        if (e.target.classList.contains('item')) {
            const selectWrapper = e.target.closest('.select_wrapper');
            const selectDropdown = selectWrapper.querySelector('[data-droplist]');
            const selectIcon = selectWrapper.querySelector('.select__icon');
            const selectHeader = selectWrapper.querySelector('.select__text');
            const selectHeaderValue = selectWrapper.querySelector('.select-header');
            const selectItems = selectWrapper.querySelectorAll('[data-dropitem]');

            selectHeaderValue.setAttribute('data-value', e.target.textContent);
            selectHeader.textContent = e.target.textContent;
            selectHeaderValue.classList.add('js-active');
            selectHeader.classList.add('js-active');
            selectIcon.classList.remove('js-active');
            selectDropdown.classList.remove('js-active');
            selectItems.forEach((selectItem) => {
                selectItem.classList.remove('js-active');
            });
        }
    }
    document.addEventListener('click', onClickSelectItem);

    function onShowSelect(e) {
        if (e.target.closest('[data-select]')) {
            const selectParent = e.target.closest('.select_wrapper');
            const selectDroplists = selectParent.querySelector('[data-droplist]');
            const currentIcon = selectParent.querySelector('.select__icon');
            const selectHeaderValue = selectParent.querySelector('.select-header');
            selectDroplists.classList.toggle('js-active');
            currentIcon.classList.toggle('js-active');
            selectHeaderValue.classList.toggle('js-active');
            const selectDroplistsElment = document.querySelectorAll('[data-droplist]');
            selectDroplistsElment.forEach((element) => {
                if (selectDroplists !== element) {
                    element.classList.remove('js-active');
                    const parent = element.closest('.select_wrapper');
                    const icon = parent.querySelector('.select__icon');
                    const header = parent.querySelector('.select-header');
                    icon.classList.remove('js-active');
                    header.classList.remove('js-active');
                }
            });
        }
    }
    document.addEventListener('click', onShowSelect);

    function onCloseSelect(e) {
        if (!e.target.closest('.select_wrapper')) {
            let selectDroplistsElement = document.querySelectorAll('[data-droplist]');
            selectDroplistsElement.forEach((element) => {
                // element.classList.remove('js-active');
                // const parent = element.closest('.select_wrapper');
                // const icon = parent.querySelector('.select__icon');
                // icon.classList.remove('js-active');
                const parent = element.closest('.select_wrapper');
                const icon = parent.querySelector('.select__icon');
                const header = parent.querySelector('.select-header');
                element.classList.remove('js-active');
                icon.classList.remove('js-active');
                header.classList.remove('js-active');
            });
        }
    }
    document.querySelector('html').addEventListener('click', onCloseSelect);
}
setSelect();
// Dropdown END

// Modals START
(function() {
    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);
    function modalHandler(evt) {
        const modalBtnOpen = evt.target.closest('.js-modal');
        if (modalBtnOpen) {
            const modalSelector = modalBtnOpen.dataset.modal;
            showModal(document.querySelector(modalSelector));
        }
        const modalBtnClose = evt.target.closest('.modal-close');
        if (modalBtnClose) {
            evt.preventDefault();
            hideModal(modalBtnClose.closest('.modal-window'));
        }
        if (evt.target.matches('#modal-backdrop')) {
            hideModal(document.querySelector('.modal-window.show'));
        }
    }
    function showModal(modalElem) {
        modalElem.classList.add('show');
        backdrop.classList.remove('hidden');
    }
    function hideModal(modalElem) {
        modalElem.classList.remove('show');
        backdrop.classList.add('hidden');
    }
})();

// Modals END