var selectedOptionSecondCat=localStorage.getItem("selected_option_second_category");const markUnavalableVariant=(e,t)=>{const o=document.querySelectorAll(`.${e}-x`),c=document.querySelectorAll(`.${e}-${t}-x`),a=document.querySelectorAll(".option-labels");a&&a.forEach((e=>e.classList.remove("unavailable"))),o&&o.forEach((e=>e.classList.add("unavailable"))),c&&c.forEach((e=>e.classList.add("unavailable")))};document.addEventListener("DOMContentLoaded",(()=>{markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"));const e=document.querySelectorAll(".option-labels-first-cat"),t=document.querySelectorAll(".option-labels-second-cat");t&&t.forEach((e=>e.addEventListener("click",(()=>{selectedOptionSecondCat=`${e.dataset.selectedoptsecondcat}`,localStorage.setItem("selected_option_second_category",selectedOptionSecondCat),markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"))})))),e&&e.forEach((e=>e.addEventListener("click",(()=>{localStorage.setItem("selected_option_first_category",`${e.dataset.selectedoptfirstcat}`),localStorage.setItem("selected_option_second_category",selectedOptionSecondCat),markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"))}))))})),document.addEventListener("DOMContentLoaded",(()=>{const e={animationStart:function(){document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"},onClose:function(){document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"}},t=document.querySelectorAll(".video-popup");t&&t.forEach((t=>t.addEventListener("click",(()=>{const o=t.dataset.video,c=t.dataset.type;"htmlvid"==c?(e.vidSrc=o,delete e.ytSrc,delete e.vimeoSrc):"vimeo"==c?(e.vimeoSrc=o,delete e.ytSrc,delete e.vidSrc):"youtube"==c&&(e.ytSrc=o,delete e.vimeoSrc,delete e.vidSrc),e.el=t,BigPicture(e)}))))}));const signupPopupButtonTrigger=document.querySelectorAll(".btn--signup-popup");window.addEventListener("load",(()=>{signupPopupButtonTrigger&&signupPopupButtonTrigger.forEach((e=>{try{e.style.opacity="1",e.addEventListener("click",(()=>{Privy("show")}))}catch(e){console.log(e)}}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".field__button--with-ty");e&&e.forEach((e=>e.addEventListener("click",(()=>{localStorage.setItem("activated-ty-modalpopup",`${e.dataset.targetopener}`)}))))})),document.addEventListener("newsletter: posted_successfully",(()=>{const t=document.querySelectorAll("."+localStorage.setItem("activated-ty-modalpopup",`${e.dataset.targetopener}`));t&&t.forEach((e=>e.click())),console.log("✅✅✅")}));