// Дисант меню

let drops = document.querySelectorAll('.dropdown');


drops.forEach(function(drop) {
    drop.addEventListener('click', function(ev) {
        ev.stopPropagation();
        drops.forEach(drop => { if (drop != this) { drop.classList.remove('active') }; });
        this.classList.toggle('active');
    });
});


// верхние воины

document.addEventListener('click', function() {
    drops.forEach(drop => drop.classList.toggle('active', false));
});

let hed = document.querySelector('.conainer .container-header-animation')
let hede = document.querySelector('.conainer .container-header')

$(window).scroll(function(){
    if ($(this).scrollTop() < 200) {
        $( hed ).removeClass( 'active' );
        $( hede ).removeClass( 'active' );
    } else {
        $( hed ).addClass( 'active' );
        $( hede ).addClass( 'active' );
    }
  });

// бездна( по выбору )

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    



    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// самонавадяшееся ракеты

let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;  
	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

// задолбавшееся меню

let mobileBtns = document.querySelectorAll('[data-mobile]');

mobileBtns.forEach(function(mobile) {
    mobile.addEventListener('click', function() {
        let target = this.getAttribute('data-mobile');
        
        if(target === 'close') {
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('.mobile-nav').classList.remove('active');
        } else {
            document.querySelector('.overlay').classList.add('active');
            document.querySelector('.mobile-nav').classList.add('active'); 
        }
    });
});






