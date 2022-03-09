
const clicks = document.querySelectorAll("div");
let id = 0;

clicks.forEach((click, index) => {
  click.addEventListener("click", ()=> {
    id = index + 1;
    location.href = `feedback.html?id=${id}`;
});
});

