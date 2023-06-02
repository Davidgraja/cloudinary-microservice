const { request , response} = require('express');
const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL);


const cloudinaryDelete = async  (req = request , res = response) => {
        
    const {id , folder = '' , typeResource = 'image' } = req.query;

    if( !id || id.trim().length === 0) return res.status(400).json({ message : 'Por favor asegurese de enviar el id '  });
    
    try {
        const  {deleted} = await cloudinary.api.delete_resources([ folder + '/' + id],{ resource_type: typeResource});

        const result = Object.values(deleted)
         
        if(result.includes('not_found')){
            return  res.status(404).json({
                ok : false,
                message : 'el archivo no ha sido encontrado'
            })
        }

        return res.json({
            ok : true,
            message : 'Imagen eliminada'
        });   
                    
            
    }catch (e) {

        console.log(e);
        return  res.status(400).json({
            ok : false, 
           message : 'ha ocurrido un error , por favor comuniquese con el administrador'
        });

    }

}


module.exports = {
    cloudinaryDelete
} 