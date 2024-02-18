/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)
// ABOUT SECTION
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display ='none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

// contact form
function sendEmail() {
    const firstName = document.getElementsByName('firstName')[0].value;
    const lastName = document.getElementsByName('lastName')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const subject = document.getElementsByName('subject')[0].value;
    const message = document.getElementsByName('message')[0].value;
    
    const xhr = new XMLHttpRequest();
    const url = 'send.py'; // Replace with your server-side script URL

    //const params = `firstName=${firstName}&lastName=${lastName}&email=${email}&subject=${subject}&message=${message}`;
    const params = `param1=${firstName}`;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            alert(xhr.responseText);
            if (xhr.status === 200) {
                alert('Message sent successfully!');
            } else {
                alert('Sorry, there was an error sending your message.');
            }
        }
    };

    xhr.send(params);  
}

//Token: 474cd0a8-90d0-49c8-b5b9-ef42e8ac1b37,
//Password : "B2238D5C3E665B0242141B71B7C919DA7969",

// const submit = document.getElementsByClassName("form-contact")[0];
// submit.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     console.log("clicked");

    
//     Email.send({
//         SecureToken : "474cd0a8-90d0-49c8-b5b9-ef42e8ac1b37",
//         To : 'chaitanyaderangula7@gmail.com',
//         From : "chaitanyaderangula7@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//     message => alert(message)
//     );
// })