function $(e) { return document.querySelector(e); }

let next = $('.next');
let prev = $('.prev');
let index = 0;

const contentZero = document.querySelector('.content0').innerHTML;


let randomText = [
  {
    contentText: contentZero
  },
  {
    contentText:'<div class="content content0"><img src="img/girl-silhouette-450x400.jpg" alt="client" class="content_img"><div class="tt"><h1 class="content__title">SLIDE 2</h1><p class="content__desc">SLIDE 2 Text - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam placeat iure consectetur aliquid adipisci sint totam repellat! Eos, distinctio maiores ipsam provident aspernatur nobis consequuntur delectus dolor tempora totam porro.</p></div></div>'
  },
  {
    contentText: '<div class="content content0"><img src="img/inkognito.jpg" alt="client" class="content_img"><div class="tt"><h1 class="content__title">SLIDE 3</h1><p class="content__desc">SLIDE 3 Text - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam placeat iure consectetur aliquid adipisci sint totam repellat! Eos, distinctio maiores ipsam provident aspernatur nobis consequuntur delectus dolor tempora totam porro.</p></div></div>'
  }
];

// $('.content__title').innerHTML = randomText[0].title;
// $('.content__desc').innerHTML = randomText[0].desc;
$('.content0').innerHTML = document.querySelector('.content0').innerHTML;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 1) {
    toggleView();
    setTimeout(function() {
      $('.content').innerHTML = randomText[index].contentText;
    //   $('.content__desc').innerHTML = randomText[index].desc;      
    }, 100)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content').innerHTML = randomText[index].contentText;
    //   $('.content__desc').innerHTML = randomText[index].desc;      
    }, 100)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 10)
}

//TIMER
{
  let currDate = new Date();
  let countDownDate = new Date(currDate.getTime() + 30 * 60 * 1000).getTime();

  let x = setInterval(function() {
    let now = new Date().getTime(); 
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerText = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerText = "Время вышло!";
    }
  }, 1000);
}


//Scroll buttons
const $buttonPromo = document.querySelector('.promo__btn');
const $buttonIngr = document.querySelector('.ingredients__btn');
const $buttonSecPromo = document.querySelector('.secondpromo__btn');
const $form = document.getElementById('order');


function scrollToForm(button) {
  button.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    $form.scrollIntoView({ 
      block: 'center', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });
};

scrollToForm($buttonPromo);
scrollToForm($buttonIngr);
scrollToForm($buttonSecPromo);

document.querySelector('.pageup').onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};

window.addEventListener('scroll', function() {
  document.querySelector('.pageup').hidden = (scrollY < 900);
});

