/**
 * DAO (Database access object) for creating and manipulating flat databases using expo-sqlite
 */
import * as SQLite from 'expo-sqlite';

export const DataBase = {
    /** creating a database with one table (aka flat db)
     * 
     * @param tableName - string name for the table and db
     * @param tableSchema - keys are the columns, values a string for the type and further requirements
     * example of a tableSchema:
     *  const tableSchema = {
            id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
            name: 'TEXT NOT NULL',
            email: 'TEXT UNIQUE NOT NULL'
        };
     */
    initializeDatabase: async (tableName: string, tableSchema: object) => {
        // create empty db with file
        const db = SQLite.openDatabaseAsync(`${tableName}.db`);

        // put together tableSchema string for the SQL query
        const columns = Object.entries(tableSchema)
            .map(([column, type]) => `${column} ${type}`)
            .join(', ');
        
        // execute query
        (await db).execAsync(`
PRAGMA journal_mode = WAL; --Write-Ahead Logging for perfomance boost
CREATE TABLE IF NOT EXISTS ${tableName} (${columns});
            `)
    }
    // reading data
    // adding data
}