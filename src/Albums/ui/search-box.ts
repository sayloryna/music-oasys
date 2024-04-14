const listenSearchIcon = (): void => {
  const searchIcon = document.querySelector(".search")!;
  const closeSearchBoxIcon = document.querySelector(".close-button")!;
  const searchBox = document.querySelector(".search-box")!;

  searchIcon.addEventListener("click", () => {
    searchBox.classList.remove("hidden");
  });

  closeSearchBoxIcon.addEventListener("click", () => {
    searchBox.classList.add("hidden");
  });
};

listenSearchIcon();
