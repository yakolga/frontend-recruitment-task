"use strict";

window.addEventListener('DOMContentLoaded', function() {
  
  //popup open/close 

  const background = document.querySelector('.background'), 
        popupWindow = document.querySelector('.popup'), 
        popupClose = document.querySelector('.popup__close'), 
        buttonMain = document.querySelector('#add');


  function openPopup() {
    background.classList.add('open'); 
    background.classList.remove('hide'); 
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    background.classList.remove('open'); 
    background.classList.add('hide'); 
    document.body.style.overflow = "";
  }
  
  buttonMain.addEventListener('click', () => {
    openPopup();
  });

  background.addEventListener('click', (e) => {
    if (e.target === background || e.target === popupClose) {
      closePopup();
    }
  });

  // counter
  
  let count;
  if (localStorage.getItem('counter')) {
    count = localStorage.getItem('counter');
  } else {
    count = 0;
  }
  
  const resetButton = document.querySelector('#reset'), 
        popupText = document.querySelector('.popup__paragraph');

    buttonMain.onclick = function() {
      count++;
      localStorage.setItem('counter', count);

      
      if (count === 1) {
        popupText.innerHTML = `You have clicked ${localStorage.getItem('counter')} time to related button.`;
      } else {
        popupText.innerHTML = `You have clicked ${localStorage.getItem('counter')} times to related button.`;
      }

      if  (count >= 5) {
        resetButton.classList.add('open');
        resetButton.classList.remove('hide');
      }
    };

    function resetCounter() {
      count = 0;
      popupText.innerHTML = `Your counter has been reseted.`;
      localStorage.removeItem('counter');
    }

    resetButton.addEventListener('click', () => {
      resetCounter();
      openPopup(); 
    });
});