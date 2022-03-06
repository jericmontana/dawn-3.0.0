const LOCAL_STORAGE_WISHLIST_KEY="shopify-wishlist",LOCAL_STORAGE_DELIMITER=",",BUTTON_ACTIVE_CLASS="active",GRID_LOADED_CLASS="loaded",selectors={button:"[button-wishlist]",grid:"[grid-wishlist]"};document.addEventListener("DOMContentLoaded",(()=>{initButtons(),initGrid()})),document.addEventListener("shopify-wishlist:updated",(t=>{initGrid()})),document.addEventListener("shopify-wishlist:init-product-grid",(t=>{const e=document.querySelector(".wishlist__loader--removed");e&&(e.classList.contains("hidden")||e.classList.toggle("hidden"));const s=document.querySelector(".wishlist__container--ul");s&&s.classList.contains("hidden")&&s.classList.toggle("hidden")})),document.addEventListener("product-recommendations:loaded",(t=>{initButtons()}));const fetchProductCardHTML=t=>fetch("/pages/contact?view=wishlist-collection-grid").then((t=>t.text())).then((e=>{const s=e;return(new DOMParser).parseFromString(s,"text/html").documentElement.querySelector(`.grid__item-${t}`).outerHTML})).catch((e=>console.error(`[Shopify Wishlist] Failed to load content for handle: ${t}`,e))),setupGrid=async t=>{const e=getWishlist(),s=e.map(fetchProductCardHTML),o=(await Promise.all(s)).join("");t.innerHTML=o,t.classList.add("loaded"),initButtons();const i=new CustomEvent("shopify-wishlist:init-product-grid",{detail:{wishlist:e}});document.dispatchEvent(i)},wishlistButtons=document.querySelectorAll(".button-wishlist"),setupButtons=t=>{t.forEach((t=>{const e=t.dataset.productHandle||!1;if(!e)return console.error("[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");wishlistContains(e)&&t.classList.add("active"),t.addEventListener("click",(()=>{const s=document.querySelector(".wishlist__loader--removed"),o=document.querySelector(".wishlist__container--ul");s&&(s.classList.toggle("hidden"),o.classList.toggle("hidden")),updateWishlist(e),t.classList.toggle("active")}))}))},initGrid=()=>{const t=document.querySelector(selectors.grid)||!1;t&&setupGrid(t)},initButtons=()=>{const t=document.querySelectorAll(selectors.button)||[];if(!t.length)return;setupButtons(t);const e=new CustomEvent("shopify-wishlist:init-buttons",{detail:{wishlist:getWishlist()}});document.dispatchEvent(e)},getWishlist=()=>{const t=localStorage.getItem("shopify-wishlist")||!1;return t?t.split(","):[]},setWishlist=t=>{const e=t.join(",");t.length?localStorage.setItem("shopify-wishlist",e):localStorage.removeItem("shopify-wishlist");const s=new CustomEvent("shopify-wishlist:updated",{detail:{wishlist:t}});return document.dispatchEvent(s),e},updateWishlist=t=>{const e=getWishlist(),s=e.indexOf(t);return-1===s?e.push(t):e.splice(s,1),setWishlist(e)},wishlistContains=t=>getWishlist().includes(t),resetWishlist=()=>setWishlist([]),wishlistEmpty=document.querySelectorAll(".wishlist-empty");wishlistEmpty&&(document.addEventListener("DOMContentLoaded",(()=>{getWishlist().length<=0&&wishlistEmpty.forEach((t=>t.style.display="block"))})),document.addEventListener("shopify-wishlist:updated",(()=>{getWishlist().length<=0&&wishlistEmpty.forEach((t=>t.style.display="block"))})));var selectedOptionSecondCat=localStorage.getItem("selected_option_second_category");const markUnavalableVariant=(t,e)=>{const s=document.querySelectorAll(`.${t}-x`),o=document.querySelectorAll(`.${t}-${e}-x`),i=document.querySelectorAll(".option-labels");i&&i.forEach((t=>t.classList.remove("unavailable"))),s&&s.forEach((t=>t.classList.add("unavailable"))),o&&o.forEach((t=>t.classList.add("unavailable")))};document.addEventListener("DOMContentLoaded",(()=>{markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"));const t=document.querySelectorAll(".option-labels-first-cat"),e=document.querySelectorAll(".option-labels-second-cat");e&&e.forEach((t=>t.addEventListener("click",(()=>{selectedOptionSecondCat=`${t.dataset.selectedoptsecondcat}`,localStorage.setItem("selected_option_second_category",selectedOptionSecondCat),markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"))})))),t&&t.forEach((t=>t.addEventListener("click",(()=>{localStorage.setItem("selected_option_first_category",`${t.dataset.selectedoptfirstcat}`),localStorage.setItem("selected_option_second_category",selectedOptionSecondCat),markUnavalableVariant(localStorage.getItem("selected_option_first_category"),localStorage.getItem("selected_option_second_category"))}))))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".privy-button__trigger"),e=document.querySelector("privy-bar-tab-inner");t&&e&&t.forEach((t=>t.addEventListener("click",(()=>{console.log(e)}))))}));