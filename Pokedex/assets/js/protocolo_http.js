/*

Requisição HTTP

----------ENVIA------------

-URL: https://pokeapi.co/api/v2/pokemon
    ${IP}/${path = caminho de identificação do recurso}

    IP: https://pokeapi.co ou 
        pode ser IP+porta http://192.168.0.9:8080

    Path: api/v2/pokemon

-Request Method: GET / POST / PUT / DELETE / PATCH / ETC...
    GET: Buscar recurso
    POST: Inserir algo
    PUT: Atualizar algo/info
    DELETE: Deletar info

-Formas de inserção de dados:
    -utilizando o path (na url foi add o ID ao final '1')
    ex: https://pokeapi.co/api/v2/pokemon/1

    -Query string: descrição de busca (filtro)
        utilizando o path (na url após '?')
            ?type=grass&name=i
        chave + valor 
            Ex: https://pokeapi.co/api/v2/pokemon?type=grass
        Para adicionar +1 valor pesquisa (add '&' + o que buscar)
            Ex:https://pokeapi.co/api/v2/pokemon?type=grass&name=i

- Request Headers: áreas para transmitir infos do servidor
    Request: Envia Configuração/ Authorization (Basic, bearer)
    
    Ex: content-type: application/jason
        Estou dizendo o tipo de conteúdo que será enviado

-Request Body: corpo da requisição (dados)
     Ex { aqui coloca o conteúdo
        "name": "Teste"
    }

-----------RECEBE------------

-Status Code: um número que indica o status da requisição
    200~299: sucesso
    300~399: redirect
    400~499: erro lado cliente
    500~599: erro interno servidor
    etc
    
-Response Headers: áreas para receber infos do servidor
    Recebe Configuração/ Authorization (Basic, bearer)

-Response Body: corpo da requisição (dados)
     Ex { aqui recebe o conteúdo
        "name": "Teste"

*/