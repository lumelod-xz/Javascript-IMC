const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc(){
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value.replace(',', '.');
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if(nome !== '' && !isNaN(altura) && !isNaN(peso)){       
        const valorIMC = calculaIMC(peso, altura)
        const classificacao = classificacaoIMC(valorIMC);

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta com ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos corretamente!';
    }    
}

function calculaIMC(peso, altura){ 
    return  valorIMC = (peso / (altura * altura)).toFixed(2);
}

function classificacaoIMC(valorIMC){
    if (valorIMC < 18.5) {
        return 'Abaixo do Peso';
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        return 'Peso Ideal';
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        return 'Sobrepeso';
    } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        return 'Obesidade Grau I';
    } else if (valorIMC >= 35 && valorIMC <= 39.9) {
        return 'Obesidade Grau II';
    } else if (valorIMC >= 40) {
        return 'Obesidade Extrema';
    }
}

function ExibirNome(nome){
    return nome;
}


function verificaIdade(idade){

    if(idade <=0){
        console.log('Idade inválida');
    }else if(idade >= 18){
        console.log(ExibirNome('Lucas') + ' você é maior de idade');
    }else{
        console.log(ExibirNome('Lucas') + ' você é menor de idade');
    }
}

verificaIdade(18);