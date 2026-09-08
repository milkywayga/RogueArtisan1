
const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
if (menu) menu.addEventListener("click", () => links.classList.toggle("open"));

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
let current = 0;

function showSlide(index){
  if(!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((s,i)=>s.classList.toggle("active",i===current));
  dots.forEach((d,i)=>d.classList.toggle("active",i===current));
}
document.querySelector(".prev")?.addEventListener("click",()=>showSlide(current-1));
document.querySelector(".next")?.addEventListener("click",()=>showSlide(current+1));
dots.forEach((d,i)=>d.addEventListener("click",()=>showSlide(i)));

document.addEventListener("keydown",(e)=>{
  if(!slides.length) return;
  if(e.key==="ArrowLeft") showSlide(current-1);
  if(e.key==="ArrowRight") showSlide(current+1);
});

let touchX = null;
const slideshow = document.querySelector(".slideshow");
slideshow?.addEventListener("touchstart", e => touchX = e.changedTouches[0].screenX, {passive:true});
slideshow?.addEventListener("touchend", e => {
  if(touchX===null) return;
  const dx = e.changedTouches[0].screenX-touchX;
  if(Math.abs(dx)>45) showSlide(current + (dx<0 ? 1 : -1));
  touchX=null;
}, {passive:true});

// GitHub Pages is static, so this form prepares an email in the visitor's mail app.
// Replace the address below with your actual email.
const form = document.querySelector("#commission-form");
if(form){
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = "YOUR_EMAIL@example.com"; // <-- change this
    const data = new FormData(form);
    const subject = encodeURIComponent("Leatherwork commission inquiry");
    const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Project type: ${data.get("type")}
Budget: ${data.get("budget")}

Project details:
${data.get("details")}

Reference / additional notes:
${data.get("notes") || "None"}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
