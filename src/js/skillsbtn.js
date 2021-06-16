function setVisible() {
    // document.getElementById("my-skills").style.visibility = "visible";
    var x = document.getElementById("my-skills");
    if (x.style.display === "none" || x.style.display == "") {
        x.style.display = "block";
        window.location.href = '#my-skills'
    } else {
        window.location.href = '#presentation'
        x.style.display = "none";
    }
}

// document.getElementById("my-skills").addEventListener("click", function() {

//     // thing.classList.toggle("m-fadeOut");
//     // thing2.classList.toggle("m-fadeIn");

//     var x = document.getElementById("my-skills");
//     if (x.style.display === "none") {
//         x.classList.toggle("m-fadeIn");
//         window.location.href = '#my-skills'
//     } else {
//         x.classList.toggle("m-fadeOut")
//     }
// });


// function setVisible() {
//     // document.getElementById("my-skills").style.visibility = "visible";
//     var x = document.getElementById("my-skills");
//     if (x.style.display === "none") {
//         window.location.href = '#my-skills'
//         x.classList.toggle("m-fadeIn");

//     } else {
//         x.classList.toggle("m-fadeOut")
//     }
// }