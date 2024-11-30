//Get refrences to form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElememt = document.getElementById("resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent reload page
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("e-mail").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b> name :</b>".concat(name, "</p>\n    <p><b> email :</b>").concat(email, "</p>\n    <p><b> phone :</b>").concat(phone, "</p>\n    \n    <h3>Educatin</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>skills</h3>\n    <p>").concat(skills, "</p>");
    //display generated Resume
    if (resumeDisplayElememt) {
        resumeDisplayElememt.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is Missing.");
    }
});
