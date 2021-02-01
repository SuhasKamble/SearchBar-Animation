const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
  let searchText = document.querySelector(".searchText");

  if (!searchText) {
    swal("Search Error!", "Somethong Went Wrong!", "error");
  } else {
    // location.href = `https://www.google.com/search?q=${searchText}`;
    window.open(`https://www.google.com/search?q=${searchText.value}`);
    searchText.value = "";
  }
});
