var moveButton = document.querySelector(".nao");

var correctlyButton = document.querySelector(".sim");

moveButton.addEventListener("click", function () {
    var vertical = Math.floor(Math.random() * 300);
    var horizontal = Math.floor(Math.random() * 300);
    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function() {
    alert(" Ja posso ir ou ta cedo??");
});



