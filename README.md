# AWS_S3_Image_upload


1. First create a lambda function and s3 bucket to store image and return a upload image url to users.
 
   End_point -  https://ji5afc1wh4.execute-api.us-east-1.amazonaws.com/check?file={filename}
    method - post
   
 2. Second function is to resize the photo in this I use predefined AWS Serverless Image handler to handle it.
     End_Point - https://dgx73txyv5nve.cloudfront.net/fit-in/200x200/maaSarde.jpeg
                https://dgx73txyv5nve.cloudfront.net/fit-in/{desire_size}/{filename}
