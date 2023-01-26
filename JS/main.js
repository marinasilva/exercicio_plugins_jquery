$(document).ready(function (){   

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }, 
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira seu telefone',
            cep: 'Por favor, insira seu CEP',
            cpf: 'Por favor, insira seu CPF',
            address: 'Por favor, insira seu endereço',
        },
        submitHandler: function(form){

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem campos incorretos, verifique o formulário!`);
            }
        }
    })
})