console.log("Welcome to Chu's Personal Library!");
function showTab(tab){

    document.querySelectorAll(".tab-content")
    .forEach(content=>content.classList.remove("active"));

    document.querySelectorAll(".tab")
    .forEach(button=>button.classList.remove("active"));

    document.getElementById(tab)
    .classList.add("active");

    event.target.classList.add("active");

}
