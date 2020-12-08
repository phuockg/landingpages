$(".section-3__listQA-title__wrap").each(function (index) {
  let tag = this;
  $(this)
    .find(".section-3__listQA-title")
    .on("click", function () {
      $(tag).find(".section-3__listQA").slideToggle();
    });
    
});
