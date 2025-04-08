import db from '../models/index';
let getPageHome=async (req, res) => {
try{
    let data=await db.User.findAll();
    console.log(data);
    return res.render('homePage.ejs',{
        data:JSON.stringify(data)
    });
}catch(e){
    console.log(e);
}
 return res.render('homePage.ejs');
}
let getPageAbout= (req, res) => {
 return res.render('test/about.ejs');
}




module.exports = {
    //getPageHome: getPageHome, là 1 object có key là getPageHome và value là getPageHome
    // hoặc có thể viết ngắn gọn như sau:
    // getPageHome,
    getPageHome,
    getPageAbout,
}