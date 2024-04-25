async function getMunicipios(uf){

    try{
        const municipios = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        const jsonMunicipios = await municipios.json();
        const main = document.getElementById('main');
        const ul = document.createElement('ul');
        main.append(ul);
        for (let i = 0; i< jsonMunicipios.length; i++){
                let li = document.createElement('li');
                li.style.padding = '10px';
                let button = document.createElement('button');
                button.classList = "button";
                button.innerText = "Favoritar";
                button.style.backgroundColor = '#ff4136';
                button.style.borderRadius = '5px';
                button.style.padding = '5px';
                button.style.marginLeft = '50px';
                li.append(jsonMunicipios[i].nome, button);
                ul.append(li)
            }
    }catch(error){
        console.error(error);
    }

}


function adicionarMunicipios(){
   let municipios = [];
   localStorage.setItem("favoritos", municipios);
   municipios = JSON.parse(localStorage.getItem("municipios")) || [];
   const button = document.getElementsByClassName('button');
   console.log(button);
   button.addEventListener('click', () => municipios.push())
   
}
adicionarMunicipios();

function getUrlSearchParams(){

    let params = new URLSearchParams(document.location.search);
    const uf1 = params.get('uf');
    const header = document.getElementById('header');
    console.log(uf1);
    const h1 = document.createElement('h1');
    header.append(h1);
    h1.textContent = `Município de ${uf1}`;
    getMunicipios(uf1);
}

document.addEventListener('DOMContentLoaded', function () {
    getUrlSearchParams()
  })



