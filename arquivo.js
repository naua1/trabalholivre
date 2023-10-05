let escolha = document.querySelector("#produto");
let frame = document.querySelector('#iframe')
let input = document.querySelector('input')


function site (evento){
    event.preventDefault(evento);
    let valor = escolha.value;
    console.log(valor)
    
    if(valor == 'teclado'){
        frame.innerHTML = '<iframe src="https://lista.mercadolivre.com.br/teclados-mecnicos#D[A:teclados%20mecnicos]" frameborder="0"></iframe>' 
    }
    else if(valor == 'Mouse'){
        frame.innerHTML = '<iframe src="https://lista.mercadolivre.com.br/mouse#D[A:mouse]" frameborder="0"></iframe>' 
    }
    else if(valor == 'Monitor'){
        frame.innerHTML = '<iframe src="https://lista.mercadolivre.com.br/monitor-gamer#D[A:monitor%20gamer]" frameborder="0"></iframe>' 
    }
    else if(valor == 'Gabinete'){
        frame.innerHTML = '<iframe src="https://lista.mercadolivre.com.br/gabinete#D[A:Gabinete]" frameborder="0"></iframe>'
    }
    else if(valor == 'processador'){
        frame.innerHTML = '<h1 class="acabou">acabou o estoque</h1> <p class="acabou">logo teremos mais desse produto disponivel</p> <p class="acabou">veja nossos outros prudutos!</p> '
    }
    else if(valor == 'cupon'){
        frame.innerHTML = '<p class="acabou">Use o nosso Cupom "15porcento" no MercadoLivre</p> <p class="acabou">E o Cupon "freteGratis" valido para todo o Brasil</p> <p class="acabou">veja nossos outros prudutos!</p> '
    }
    else{
        alert('escolha um protudo')
    }
}
