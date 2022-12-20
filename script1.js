let tentativas = 6;
let letras_arriscadas = "";
let palavra_arriscada;
let letra_chutada;
let palavra_underline = [];
let teste = "";
let st = document.getElementById("status")

let numero_aletorio = Math.ceil(Math.random()*50)
let palavras = ["sagaz", "galaxia", "historia",'mexer','avental','termo','senso','nobre','serenata','esforçado',
                    'exceto', 'quarentena', 'impacto', 'pizzaiolo', 'alpaca', 'lhama', 'indole', 'xadrez', 'groselha',
                    'empatia', 'pistache', 'novela', 'faca', 'veludo', 'peteca', 'serrote', 'goleiro', 'volante',
                    'crocodilo', 'peculiar', 'denegrir', 'microfone', 'respeito', 'soldado', 'deferido', 'prudente',
                    'perspicaz', 'fantasma', 'avestruz', 'concessao', 'promessa', 'escrupulo', 'talheres',
                    'companhia', 'prescindir', 'caçador', 'presunçoso', 'paraquedas', 'promissor', 'confessar']

let palavra_aleatoria = palavras[numero_aletorio]
let tamanho_palavra = palavra_aleatoria.length;

let nenhuma = 0;
for(let i = 0;i<palavra_underline.length;i++){
    if(palavra_underline[i] == "_"){
        nenhuma++
    }else if(palavra_underline[i] != "_" && nenhuma == 0){
        st.innerHTML = "Você ganhou!"
    }
}

for(let i=0;i<tamanho_palavra;i++){
    if(palavra_underline[i] == undefined){
        palavra_underline[i] = "_"
    }
    else{
    }
    document.getElementById("forca").innerHTML = palavra_underline;
}

document.getElementById("forca").innerHTML = palavra_underline;

//imprime as tentativas na tela
document.getElementById("tryes").innerHTML = tentativas + " tentativas";

//imprime a quantidade de letra da palavra
document.getElementById("letras").innerHTML = tamanho_palavra + " letras";

//imprime as letras arriscadas
document.getElementById("letrasChutadas").innerHTML = "Letras arricadas: " + letras_arriscadas;

//função que recebe a letra chutada
function btn1() {
    letra_chutada = document.getElementById("letterInput").value;
    letra_chutada = letra_chutada[0].toLowerCase()

    if (letra_chutada == 'á' || letra_chutada == 'ã' || letra_chutada == 'à' || letra_chutada == 'â'){
        letra_chutada = 'a'
    }else if (letra_chutada == 'é' || letra_chutada == 'è' || letra_chutada == 'ê'){
        letra_chutada = 'e'
    }else if (letra_chutada == 'í' || letra_chutada == 'ì' || letra_chutada == 'î'){
        letra_chutada = 'i'
    }else if (letra_chutada == 'ó' || letra_chutada == 'õ' || letra_chutada == 'ò' || letra_chutada == 'ô'){
        letra_chutada = 'o'
    }else if (letra_chutada == 'ú' || letra_chutada == 'ù' || letra_chutada == 'û'){
        letra_chutada = 'u'
    }


    if(letra_chutada[1] != undefined){

        st.innerHTML = "Digite apenas 1 letra"

    }else{
        
        for(let i=0;i<tamanho_palavra;i++){
            if(palavra_aleatoria[i] == letra_chutada){
                palavra_underline[i] = letra_chutada
            }
        }

        for(let i=0;i<tamanho_palavra;i++){
            if(palavra_underline[i] == undefined){
                palavra_underline[i] = "_"
            }
            else{
            }
            document.getElementById("forca").innerHTML = palavra_underline;
        }
        
        
        let tem = 0;
        if(letras_arriscadas.length == 0){
            letras_arriscadas+=letra_chutada + "  ";
            document.getElementById("letrasChutadas").innerHTML = "Letras arricadas: " + letras_arriscadas;
        }
        else{

            let achei = 0;

            for(let i=0; i<letras_arriscadas.length; i++){
                if(letras_arriscadas[i] == letra_chutada){
                    achei++;
                    st.innerHTML = "Letra já chutada"
                    i = letras_arriscadas.length
                    tem++
                }
                else if(i == letras_arriscadas.length-1 && achei == 0){
                    letras_arriscadas+=letra_chutada + "  ";
                    document.getElementById("letrasChutadas").innerHTML = "Letras arricadas: " + letras_arriscadas;
                    i = letras_arriscadas.length
                }
            }
        }

        for(let i=0;i<tamanho_palavra;i++){
            if(letra_chutada == palavra_aleatoria[i]){
                st.innerHTML = "Tem na forca"
                tem++
            }
            else if(tem == 0 && i+1 == tamanho_palavra && tentativas > 0){
                st.innerHTML = "Não tem na forca, menos 1 tentativa"
                tentativas--;
                document.getElementById("tryes").innerHTML = tentativas + " tentativas";
            }
        }

        document.getElementById("letrasChutadas").innerHTML = "Letras arricadas: " + letras_arriscadas;

        if(tentativas == 0){
            st.innerHTML = "Você perdeu! Acabou suas tentativas";
            alert("Você perdeu! Acabou suas tentativas, Palavra era: " + palavra_aleatoria)
            document.location.reload(true);
        }

        let aqui = 0;
        for(let i=0;i<tamanho_palavra;i++){
            if(palavra_aleatoria[i] != palavra_underline[i]){
                aqui++
            }
            else if(aqui == 0 && i == tamanho_palavra-1){
                st.innerHTML = "Você ganhou! A resposta era "+ palavra_aleatoria;
                alert("Você ganhou!")
                document.location.reload(true);
            }
        }


    }
    document.getElementById("letterInput").value = "";
}

