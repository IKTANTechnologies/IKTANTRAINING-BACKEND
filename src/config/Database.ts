import mongoose, { Connection, ConnectOptions } from 'mongoose';

class Database {
  private url: string;
  private connection: Connection | null = null;

  constructor() {
    this.url = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';
  }

  async connect(): Promise<void> {
    try {
      const options: ConnectOptions = {};
      
      this.connection = mongoose.createConnection(this.url, options);
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
    }
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.close();
      console.log('Conexión con la base de datos cerrada');
    }
  }

  getUrl(): string {
    return this.url;
  }
}

export default Database;
