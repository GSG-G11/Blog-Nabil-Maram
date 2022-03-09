const container = document.querySelector(".container");
const id = window.location.href.split("=")[1];

document.querySelector("form").action = `/feedback/${id}`;

fetch(`/result/${id}`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const post = document.createElement("div");
      post.classList.add("all-feedback");

      const postTitle = document.createElement("p");
      postTitle.innerText = item.title;
      post.appendChild(postTitle);

      const postContent = document.createElement("p");
      postContent.innerText = item.content;
      post.appendChild(postContent);

      container.appendChild(post);
    });
  });


  document.querySelector('.logo').addEventListener('click', () => {
   location.href = '/';
  });

  fetch('/names')
  .then((res) => res.json())
  .then((data) => {
   let oneObjArr = data.filter(item => item.id == id);
    document.querySelector(".user-name span").innerText = oneObjArr[0].name;
  })