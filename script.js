const avatarDropdownEl = document.querySelector(".avatar-options");
const avatarSelectionEl = document.querySelector(".avatar-selections");
const avatarIndividualSelectionEls = document.querySelectorAll(
  ".avatar-individual-selection"
);

const formSubmitBtn = document.querySelector("#submit-btn");

// To display avatar selection box
avatarDropdownEl.addEventListener("click", function () {
  avatarSelectionEl.classList.toggle("unhide-element");
});

// To close avatar selection box
document.querySelector("body").addEventListener("click", function (e) {
  if (
    !e.target.closest(".avatar-selections") &&
    !e.target.closest(".avatar-options")
  ) {
    if (avatarSelectionEl.classList.contains("unhide-element")) {
      avatarSelectionEl.classList.remove("unhide-element");
    }
  }
});

avatarIndividualSelectionEls.forEach((selectedAvatar) => {
  selectedAvatar.addEventListener("click", () => {
    const imageUrl = selectedAvatar.querySelector("img").src;
    avatarDropdownEl.querySelector("img").src = imageUrl;
    avatarSelectionEl.classList.remove("unhide-element");
  });
});

formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const avatar = avatarDropdownEl.querySelector("img").src;
  console.log("username is ");
  console.log(username);
  console.log("user avatar is ");
  console.log(avatar);
  userSignUp(username, avatar);
});

async function userSignUp(username, userAvatar) {
  const cred = {
    username,
    userAvatar,
  };
  const url = "/user-profile";

  const data = new URLSearchParams();
  for (const [key, value] of Object.entries(cred)) {
    data.append(key, value);
  }
  console.log("data is ");
  console.log(data);

  await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: data,
  });
}
