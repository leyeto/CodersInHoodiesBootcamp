/**
 * Exercise #
 *
 */

const addSymbols = () => {
  const focusImage = document.querySelector(".symbols");
  let like = document.createElement("img");
  like.classList.add("likeTag");
  like.src = "img/like_empty.png";
  like.alt = "like image";
  focusImage.appendChild(like);

  like.addEventListener("dblclick", (event) => {
    like.src = "img/like_full.png";
  });

  const comment = document.createElement("img");
  comment.classList.add("commentTag");
  comment.src = "img/comment_empty.png";
  comment.alt = "Comment image";
  focusImage.appendChild(comment);

  comment.addEventListener("click", (event) => {
    const newComment = document.createElement("textarea");
    newComment.classList.add("newComment");
    newComment.id = "newComment";
    newComment.name = "newCommentIs";
    newComment.placeholder = "Type your comment";
    newComment.rows = 10;
    newComment.cols = 100;

    document.querySelector(".new_comment").appendChild(newComment);
  });
};

const imageFile = document.querySelector("#profile_pic");
imageFile.addEventListener("change", (event) => {
  const image = event.target || window.event.target,
    files = image.files;

  if (FileReader && files && files.length) {
    const fr = new FileReader();
    fr.onload = () => {
      document.querySelector(".img_wrapper img").src = fr.result;
    };
    fr.readAsDataURL(files[0]);
  }

  addSymbols();
});

// let uploadPic = document.querySelector("form");
// uploadPic.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const fileAddress = document.querySelector(".fileName");
//   console.log("file address is " + fileAddress.webkitMatchesSelector);
//   const image = document.querySelector(".img_wrapper img");

// });
