
const clicks = document.querySelectorAll("div");
let id = 0;

clicks.forEach((click, index) => {
  click.addEventListener("click", ()=> {
    console.log(click);
    id = index + 1;
    location.href = `feedback/${id}`;
});
});

if (module != undefined) {
  module.exports = {
    id
  }
}