//função que recebe a palavra chutada
function btn2() {
    palavra_arriscada = document.getElementById("wordInput").value;
    palavra_arriscada = palavra_arriscada.toLowerCase()

    let acentos = 0

    for(let i=0;i<palavra_arriscada.length;i++){

        if(palavra_arriscada[i] == 'á' || palavra_arriscada[i] == 'ã' || palavra_arriscada[i] == 'à' || palavra_arriscada[i] == 'â'){
            palavra_arriscada = ""
            alert("Digite a palavra sem acentos")
            acentos++
        }else if(palavra_arriscada[i] == 'é' || palavra_arriscada[i] == 'è' || palavra_arriscada[i] == 'ê'){
            palavra_arriscada = ""
            alert("Digite a palavra sem acentos")
            acentos++
        }else if(palavra_arriscada[i] == 'í' || palavra_arriscada[i] == 'ì' || palavra_arriscada[i] == 'î'){
            palavra_arriscada = ""
            alert("Digite a palavra sem acentos")
            acentos++
        }else if(palavra_arriscada[i] == 'ó' || palavra_arriscada[i] == 'õ' || palavra_arriscada[i] == 'ò' || palavra_arriscada[i] == 'ô'){
            palavra_arriscada = ""
            alert("Digite a palavra sem acentos")
            acentos++
        }else if(palavra_arriscada[i] == 'ú' || palavra_arriscada[i] == 'ù' || palavra_arriscada[i] == 'û'){
            palavra_arriscada = ""
            alert("Digite a palavra sem acentos")
            acentos++
        }

    }

    if(palavra_arriscada[1] == undefined && acentos == 0){
        st.innerHTML = "Digite apenas palavras"
    }else if(palavra_arriscada[1] != undefined && acentos == 0){

        if(palavra_arriscada == palavra_aleatoria){
            st.innerHTML = "Você ganhou! A palavra da forca era: " + palavra_aleatoria
            alert("Você ganhou! Palavra arriscada estava certa")
            document.location.reload(true);
        }else{
            st.innerHTML = "Não era "+palavra_arriscada+", menos 1 tentativa"
            tentativas -= 1;
            
        }

    }

    if(tentativas == 0){
        alert("Você perdeu! Acabou suas tentativas, Palavra era: " + palavra_aleatoria)
        document.location.reload(true);
    }

    document.getElementById("wordInput").value = "";
    document.getElementById("tryes").innerHTML = tentativas + " tentativas";
}

