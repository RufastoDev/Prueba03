const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Audio live

const btn_audio = document.querySelector('.changeText');
const music = document.querySelector('#audio');

let playing_track = false;

function playAndPause(){
  if(playing_track == false){
    playing_track = true;
    music.play();
    btn_audio.innerHTML = "Pausar";
  }
  else{
    music.pause();
    playing_track = false;
    btn_audio.innerHTML = "Play here";
  }
}


function changePage(){
  window.location.href = 'http://127.0.0.1:5500/artista.html';
}

$(document).ready(function() {
  $(".open").click(function() {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
  
    answer.slideToggle(200);
  
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }
  
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });

  
});