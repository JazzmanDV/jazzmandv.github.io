function checkLastInARow(){var e=document.querySelectorAll(".inner-skills-list"),t=!0,r=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(t=(l=i.next()).done);t=!0){var o=l.value.querySelectorAll(".inner-skills-list__item"),a=new Map,s=!0,c=!1,u=void 0;try{for(var d,y=o[Symbol.iterator]();!(s=(d=y.next()).done);s=!0){var p=d.value,m=p.querySelector(".bullet-list");a.has(m.offsetTop)||a.set(m.offsetTop,[]),a.get(m.offsetTop).push(p)}}catch(e){c=!0,u=e}finally{try{s||null==y.return||y.return()}finally{if(c)throw u}}var v=!0,w=!1,f=void 0;try{for(var h,_=a.values()[Symbol.iterator]();!(v=(h=_.next()).done);v=!0){var b=h.value,S=!0,q=!1,g=void 0;try{for(var L,x=b[Symbol.iterator]();!(S=(L=x.next()).done);S=!0){L.value.classList.remove("inner-skills-list__item--hidden-separator")}}catch(e){q=!0,g=e}finally{try{S||null==x.return||x.return()}finally{if(q)throw g}}b[b.length-1].classList.add("inner-skills-list__item--hidden-separator")}}catch(e){w=!0,f=e}finally{try{v||null==_.return||_.return()}finally{if(w)throw f}}}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}function onDocumentReady(){checkLastInARow(),window.addEventListener("resize",checkLastInARow);var e=window.matchMedia("(max-width: 770px)");e.addEventListener("change",(function(){if(!e.matches){var t=document.querySelector(".nav__menu");t.style.height="",t.classList.remove("nav__menu--opened")}}));var t=window.matchMedia("(max-width: 1000px)");t.addEventListener("change",(function(){if(t.matches){var e=document.querySelector(".my-outer-swiper-wrapper--full-screen");e&&e.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").click()}})),document.querySelectorAll(".my-outer-swiper-wrapper").forEach((function(e){new Swiper(e.querySelector(".my-swiper"),{grabCursor:!0,spaceBetween:1,navigation:{prevEl:e.querySelector(".my-swiper-button-prev"),nextEl:e.querySelector(".my-swiper-button-next"),disabledClass:"my-swiper-button--disabled"},pagination:{el:e.querySelector(".swiper__bullet-list"),clickable:!0,bulletClass:"bullet-list__item swiper__bullet-list-item",bulletActiveClass:"bullet-list__item--active"}})})),document.querySelectorAll(".my-inner-swiper-wrapper__expand-swiper-button").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("body"),r=e.closest(".my-outer-swiper-wrapper"),n=t.appendChild(r.cloneNode(!0)),l=r.querySelector(".my-swiper").swiper,i=new Swiper(n.querySelector(".my-swiper"),{initialSlide:l.activeIndex,grabCursor:!0,spaceBetween:1,navigation:{prevEl:n.querySelector(".my-swiper-button-prev"),nextEl:n.querySelector(".my-swiper-button-next"),disabledClass:"my-swiper-button--disabled"},pagination:{el:n.querySelector(".swiper__bullet-list"),clickable:!0,bulletClass:"bullet-list__item swiper__bullet-list-item",bulletActiveClass:"bullet-list__item--active"}});t.classList.add("body--full-screen"),n.classList.add("my-outer-swiper-wrapper--full-screen"),n.querySelector(".my-inner-swiper-wrapper__expand-swiper-button").addEventListener("click",(function(){l.slideTo(i.activeIndex,0),t.classList.remove("body--full-screen"),n.classList.add("my-outer-swiper-wrapper--full-screen-out"),setTimeout((function(){i.destroy(),t.removeChild(n)}),500)}))}))})),document.querySelector(".nav__button").addEventListener("click",(function(){var e=document.querySelector(".nav__menu");if(e.classList.toggle("nav__menu--opened"),e.classList.contains("nav__menu--opened")){e.style.height="auto";var t=getComputedStyle(e).height;e.style.height="0px",requestAnimationFrame((function(){e.style.height=t}))}else e.style.height="0px"})),document.querySelectorAll(".button-try").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("button-try--active")}))})),document.querySelectorAll(".nav__item-link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var r=e.href.split("#")[1];if(r){var n=document.querySelector(".nav__menu");n.classList.remove("nav__menu--opened"),n.style.height="";var l=document.querySelector("#".concat(r)).getBoundingClientRect().top+window.scrollY-document.querySelector(".main").offsetTop;window.scrollTo({top:l,behavior:"smooth"})}}))}))}"complete"===document.readyState?onDocumentReady():window.addEventListener("load",(function(){onDocumentReady()}));
//# sourceMappingURL=index.16970a67.js.map
