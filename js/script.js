var toogleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light")

    const islight = html.classList.contains("light");
    const srcvalue = islight ? "../img/caiuuuu.jpg" : "../img/cr.jpg";
    const altvalue = islight ? "imagem de perfil com uma pessoa linda jogando basquete" : "imagem de perfil de uma pessoa linda arrumando a meia";


    document.querySelector("#profile img").setAttribute("src", srcvalue);
    document.querySelector("#profile img").setAttribute("alt", altvalue);
}