import{a as u,S as f,i as c}from"./assets/vendor-B4AqCRBk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const r="https://pixabay.com/api/?key="+"49253518-6fbcd3e4502fdc6eae88c44f3"+"&q="+encodeURIComponent(i)+"&image_type=photo&orientation=horizontal&safesearch=true";return u.get(r)}function h(i){let n=i.map(o=>`
      <li>
        <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}" width="360" height="200" /></a>
        <table class="caption">
          <thead>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${o.likes}</td>
              <td>${o.views}</td>
              <td>${o.comments}</td>
              <td>${o.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join(""),r=new f(".gallery a");d.innerHTML=n,r.refresh()}c.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});let a=[];const d=document.querySelector(".gallery"),s=document.querySelector(".form");s.addEventListener("submit",p);function p(i){i.preventDefault();const n=s.elements.request.value.trim();d.innerHTML="",s.elements.request.setAttribute("readonly",!0),s.elements.button.setAttribute("disabled",!0),s.lastElementChild.classList.remove("hidden"),m(n).then(r=>{if(a=[...r.data.hits],a.length!==0)s.elements.request.value="",h(a);else throw new Error("Sorry, there are no images matching your search query. Please, try again!")}).catch(r=>{console.dir(r),c.error({iconUrl:"img/error.svg",message:r.message})}).finally(()=>{s.request.removeAttribute("readonly"),s.elements.button.removeAttribute("disabled"),s.lastElementChild.classList.add("hidden")})}
//# sourceMappingURL=index.js.map
