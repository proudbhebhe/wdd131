const header=document.getElementById('header');
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');
const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
window.addEventListener('scroll',()=>
    header.classList.toggle('scrolled',window.scrollY>25)
);

menu.addEventListener('click',()=>
    {const open=navLinks.classList.toggle('open');
        menu.setAttribute('aria-expanded',open);
        menu.textContent=open?'×':'☰'
    });

navLinks.querySelectorAll('a').forEach(a=>
    a.addEventListener('click',()=>{navLinks.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
        menu.textContent='☰'}
    ));

form.addEventListener('submit',e=>{e.preventDefault();
    status.textContent='Thanks! Your enquiry is ready. Connect this form to your preferred form service to receive submissions.';
    form.reset()}
);

document.getElementById('year').textContent=new Date().getFullYear();
