'use strict';

const links = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');
const navBar = document.querySelector('.top');

const handleEnter = function () {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );

  dropdownBackground.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navBarCoords = navBar.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navBarCoords.top,
    left: dropdownCoords.left - navBarCoords.left,
  };

  dropdownBackground.style.setProperty('width', `${coords.width}px`);
  dropdownBackground.style.setProperty('height', `${coords.height}px`);
  dropdownBackground.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
};

const handleLeave = function () {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBackground.classList.remove('open');
};

links.forEach(link => link.addEventListener('mouseenter', handleEnter));
links.forEach(link => link.addEventListener('mouseleave', handleLeave));
