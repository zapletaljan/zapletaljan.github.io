document.addEventListener("DOMContentLoaded", function () {
    const kutilButton = document.getElementById("kutil");
    const googleButton = document.getElementById("google");
    const aiButton = document.getElementById("ai");
    const prevodButton = document.getElementById("prevod");
    const themeButton = document.getElementById("theme");
    const kamenButton = document.getElementById("kamen");
    const golButton = document.getElementById("gol");
    const jokeButton = document.getElementById("joke");
    kutilButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/html/index.html";
    });
    googleButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/Google-Search/";
    });
    aiButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/Kvantove-pocitace/index.html";
    });
    prevodButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/Temperature-convertor/";
    });
    themeButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/javascript-ai/";
    });
    kamenButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/Rock-Paper-Scissors-Lizard-Spock/";
    });
    golButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/gol/";
    });
    jokeButton.addEventListener("click", function () {
        window.location.href = "https://zapletaljan.github.io/Joke-API/";
    });
});