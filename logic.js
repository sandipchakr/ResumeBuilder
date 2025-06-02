const imgs = document.querySelectorAll("img");
const input = document.querySelector("#file-input");



input.addEventListener("change", () => {
    imgs.forEach(img => {
        img.src = URL.createObjectURL(input.files[0]);
    });
}); 
const formBtn = document.querySelector("#form-btn");
const form = document.querySelector("#form");
const resume = document.querySelector(".resume");


// for form

const Nameinput = document.querySelector(".name");
const Phonenumberinput= document.querySelector(".Phonenumber");
const emailinput = document.querySelector(".email");
const summeryinput= document.querySelector("#summery-p");
const educationinput = document.querySelector("#education-p");
const date1= document.querySelector("#date1");
const date2= document.querySelector("#date2");
const skillinput = document.querySelector("#skills-p");
const hobbiesinput = document.querySelector("#hobbies-p");
const languageinput = document.querySelector("#language-p");

//for resume

const profile = document.querySelector(".profile-box1");
const contactnumber = document.querySelector(".contact-number");
const emailId = document.querySelector(".email-id");
const Name = document.querySelector(".Name-box2");
const education = document.querySelector(".education-box2");
const date = document.querySelector(".date-box2");
const skill = document.querySelector(".skill-box2");
const hobbies = document.querySelector(".hobbies-box2");
const language = document.querySelector(".language-box2");

formBtn.addEventListener("click",(e)=>{
    e.preventDefault(); // Prevent the form from submitting
    if(Nameinput.value && Phonenumberinput.value && emailinput.value && summeryinput.value && educationinput.value && skillinput.value && hobbiesinput.value && languageinput.value){
        Name.innerText = Nameinput.value;
        profile.innerText = summeryinput.value;
        contactnumber.innerText = Phonenumberinput.value;
        emailId.innerText = emailinput.value;
        education.innerText = educationinput.value;
        date.innerText = `(${date1.value} - ${date2.value})`;
        skill.innerText = skillinput.value;
        hobbies.innerText = hobbiesinput.value;
        language.innerText = languageinput.value;
    form.classList.add("none");
    resume.classList.remove("none");
    }
    else{
        alert("please fill up the blanks");
    }
});
const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", () => {
    // Temporarily hide the download button
    downloadBtn.style.display = 'none';
    const element=document.querySelector(".main-continer");
    const opt = {
        margin:       6,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2,useCORS: true },
        jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save()
    .then(()=>{
        downloadBtn.style.display = "block"; 
   
    });
});