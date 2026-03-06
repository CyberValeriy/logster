import { Db, MongoClient } from "mongodb";

module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db: Db, client: MongoClient) {
    await db.createCollection('users');
    await db.collection('users').createIndex({ username: 1 }, { background: true });
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db: Db, client: MongoClient) {
    await db.dropCollection('users');
  }
};
