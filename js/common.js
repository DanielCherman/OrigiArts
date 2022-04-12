/*team modals*/


$('#show-modal-first').on('click', function() {
  $('#team-modal-first').show()
})

$('#show-modal-second').on('click', function() {
  $('#team-modal-second').show()
})

$('#show-modal-third').on('click', function() {
  $('#team-modal-third').show()
})

$('#show-modal-fourth').on('click', function() {
  $('#team-modal-fourth').show()
})

$('#show-modal-fifth').on('click', function() {
  $('#team-modal-fifth').show()
})

$('#show-modal-sixth').on('click', function() {
  $('#team-modal-sixth').show()
})

$('#show-modal-seventh').on('click', function() {
  $('#team-modal-seventh').show()
})

$('.team-modal-first .team-modal svg').on('click', function() {
  $('.team-modal-first').hide()
})

$('.team-modal-first .overflow').on('click', function() {
  $('.team-modal-first').hide()
})

$('.team-modal-second .team-modal svg').on('click', function() {
  $('.team-modal-second').hide()
})

$('.team-modal-second .overflow').on('click', function() {
  $('.team-modal-second').hide()
})

$('.team-modal-third .team-modal svg').on('click', function() {
  $('.team-modal-third').hide()
})

$('.team-modal-third .overflow').on('click', function() {
  $('.team-modal-third').hide()
})

$('.team-modal-fourth .team-modal svg').on('click', function() {
  $('.team-modal-fourth').hide()
})

$('.team-modal-fourth .overflow').on('click', function() {
  $('.team-modal-fourth').hide()
})

$('.team-modal-fifth .team-modal svg').on('click', function() {
  $('.team-modal-fifth').hide()
})

$('.team-modal-fifth .overflow').on('click', function() {
  $('.team-modal-fifth').hide()
})

$('.team-modal-sixth .team-modal svg').on('click', function() {
  $('.team-modal-sixth').hide()
})

$('.team-modal-sixth .overflow').on('click', function() {
  $('.team-modal-sixth').hide()
})

$('.team-modal-seventh .team-modal svg').on('click', function() {
  $('.team-modal-seventh').hide()
})

$('.team-modal-seventh .overflow').on('click', function() {
  $('.team-modal-seventh').hide()
})


$('#mobile-show-modal-first').on('click', function() {
  $('#team-modal-first').show()
})

$('#mobile-show-modal-second').on('click', function() {
  $('#team-modal-second').show()
})

$('#mobile-show-modal-third').on('click', function() {
  $('#team-modal-third').show()
})

$('#mobile-show-modal-fourth').on('click', function() {
  $('#team-modal-fourth').show()
})

$('#mobile-show-modal-fifth').on('click', function() {
  $('#team-modal-fifth').show()
})

$('#mobile-show-modal-sixth').on('click', function() {
  $('#team-modal-sixth').show()
})

$('#mobile-show-modal-seventh').on('click', function() {
  $('#team-modal-seventh').show()
})



// Set the date we're counting down to

var countDownDate = new Date("Apr 13, 2022 00:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

  // Get today's date and time

  var now = new Date().getTime();

  // Find the distance between now and the count down date

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "

 // + minutes + "m " + seconds + "s ";

  

    document.getElementById('day').innerHTML = days + 'd';

    document.getElementById('hour').innerHTML =hours + 'h';

    document.getElementById('min').innerHTML = minutes + 'm';

    document.getElementById('sec').innerHTML = seconds + 's';

    document.getElementById('day-1').innerHTML = days + 'd';

    document.getElementById('hour-1').innerHTML =hours + 'h';

    document.getElementById('min-1').innerHTML = minutes + 'm';

    document.getElementById('sec-1').innerHTML = seconds + 's';
    
    document.getElementById('day-2').innerHTML = days + 'd';

    document.getElementById('hour-2').innerHTML =hours + 'h';

    document.getElementById('min-2').innerHTML = minutes + 'm';

    document.getElementById('sec-2').innerHTML = seconds + 's';

    document.getElementById('day-3').innerHTML = days + 'd';

    document.getElementById('hour-3').innerHTML =hours + 'h';

    document.getElementById('min-3').innerHTML = minutes + 'm';

    document.getElementById('sec-3').innerHTML = seconds + 's';




    if (distance < 0) {

      clearInterval(x);
      document.querySelector('#day').style.display = 'none';
      document.querySelector('#hour').style.display = 'none';
      document.querySelector('#min').style.display = 'none';
      document.querySelector('#sec').style.display = 'none';
      document.querySelector('#day-1').style.display = 'none';
      document.querySelector('#hour-1').style.display = 'none';
      document.querySelector('#min-1').style.display = 'none';
      document.querySelector('#sec-1').style.display = 'none';
      document.querySelector('#day-2').style.display = 'none';
      document.querySelector('#hour-2').style.display = 'none';
      document.querySelector('#min-2').style.display = 'none';
      document.querySelector('#sec-2').style.display = 'none';
      document.querySelector('#day-3').style.display = 'none';
      document.querySelector('#hour-3').style.display = 'none';
      document.querySelector('#min-3').style.display = 'none';
      document.querySelector('#sec-3').style.display = 'none';
      document.querySelector('.hidden-block').style.display = 'flex';

      var a = document.getElementById('link1'); 
      var b = document.getElementById('link2');
      var c = document.getElementById('link3');
      a.href = "https://opensea.io/OrigiArts"
      b.href = "https://opensea.io/OrigiArts"
      c.href = "https://opensea.io/OrigiArts"

      $('.collection-photo').addClass('show-collection')

    }

}, 1000);



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 34,
  slidesPerGroup: 1,
  centeredSlidesBounds: true,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 25,
    }
  },
});



