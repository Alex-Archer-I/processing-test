"use strict";

// Header menu

const headerMenu = document.querySelector('.header-list');

function openInnerMenu(index) {
    const innerMenu = headerMenu.children[index].querySelector('ul');
    const arrow = headerMenu.children[index].querySelector('img');

    headerMenu.children[index].addEventListener('click', () => {
        if (innerMenu.style.display === 'none' || !innerMenu.style.display) {
            arrow.style.transform = 'rotate(180deg)';
            innerMenu.style.display = 'block';
        } else {
            arrow.style.transform = 'none';
            innerMenu.style.display = 'none';
        };
    });
};

openInnerMenu(1);
openInnerMenu(2);
openInnerMenu(4);

// Mobile menu

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpen = document.querySelector('.mobile-menu-open');
const mobileMenuClose = document.querySelector('.mobile-close');

const mobileMenuInners = document.querySelectorAll('.mobile-menu-inner');

function openInnerMobileMenu(index, data) {
    const arrow = mobileMenu.querySelector('ul').children[index].querySelector('img');

    const inners = [];

    for (const inner of mobileMenuInners) {
        if (inner.dataset.name === data) {
            inners.push(inner);
        };
    };

    mobileMenu.querySelector('ul').children[index].addEventListener('click', () => {
        if (inners[1].style.display === 'none' || !inners[1].style.display) {
            for (const inner of inners) {
                inner.style.display = 'block';
            };
            arrow.style.transform = 'rotate(180deg)';
        } else {
            for (const inner of inners) {
                inner.style.display = 'none';
            };
            arrow.style.transform = 'none';
        };
    });
};

mobileMenuOpen.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

openInnerMobileMenu(1, 'cards');
openInnerMobileMenu(5, 'stations');
openInnerMobileMenu(10, 'about');

// Form masks

const deliveryFormPhoneInput = document.getElementById('delivery-phone-input');
const orderFormPhoneInput = document.getElementById('order-phone');

const maskOptions = {
    mask: '+7 (000) 000-00-00',
};

IMask(deliveryFormPhoneInput, maskOptions);
IMask(orderFormPhoneInput, maskOptions);

// Order form

const orderRangeInput = document.getElementById('order-range');
const orderDisplay = document.querySelector('.order-input-range span');

orderRangeInput.value = '2000';
orderRangeInput.style.setProperty('--progress-bar', '11%');

orderRangeInput.addEventListener('input', (event) => {
    orderRangeInput.style.setProperty('--progress-bar', ((event.target.value - 1000) / 90) + '%');
    orderDisplay.textContent = event.target.value;
});