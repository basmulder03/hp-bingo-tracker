import {openDatabase, SQLiteDatabase} from "expo-sqlite";

function openDb(dbName: string): SQLiteDatabase {
    return openDatabase(`./${dbName}.db`);
}