let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})



window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.burger').on('click', function () {
  $('.burger').toggleClass('burger-opened')
  $('.burger-menu').toggleClass('burger-menu-opened')
})


$('.member-card-1').on('click', function () {
  $('.member-card-1').toggleClass('flipped');
});

$('.member-card-2').on('click', function () {
  $('.member-card-2').toggleClass('flipped');
});

$('.member-card-3').on('click', function () {
  $('.member-card-3').toggleClass('flipped');
});

$('.member-card-4').on('click', function () {
  $('.member-card-4').toggleClass('flipped');
});

$('.member-card-5').on('click', function () {
  $('.member-card-5').toggleClass('flipped');
});

$('.member-card-6').on('click', function () {
  $('.member-card-6').toggleClass('flipped');
});

$('.member-card-7').on('click', function () {
  $('.member-card-7').toggleClass('flipped');
});

$('.member-card-8').on('click', function () {
  $('.member-card-8').toggleClass('flipped');
});

$('.member-card-9').on('click', function () {
  $('.member-card-9').toggleClass('flipped');
});


/*more less button*/

$(document).ready(function() {
  newsContent= $('.text')
  newsText = newsContent.text();
  newsContent.text(newsText.slice(0, 200) + ' ...');

  $(".more-button").click(function() {
    var elem = $(".toggle").text();
    if (elem == "Read More") {

      newsContent.text(newsText.slice(0));
      $(".toggle").text("Read Less");
    } else {

      newsContent.text(newsText.slice(0, 200) + ' ...');
      $(".toggle").text("Read More");
    }
  });
});

$(document).ready(function() {
  newsContent1= $('.text1')
  newsText1 = newsContent1.text();
  newsContent1.text(newsText1.slice(0, 200) + ' ...');

  $(".more-button1").click(function() {
    var elem1 = $(".toggle1").text();
    if (elem1 == "Read More") {

      newsContent1.text(newsText1.slice(0));
      $(".toggle1").text("Read Less");
    } else {

      newsContent1.text(newsText1.slice(0, 200) + ' ...');
      $(".toggle1").text("Read More");
    }
  });
});

$(document).ready(function() {
  newsContent2= $('.text2')
  newsText2 = newsContent2.text();
  newsContent2.text(newsText2.slice(0, 200) + ' ...');

  $(".more-button2").click(function() {
    var elem2 = $(".toggle2").text();
    if (elem2 == "Read More") {

      newsContent2.text(newsText2.slice(0));
      $(".toggle2").text("Read Less");
    } else {

      newsContent2.text(newsText2.slice(0, 200) + ' ...');
      $(".toggle2").text("Read More");
    }
  });
});


/*skroll-out*/

ScrollOut({
  targets: '.scroll-animate',
  once: true,
  onShown(el) {
      el.classList.add("new-animate");
  }
});


/*story button*/

$('.read-more-stories-button').on('click', function() {
  $('.stories-blocks').toggleClass('story-opened')
  $('.stories-container h3').toggleClass('story-opened-h3')
})

