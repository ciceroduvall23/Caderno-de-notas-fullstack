const Annotations = require('../models/Annotations');

module.exports = {
   /*aqui podemos alterar o conteudo */ 
  async update(request, response){
      const { id } = request.params;
      const { notes } = request.body;
 
    const annotation = await Annotations.findOne({ _id : id});

    if (notes) {  /* ele so vai mexer no banco de dados se eu alterar */
        annotation.notes = notes;

        await annotation.save();
    }

    return response.json(annotation); /*mesmo eu alterando ou não,ele vai dar o retorno do annotations */
  }
}