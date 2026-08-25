import Database from '@tauri-apps/plugin-sql';

let db: Database | null = null;

export const getDb = async (): Promise<Database> => {
  if (!db) return await Database.load('sqlite:mydatabase.db');
  return db;
};
