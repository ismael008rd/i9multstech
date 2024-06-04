// const items = document.querySelectorAll('.items')
// const tbodyMei= document.querySelector('.tbodyMei')
// const tbodyContador= document.querySelector('.tbodyContador')
// const tbodyBasico= document.querySelector('.tbodyBasico')
// const tbodyIntermediario= document.querySelector('.tbodyItermediario')
// const tbodyAvancado= document.querySelector('.tbodyAvancado')
// const tbodyPremiun= document.querySelector('.tbodyPremiu')
// const tbody2= document.querySelector('.tbody2')
// console.log(items)

// items.forEach((items)=>{
//     console.log(items)
//     items.addEventListener('click',(event)=>{
//         console.log('click')
//         const itemvalue = event.target.innerText

//         Verificar(itemvalue)
//         // console.log(itemvalue.innerText)
//         // console.log(event.target)
//         // if(itemvalue =='Contador'){
//         //     console.log('é o contador')
//         //     tbody2.classList.remove('hidden')
//         //     tbody.classList.add('hidden')
//         //     // tbody2.classList.add('hidden')
//         // }else if(itemvalue=='Mei'){
//         //     tbody2.classList.add('hidden')
//         //     tbody.classList.remove('hidden')
//         // }
        
//     })
    
// })

// function Verificar(name){
//    switch(name){
//     case "Mei":
//         tbodyMei.classList.remove('hidden')
//         break
//     case "Contador":
//         tbodyContador.classList.remove('hidden')
//         break
//     case "Básico":
//         tbodyBasico.classList.remove('hidden')
//         break
//     case "Intermediario":
//         tbodyIntermediario.classList.remove('hidden')
//         break
//     case "Avançado":
//         tbodyAvancado.classList.remove('hidden')
//         break
//     case "Premiu":
//         tbodyPremiun.classList.remove('hidden')
//         break

//    }
// }


const items = document.querySelectorAll('.items li');
const tabelas = {
    'Mei': document.querySelector('.tbodyMei'),
    'Contador': document.querySelector('.tbodyContador'),
    'Básico': document.querySelector('.tbodyBasico'),
    'Intermediário': document.querySelector('.tbodyItermediario'),
    'Avançado': document.querySelector('.tbodyAvancado'),
    'Premiu': document.querySelector('.tbodyPremiu')
};

items.forEach((item) => {
   
    item.addEventListener('click', (event) => {
        const itemValue = event.target.innerText;
        items.forEach((menuItem) => {
            console.log(menuItem)
           console.log(menuItem.innerHTML)
       
            menuItem.classList.remove('active');
        });
        // Adiciona a classe 'selected' ao item clicado
        event.target.classList.add('active');

        console.log(itemValue)
        mostrarTabela(itemValue);
        
    });
});

function mostrarTabela(nome) {
    for (let tabela in tabelas) {
        if (tabelas.hasOwnProperty(tabela)) {
            if (tabela == nome) {
                tabelas[tabela].classList.remove('hidden');
            } else {
                tabelas[tabela].classList.add('hidden');
            }
        }
    }
}
