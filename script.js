const menu=document.querySelector('.menu');const links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.getElementById('quoteForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Website Quote Request - '+(d.get('company')||d.get('name')));const body=encodeURIComponent(`Name: ${d.get('name')}
Company: ${d.get('company')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Service: ${d.get('service')}

Project Details:
${d.get('details')}`);location.href=`mailto:info@greenleafelectric.com?subject=${subject}&body=${body}`;});}
