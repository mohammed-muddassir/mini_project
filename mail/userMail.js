if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
 }
async function sendUserMail(details,mailTransport){
    let mailDetails={
        from:process.env.ADMIN_MAIL,
        to:String(details.email),
        subject:'Booked successfully',
        text:`Hey ${details.username} \n You just booked a package- ${details.package}`
        //age
        //weight
        //gender- details.gender
    };
    await mailTransport.sendMail(mailDetails,function(err,data){
        if(err){
            console.error(err);
        }
        else{
            console.log('email sent succcessfully');
        }
    })
};
module.exports={sendUserMail};