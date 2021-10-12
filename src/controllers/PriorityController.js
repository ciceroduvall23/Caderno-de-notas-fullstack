const Annotations = require('../models/Annotations');

module.exports = {
  async read(request, response){
 const Priority = request.query; /*eu peguei no meu query o  priority true */

 const priorityNotes = await Annotations.find(Priority);  /*o retorno será o registro priority true*/ 
 
 return response.json(priorityNotes);
 
},

 async update(request, response){
   const { id } = request.params;
  
   const annotation = await  Annotations.findOne({_id : id });
     
     if (annotation.Priority){
         annotation.Priority = false; 
    
      } else {
        annotation.Priority = true;
      }  

      await annotation.save(); /*o registro será salvo*/
      return response.json(annotation); 
   }
}  