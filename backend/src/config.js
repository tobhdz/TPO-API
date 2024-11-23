import dotenv from 'dotenv';
dotenv.config();

export default config={
    app:{
        port: process.env.PORT || 4000
    },
    mysql:{
        host:process.env.MYSQL_HOST || 'localhost',
        user: process.env.DB_USER || 'proyectoAPI',
        password: process.env.MYSQL_PASSWORD || 'ProyectoApi',
        database: process.env.MYSQL_DB || 'ProyectoAPI',
    }
}