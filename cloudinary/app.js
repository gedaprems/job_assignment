const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'dzuf7rqkh', 
  api_key: '934941129822218', 
  api_secret: 'gMve9IX5ZKoAODz1lD6uvMOl0uc' 
});


const file = "./videos/video.mp4";

async function run(){
    try{
        /*
        // Upload small video
        const result = await cloudinary.uploader.upload(file,{resource_type: 'video'})
        console.log(`> Result: ${result.secure_url}`)

        */
       
        // Upload large video
        cloudinary.uploader.upload_large(file,
            {resource_type: 'video'},
            function(error,result){
                console.log(result,error);
            });
    }
    catch(error){
        console.error(error);
    }
}

run();