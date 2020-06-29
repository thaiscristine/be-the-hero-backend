const express = require('express');

const app = express();

app.use(express.json());

//app.use(express.json());
/**
 * Rotas e Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar informação no backend
  *     app.get()
  * POST: Criar uma informação no back
  *     app.post()
  * PUT: Quando queremos alterar informação no backend
  *     app.put()
  * DELETE: Deletar informação no backend
  *     app.delete()
  * 
  */

  /** Tipos de parâmetros
   * 
   * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos  (:id)
   *    - app.post('/users/:id')
   * Request body: Corpo da requisição utilizado para criar ou alterar recursos
   * 
   * request -> guarda todos os dados da query
   * response -> responsável por retornar resposta pro usuário  
   */

   /**
    * DRIVER: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
app.post('/users', (request, response) => {
    //return response.send('Hello Thais!');

    //const params = request.query;
    //const params = request.params;
    const body = request.body;

    console.log(body);
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Thais Araujo'
    });
});

app.listen(3333);