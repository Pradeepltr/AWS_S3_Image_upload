const AWS=require('aws-sdk');

const s3_buket=new AWS.S3();
exports.handler = async (event) => {
    console.log(event)

     const bodyData=event.body
     console.log(bodyData)
   const fileName=event.queryStringParameters.file

    
    
 var Location

const bufferData=Buffer.from(event.body,'base64');
console.log(bufferData)
    const params={
        
         Body:bufferData,
         ContentType:"image/jpeg",
         Bucket:"image-url123",
         Key:fileName
     };
   await s3_buket.upload(params).promise()
  .then(async (result)=>{
      console.log("Location",result.Location)
       Location=result.Location
    
  })
   .catch(err=>{
      console.log(err);
  })
const response = {
        statusCode: 200,
        body:JSON.stringify({
            "Status":"Submitted",
            "ImageURL":Location
        })
    };
    return response;
  
};
