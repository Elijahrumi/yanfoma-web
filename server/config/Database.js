import { Sequelize } from "sequelize";

const db = new Sequelize('yanfomadb', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;