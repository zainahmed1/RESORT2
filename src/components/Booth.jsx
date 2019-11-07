import React from 'react';
import './Booth.css';
import $ from 'jquery';

const toggleNav = () => {
    const isOpen = $('nav').hasClass('nav-toggle')
    let nav = $('nav'); 
    let menu = $('nav h1')
        let main = $('main')
    if(isOpen) {
        $('nav').removeClass('nav-toggle')
            main.toggleClass('menu-active');
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
    } else {
        $('nav').addBack('nav-toggle')
        nav.toggleClass('menu-active');
            main.toggleClass('menu-active');
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
    }
}

function Booth() {
     (function() {
        let nav = $('nav'),
            menu = $('nav h1'),
            main = $('main'),
            open = true,
            hover = false;

        menu.on('click', function() {
            console.log(nav)
           const opan = !open ? true : false;
            nav.toggleClass('menu-active');
            main.toggleClass('menu-active');
            nav.removeClass('menu-hover');
            main.removeClass('menu-hover');
            console.log(open);
        });

        menu.hover (
            function() {
                if (!open) {
                    nav.addClass('menu-hover');
                    main.addClass('menu-hover');
                }
            },function() {
                nav.removeClass('menu-hover');
                main.removeClass('menu-hover');
            }
        );
    }) ();
    // let w = window.innerWidth,
    //     h = window.innerHeight,
    //     canvas = document.getElementById('.bubble'),
    //     ctx = canvas.getContext("2d"),
    //     rate = 60,
    //     arc = 100,
    //     time,
    //     count,
    //     size = 7,
    //     speed = 20,
    //     lights = new Array,
    //     colors = ['#d59254', '#ffffff', '#1f2839', '#cf7693'];

    // canvas.setAttribute('width', w);
    // canvas.setAttribute('height', h);

    // function init() {
    //     time = 0;
    //     count = 0;

    //     for (let i = 0; i < arc; i++) {
    //         lights[i] = {
    //             x: Math.ceil(Math.random() * w),
    //             y: Math.ceil(Math.random() * h),
    //             toX: Math.random() * 5 + 1,
    //             toY: Math.random() * 5 + 1,
    //             c: colors[Math.floor(Math.random() * colors.length)],
    //             size: Math.random() * size
    //         }
    //     }
    // }

    // let timerID;

    // function bubble() {
    //     ctx.clearRect(0, 0, w, h);

    //     for (let i = 0; i < arc; i++) {
    //         let li = lights[i];

    //         ctx.beginPath();
    //         ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    //         ctx.fillStyle = li.c;
    //         ctx.fill();

    //         li.x = li.x + li.toX * (time * 0.05);
    //         li.y = li.y + li.toY * (time * 0.05);

    //         if (li.x > w) { li.x = 0; }
    //         if (li.y > h) { li.y = 0; }
    //         if (li.x < 0) { li.x = w; }
    //         if (li.y < 0) { li.y = h; }
    //     }
    //     if (time < speed) {
    //         time++;
    //     }
    //      timerID = setTimeout(bubble, 1000 / rate);
    // }
    // init();
    // bubble();

    // let animation = 'easeOutCubic';
    // let delay = 60;

    // $(document)
    //     .on('click', '.fa-bars', function () {
    //         let i = 0;
    //         $('nav').before($('.bubble'));
    //         $('.bubble').fadeIn();
    //         $('.mainnav').find('li').each(function () {
    //             let that = $(this);
    //             i++;
    //             (function (i, that) {
    //                 setTimeout(function () {
    //                     that
    //                         .animate(
    //                             { 'left': '20px' },
    //                             {
    //                                 duration: 350,
    //                                 easing: animation
    //                             })
    //                         .fadeIn({ queue: false });
    //                 }, delay * i)
    //             }(i, that))
    //         });
    //         $('.fa-bars').fadeOut(100, function () {
    //             $(this)
    //                 .removeClass('fa-bars')
    //                 .addClass('fa-times')
    //                 .fadeIn();
    //         });
    //     })
    //     .on('click', '.bubble, .fa-times', function () {
    //         $('.bubble').fadeOut();
    //         $('.mainnav').find('li')
    //             .animate(
    //                 { 'left': '-550px' },
    //                 { duration: 250 })
    //             .fadeOut({ queue: false });

    //         $('.hamb').fadeOut(100, function () {
    //             $(this)
    //                 .find($('i'))
    //                 .removeClass('fa-times')
    //                 .addClass('fa-bars')
    //                 .end()
    //                 .fadeIn();
    //         });
    //     })

    return (

        <main>
                      <div className="body">
             <nav className="menu-activea">
             <h1 onClick={() => toggleNav(this)}>NAVBAR</h1>
             <ul>
                 <li>HOME</li>
                 <li>GALLERY</li>
                 <li>TEAM</li>
                 <li>SERVICES</li>
                 <li>ABOUT</li>
             </ul>
             </nav>
     <main> 
     		<section>
                 <br/><br/><br/>
                 <h1>&larr; DIAGONAL SHAPED NAV</h1>
                 <br/>
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Veniam facere totam maiores blanditiis minus, molestiae 
                     cumque laudantium sunt earum repudiandae consequatur optio 
                     voluptas? Fugit, dolores nobis! Veritatis quasi aspernatur 
                     placeat!
                 </p>
             </section>
     </main>
     </div>

            </main>
    );
}

export default Booth;