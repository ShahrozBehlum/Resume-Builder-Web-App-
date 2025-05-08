let img = document.querySelector(".img img"); 
let res_img = document.querySelector(".res-img input");
let main_container = document.querySelector(".main-container");
let res_main = document.querySelector(".res-main");
let contact = document.querySelectorAll(".contact p");
let education = document.querySelectorAll(".education p");
let skills = document.querySelectorAll(".skills ul li p");
let languages = document.querySelectorAll(".languages ul li p");
let uname = document.querySelector(".intro h1");
let job = document.querySelector(".intro p");
let profile = document.querySelector(".profile p");
let projects = document.querySelectorAll(".projects ul li");
let references = document.querySelectorAll(".references ul li");
let res_contact = document.querySelectorAll(".res-contact input");
let res_edu = document.querySelectorAll(".res-edu input");
let res_skills = document.querySelectorAll(".res-skills input");
let res_languages = document.querySelectorAll(".res-languages input");
let res_name = document.querySelector(".res-name .name input");
let res_job = document.querySelector(".res-name .job input");
let res_profile = document.querySelector(".res-profile input");
let res_projects = document.querySelectorAll(".res-projects input");
let res_references = document.querySelectorAll(".res-references input");
let btn = document.querySelector(".btn button")

res_img.addEventListener("change", function () {
    let file = res_img.files[0]; 
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file); 
    }
});

res_contact.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (contact[index]) {
            contact[index].textContent = input.value;
        }
    });
});

res_edu.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (education[index]) {
            education[index].textContent = input.value;
        }
    });
});
res_skills.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (skills[index]) {
            skills[index].textContent = input.value;
        }
    });
});

res_languages.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (languages[index]) {
            languages[index].textContent = input.value;
        }
    });
});

res_name.addEventListener("input", function () {
    if (uname) {
        uname.textContent = res_name.value;
    }
});

res_job.addEventListener("input", function () {
    if (job) {
        job.textContent = res_job.value;
    }
});

res_profile.addEventListener("input", function () {
    if (profile) {
        profile.textContent = res_profile.value;
    }
});

res_projects.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (projects[index]) {
            projects[index].textContent = input.value;
        }
    });
});

res_references.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (references[index]) {
            references[index].textContent = input.value;
        }
    });
});
res_main.classList.remove("hide2");
btn.addEventListener("click" , () => {
    main_container.classList.remove("hide");
    res_main.classList.add("hide2");
})
