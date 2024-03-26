export default {
    "db-config": {
        "sd_EQ0uxl70E3kjCZ8g": {
            "id": "sd_EQ0uxl70E3kjCZ8g",
            "type": "db-config",
            "erdPath": "user_registartion",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "name": "postgres_0",
                "type": "postgres",
                "host": process.env.DB_HOST,
                "port": process.env.DB_PORT,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASSWORD,
                "database": process.env.DB_NAME,
                "schema": process.env.DB_SCHEMA,
                "uuidExtension": "",
                "synchronize": false
            },
            "disabledb": false,
            "selectedDB": "postgres",
            "selectedOption": "postgres",
            "dbCategory": "sql",
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.idleTimeoutMillis": {
                    "type": "num",
                    "value": 30000
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": true
                },
                "oracle_connectString": {
                    "type": "str",
                    "value": "oracle"
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "server_env",
                    "value": "DB_HOST"
                },
                "postgres_port": {
                    "type": "server_env",
                    "value": "DB_PORT"
                },
                "postgres_username": {
                    "type": "server_env",
                    "value": "DB_USER"
                },
                "postgres_password": {
                    "type": "server_env",
                    "value": "DB_PASSWORD"
                },
                "postgres_database": {
                    "type": "server_env",
                    "value": "DB_NAME"
                },
                "postgres_schema": {
                    "type": "server_env",
                    "value": "DB_SCHEMA"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.trustServerCertificate": {
                    "type": "bool",
                    "value": true
                },
                "mongodb_url": {
                    "type": "str",
                    "value": "mongodb://localhost:27017"
                },
                "mongodb_options": {
                    "type": "str",
                    "value": ""
                },
                "mariadb_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mariadb_port": {
                    "type": "num",
                    "value": 3306
                },
                "mariadb_username": {
                    "type": "str",
                    "value": "username"
                },
                "mariadb_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_password": {
                    "type": "str",
                    "value": "password"
                },
                "mariadb_database": {
                    "type": "str",
                    "value": "database"
                },
                "mariadb_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mariadb_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mariadb_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mariadb_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_debug": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_trace": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_flags": {
                    "type": "str",
                    "value": "flags"
                }
            },
            "__n_excludedFromValidation__": {}
        },
        "sd_yzI2l0r02A6PoXPz": {
            "id": "sd_yzI2l0r02A6PoXPz",
            "type": "db-config",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "type": "postgres",
                "host": "localhost",
                "port": 5432,
                "username": "username",
                "password": "password",
                "database": "database",
                "schema": "public",
                "uuidExtension": "",
                "synchronize": false,
                "name": "postgres_1"
            },
            "disabledb": true,
            "selectedDB": "postgres",
            "selectedOption": "postgres",
            "dbCategory": "sql",
            "mssql_type": "mssql",
            "mssql_host": "localhost",
            "mssql_port": 1433,
            "mssql_username": "username",
            "mssql_password": "password",
            "mssql_database": "database",
            "mssql_connectionTimeout": 15000,
            "mssql_requestTimeout": 15000,
            "mssql_synchronize": false,
            "mssql_options.instanceName": "",
            "mssql_pool.max": 10,
            "mssql_pool.min": 1,
            "mssql_pool.idleTimeoutMillis": 30000,
            "mssql_options.cancelTimeout": 5000,
            "mssql_options.packetSize": 4096,
            "mssql_options.useUTC": true,
            "mssql_options.localAddress": "",
            "mssql_options.readOnlyIntent": false,
            "mssql_options.encrypt": false,
            "oracle_type": "oracle",
            "oracle_connectString": "oracle",
            "oracle_host": "localhost",
            "oracle_port": 1521,
            "oracle_username": "username",
            "oracle_password": "password",
            "oracle_serviceName": "orcl",
            "oracle_connectionTimeout": 15000,
            "oracle_requestTimeout": 15000,
            "oracle_synchronize": false,
            "mysql_type": "mysql",
            "mysql_host": "localhost",
            "mysql_port": 3306,
            "mysql_username": "username",
            "mysql_password": "password",
            "mysql_database": "database",
            "mysql_synchronize": false,
            "mysql_extra.connectionLimit": 10,
            "mysql_charset": "UTF8_GENERAL_CI",
            "mysql_timezone": "local",
            "mysql_connectTimout": 10000,
            "mysql_acquireTimeout": 10000,
            "mysql_insecureAuth": false,
            "mysql_supportBigNumbers": true,
            "mysql_bigNumberStrings": false,
            "mysql_dateStrings": false,
            "mysql_debug": false,
            "mysql_trace": true,
            "mysql_multipleStatements": false,
            "mysql_flags": "flags",
            "postgres_type": "postgres",
            "postgres_host": "localhost",
            "postgres_port": 5432,
            "postgres_username": "username",
            "postgres_password": "password",
            "postgres_database": "database",
            "postgres_schema": "public",
            "postgres_uuidExtension": "",
            "postgres_synchronize": false,
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.idleTimeoutMillis": {
                    "type": "num",
                    "value": 30000
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": false
                },
                "oracle_connectString": {
                    "type": "str",
                    "value": "oracle"
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "postgres_port": {
                    "type": "num",
                    "value": 5432
                },
                "postgres_username": {
                    "type": "str",
                    "value": "username"
                },
                "postgres_password": {
                    "type": "str",
                    "value": "password"
                },
                "postgres_database": {
                    "type": "str",
                    "value": "database"
                },
                "postgres_schema": {
                    "type": "str",
                    "value": "public"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    },
    "983957c2-2197-2304-3ba8-02c9a111cd9d": {
        "sd_UXwYxKWV4UchM4EW": {
            "id": "sd_UXwYxKWV4UchM4EW",
            "type": "983957c2-2197-2304-3ba8-02c9a111cd9d",
            "viewType": "server",
            "nodeType": "flow",
            "name": "cloudinary",
            "cloud_name": process.env.CLOUD_NAME,
            "api_key": process.env.CD_API,
            "api_secret": process.env.CD_API_SECRET,
            "category": "config",
            "__ssdTypeInputs__": {
                "cloud_name": {
                    "type": "process.env",
                    "value": "CLOUD_NAME",
                    "constant": false
                },
                "api_key": {
                    "type": "process.env",
                    "value": "CD_API",
                    "constant": false
                },
                "api_secret": {
                    "type": "process.env",
                    "value": "CD_API_SECRET",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    }
}