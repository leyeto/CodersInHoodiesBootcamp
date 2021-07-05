/**
 * Exercise #
 *
 */

const liker = () => {
  const likeSymbol = document.querySelector(".likeSymbol");
  if ((likeSymbol.src = "img/like_empty.png")) {
    likeSymbol.src = "img/like_full.png";
  } else {
    likeSymbol.src = "img/like_empty.png";
  }
};

const unliker = () => {
  const likeSymbol = document.querySelector(".likeSymbol");
  if ((likeSymbol.src = "img/like_full.png")) {
    likeSymbol.src = "img/like_empty.png";
  }
};
const image = document.querySelector(".post_image");
image.addEventListener("dblclick", () => {
  const likeSymbol = document.querySelector(".likeSymbol");
  likeSymbol.classList.toggle("liked");
  if (likeSymbol.classList.contains("liked")) {
    liker();
  } else {
    unliker();
  }
});

const likeIcon = document.querySelector(".likeSymbol");
likeIcon.addEventListener("click", () => {
  likeIcon.classList.toggle("liked");
  if (likeIcon.classList.contains("liked")) {
    liker();
  } else {
    unliker();
  }
});

const newCommentText = document.querySelector("textarea");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(newCommentText.value);
  const userNewComment = newCommentText.value;
  const commentToAdd = document.createElement("li");
  commentToAdd.innerHTML = `<h3 class="username">username</h3><p>${userNewComment}</p>`;
  document.querySelector(".panel").prepend(commentToAdd);
  document.querySelector("textarea").value = "";
  document.querySelector(".new_comment").classList.toggle("hide");
});

const commentIcon = document.querySelector(".comment");
commentIcon.addEventListener("click", () => {
  document.querySelector(".new_comment").classList.toggle("hide");
});
