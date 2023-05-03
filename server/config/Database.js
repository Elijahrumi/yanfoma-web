import { Sequelize } from "sequelize";

const db = new Sequelize('yanfomadb', 'root', '', {
    host: "localhost:5000",
    dialect: "mysql"
});

export default db;