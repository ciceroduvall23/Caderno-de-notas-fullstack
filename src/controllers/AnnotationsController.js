/* vai ser responavel em manipular as ações de respostas.criar anotações,deletar anotações */
const Annotations = require('../models/Annotations');

module.exports = {
  
   //assim que a conexão for aprovada,dará um retorno para o meu servidor 
    async read(request, response){  /* async buscar um dados*/
      const annotationList = await Annotations.find();
      return response.json(annotationList);
    /*  ele vai lá no banco de dados e vai pegar os registros*/ 
    },
    /*função get,vai buscar informações */
 async  create(request,response){
    console.log(request.body);
   const {title, notes, priority} = request.body;
   /*o mongoDB vai criar os registros com title, notes, priority */ 

   if (!notes || !title){
        return response.status(400).json({ error:"Necessário um título/anotação!"})

   }   /* se o notes ou title nao tiver nenhuma informação */
   const annotationCreated = Annotations.create({
     title,
     notes,
     priority

   });
    return response.json(annotationCreated);
},
     
    async delete(request,response){
       const { id } = request.params;
       
       const annotationDelete = await Annotations.findOneAndDelete ({_id : id}); /*findOneAndDelete ele busca quem eu quero e vai deletar */   
        if(annotationDelete){
           return response.json(annotationDelete);   

        }

        return response.status(401).json({error:"Não foi encontrado o registro para deletar"}); 
      }
    }

   //findOne vai retornar o primeiro registro no banco,find vai retornar todos os registros
      /*return response.json({
           success:true,
      })*/