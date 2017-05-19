var pictures = ["assets/img/a1.jpg", "assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];


function firstPandaPhoto() {
    var addPanda = document.getElementById('first-panda');
    var contenedor = '';
    contenedor += '<img class="panda-uno" src="assets/img/uno.jpg" alt="">';
    addPanda.innerHTML = contenedor;
}

firstPandaPhoto();

function secondPandaPhoto() {
    var addPanda = document.getElementById('second-panda');
    var contenedor = '';
    contenedor += '<img class="panda-dos" src="assets/img/dos.jpg" alt="">';
    addPanda.innerHTML = contenedor;
}

secondPandaPhoto();

function galery() {
    var manyPandas = document.getElementById('color');
    pictures.forEach(function(foto) {
        var img = document.createElement('img');
        img.setAttribute("src", foto);
        manyPandas.appendChild(img);
    });
}

galery();

function thirdPandaPhoto() {
    var thirdPanda = document.getElementById('third-panda');
    var contenedor = '';
    contenedor += '<img class="panda-tres" src="assets/img/tres.jpg" alt="">';
    thirdPanda.innerHTML = contenedor;
}

thirdPandaPhoto();