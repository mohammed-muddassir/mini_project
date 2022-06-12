async function sendAdminMail(details,mailTransport){
    let mailDetails={
        from:process.env.ADMIN_MAIL,
        to:process.env.ADMIN_MAIL,
        subject:'Confirmation mail',
        text:'Hey admin!! '+details.username+" had booked"+details.package
    };
    await mailTransport.sendMail(mailDetails,function(err,data){
        if(err){
            console.log('error');
        }
        else{
            console.log('email sent succcessfully');
        }
    })

};
module.exports={sendAdminMail};