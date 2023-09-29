require('dotenv').config();

const commonConfig = {
	username: process.env.MYSQL_USER || 'user',
	password: process.env.MYSQL_PASSWORD || 'password',
	database: process.env.MYSQL_DATABASE || 'database',
	host: "db",
	dialect: "mysql"
};

module.exports = {
	development: { ...commonConfig },
	test: { ...commonConfig },
	production: { ...commonConfig }
};