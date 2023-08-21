function menuHandler() {
  if (
    document.querySelector(".phone-nav").style.transform ===
    "translateY(-3000px)"
  ) {
    document.querySelector(".phone-nav").style.transform = "translateY(-0px)";
  } else {
    document.querySelector(".phone-nav").style.transform =
      "translateY(-3000px)";
  }
}
