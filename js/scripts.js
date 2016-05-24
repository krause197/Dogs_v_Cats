$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('h1').css('background-color', 'yellow');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').css('background-color', 'blue');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  //Bark and Meow Functions
  $("button#bark").click(function() {
    $("div#dog-bark").prepend("<p>Meow!</p>");
    $("div#dog-bark").prepend("<img src='https://unsplash.it/300/' />");
    $("div#dog-bark").children("img").first().click(function() {
      $(this).remove();
      });
    });

  $("button#meow").click(function() {
    $("div#cat-meow").after("<p>Woof!</p>")
    });
});
