/* =========================== Typing Animation ===========================- */
var typed = new Typed(".typing", {
    strings: [
      "a JavaScript Enthusiast",
      "a Web Developer",
      "Expert In React JS",
      "Currently Learning MERN STACK",
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
  });
  
  
  /* =========================== Aside ===========================- */
  const nav = document.querySelector(".nav"),
    navLink = nav.querySelectorAll("li"),
    totalNavList = navLink.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navLink[i].querySelector("a");
    a.addEventListener("click", function () {
      removeBackSection();     
      for (let j = 0; j < totalNavList; j++) {
        if (navLink[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
          //allSection[j].classList.add("back-section");
        }
        navLink[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
      if(window.innerWidth < 1200){
        asideSectionTogglerBtn();
      }
    });
  }
  
  function removeBackSection(){
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }
  function addBackSection(num){
    allSection[num].classList.add("back-section");
  }
  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  function updateNav(element){
    for(let i=0; i<totalNavList; i++){
      navLink[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navLink[i].querySelector("a").getAttribute("href").split("#")[1]){
        navLink[i].querySelector("a").classList.add("active");
      }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })
  
  const navTogglerBtn = document.querySelector('.nav-toggler');
  aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () =>{
      asideSectionTogglerBtn();
  })
  function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
      }
  }

  
  document.getElementById('contact-form').addEventListener('submit', sendMessage);
  
  function sendMessage(e) {
    e.preventDefault();
  
    let name = document.querySelector('input[id="name"]').value;
    let email = document.querySelector('input[id="email"]').value;
    let subject = document.querySelector('input[id="subject"]').value;
    let message = document.querySelector('textarea[id="message"]').value;
    
    window.location.href = `mailto:msafeerhussain13@gmail.com?subject=${subject}&body=Name: ${name}%0AMessage: ${message}`;
  
  }
  