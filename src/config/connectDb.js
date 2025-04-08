const { Sequelize } = require('sequelize');
require('dotenv').config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize( 
'nodejs_db','root',null,{
  host:'127.0.0.1',
  
  dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false,
    pool: {
    max: 10,        // Tối đa 10 kết nối đồng thời
    min: 0,         // Ít nhất 0 kết nối (idle sẽ đóng)
    acquire: 30000, // Thời gian tối đa (ms) để lấy 1 kết nối (nếu pool đang full)
    idle: 10000     // Thời gian tối đa (ms) để 1 kết nối không dùng bị đóng
  },
    timezone: '+07:00'
});

let connectDb = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports=connectDb;