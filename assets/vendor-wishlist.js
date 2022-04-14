const LOCAL_STORAGE_WISHLIST_KEY="shopify-wishlist",LOCAL_STORAGE_DELIMITER=",",BUTTON_ACTIVE_CLASS="active",GRID_LOADED_CLASS="loaded",selectors={button:"[button-wishlist]",grid:"[grid-wishlist]"};document.addEventListener("DOMContentLoaded",(()=>{initButtons(),initGrid()})),document.addEventListener("shopify-wishlist:updated",(t=>{initGrid()})),document.addEventListener("shopify-wishlist:init-product-grid",(t=>{const s=document.querySelector(".wishlist__loader--removed");s&&(s.classList.contains("hidden")||s.classList.toggle("hidden"));const e=document.querySelector(".wishlist__container--ul");e&&e.classList.contains("hidden")&&e.classList.toggle("hidden")})),document.addEventListener("product-recommendations:loaded",(t=>{initButtons()}));const fetchProductCardHTML=t=>{const s=1*localStorage.getItem("wishlist_pages");for(const e=1;e<s+1;e++){return fetch(`/pages/contact?page=${e}&view=wishlist-collection-grid`).then((t=>t.text())).then((s=>{const e=s;return(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector(`.grid__item-${t}`).outerHTML})).catch((s=>console.error(`[Shopify Wishlist] Failed to load content for handle: ${t}`,s)))}},setupGrid=async t=>{const s=getWishlist(),e=s.map(fetchProductCardHTML),i=(await Promise.all(e)).join("");t.innerHTML=i,t.classList.add("loaded"),initButtons();const o=new CustomEvent("shopify-wishlist:init-product-grid",{detail:{wishlist:s}});document.dispatchEvent(o)},wishlistButtons=document.querySelectorAll(".button-wishlist"),setupButtons=t=>{t.forEach((t=>{const s=t.dataset.productHandle||!1;if(!s)return console.error("[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");wishlistContains(s)&&t.classList.add("active"),t.addEventListener("click",(()=>{const e=document.querySelector(".wishlist__loader--removed"),i=document.querySelector(".wishlist__container--ul");e&&(e.classList.toggle("hidden"),i.classList.toggle("hidden")),updateWishlist(s),t.classList.toggle("active")}))}))},initGrid=()=>{const t=document.querySelector(selectors.grid)||!1;t&&setupGrid(t)},initButtons=()=>{const t=document.querySelectorAll(selectors.button)||[];if(!t.length)return;setupButtons(t);const s=new CustomEvent("shopify-wishlist:init-buttons",{detail:{wishlist:getWishlist()}});document.dispatchEvent(s)},getWishlist=()=>{const t=localStorage.getItem("shopify-wishlist")||!1;return t?t.split(","):[]},setWishlist=t=>{const s=t.join(",");t.length?localStorage.setItem("shopify-wishlist",s):localStorage.removeItem("shopify-wishlist");const e=new CustomEvent("shopify-wishlist:updated",{detail:{wishlist:t}});return document.dispatchEvent(e),s},updateWishlist=t=>{const s=getWishlist(),e=s.indexOf(t);return-1===e?s.push(t):s.splice(e,1),setWishlist(s)},wishlistContains=t=>getWishlist().includes(t),resetWishlist=()=>setWishlist([]),wishlistEmpty=document.querySelectorAll(".wishlist-empty");wishlistEmpty&&(document.addEventListener("DOMContentLoaded",(()=>{getWishlist().length<=0&&wishlistEmpty.forEach((t=>t.style.display="block"))})),document.addEventListener("shopify-wishlist:updated",(()=>{getWishlist().length<=0&&wishlistEmpty.forEach((t=>t.style.display="block"))})));