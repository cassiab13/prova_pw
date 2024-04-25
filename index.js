async function getEstados(){

    try{
    const estados = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    const jsonEstados = await estados.json();
    const main = document.getElementById('main');
    const ul = document.createElement('ul');
    main.append(ul);

    for(let i=0; i < jsonEstados.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.append(a);
        a.append(jsonEstados[i].nome);
        ul.appendChild(li)
    }
     
    } catch (error){
        console.log(error);
    }
}

getEstados();

