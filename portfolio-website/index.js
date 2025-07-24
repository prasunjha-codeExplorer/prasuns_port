const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
        function opentab(tabName){
            for(tablink of tabLinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabContents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        }
const typed = new Typed("#typing", {
 strings : ["Competitive Programming" , "Web-Development" , "Problem Solving"],
 typeSpeed: 50,
 backSpeed: 50,
 loop: true
});
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

p1.addEventListener("click", () => {
    window.open("https://tic-tac-toe-game-rhoi.vercel.app/","_blank");
});
p2.addEventListener("click", () => {
    window.open("https://rock-paper-scissors-vggl.vercel.app/","_blank");
});
p3.addEventListener("click", () => {
   window.open("https://amazon-clone-woad-one.vercel.app/","_blank");
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    window.open("https://github.com/prasunjha-codeExplorer/Prasun-s_Resume/blob/main/updatedResume3.pdf","_blank");
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbytSkpEBN99YkpZimpsmTt_Cn0itWU_KOFC1KMAzU67VtdPYzyEg3V6wPYJe3tJAAf-/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


    const btn2 = document.querySelector(".btn2");
  btn2.addEventListener("click", () => {
    checkPlaceholder();
  })

function checkPlaceholder() {
  let input1 = document.querySelector(".c1"); // name 
  let input2 = document.querySelector(".c2"); // email
  let input3 = document.querySelector(".c3"); // message

  const name = input1.value.trim();
  const email = input2.value.trim();
  const msg = input3.value.trim();

  if (name !== "" && email !== "" && msg !== "") {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("message",msg);
    
    const scriptURL = "https://docs.google.com/spreadsheets/d/1_Bhz6lQR_TdgQmnfSV2jioeUGjofT3ZmX-AuIoHXBtE/edit?usp=sharing";
    fetch(scriptURL,{method: 'POST', body: formData})
    .then((response) => {
      alert('Message sent successfully :)');
      input1.value = "";
      input2.value = "";
      input3.value = "";
    })
    .catch((err) => {
      alert('Something went wrong!, please try again later');
      console.log("Error occurred",err.message);
    })
  } else {
    alert('Please fill all fields!');
  }
}

const contact = new Typed("#contact-checker" , {
  strings: ["contact me on jhapj41@gmail.com","contact me on prasunjha9431@gmail.com","Drop a message at 7979811192"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true
})

const sidemenu = document.querySelector("#sidemenu");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

menu.addEventListener("click", () =>{
  sidemenu.style.right = "0";
})

close.addEventListener("click", () => {
  sidemenu.style.right = "-200px";
})

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
option1.addEventListener("click", () =>{
  sidemenu.style.right = "-200px";
})

option2.addEventListener("click", () =>{
  sidemenu.style.right = "-200px";
})

option3.addEventListener("click", () =>{
  sidemenu.style.right = "-200px";
})

option4.addEventListener("click", () =>{
  sidemenu.style.right = "-200px";
})

const show_details = document.querySelector("#show-details");
const tab_titles = document.querySelector(".tab-titles");
tab_titles.addEventListener("click", () => {
   show_details.style.fontSize = "0px";
})
