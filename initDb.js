const sql = require('mssql');

const config = {
  server: 'DESKTOP-9O50B9I\\SQLEXPRESS',
  authentication: {
    type: 'default',
    options: {
      userName: '', // Will use Windows auth
      password: ''
    }
  },
  options: {
    trustServerCertificate: true,
    encrypt: false
  }
};

async function initDb() {
  try {
    const pool = new sql.ConnectionPool(config);
    await pool.connect();
    console.log('Connected to SQL Server');

    // Check if devlogs database exists
    const result = await pool.request()
      .query("SELECT name FROM sys.databases WHERE name = 'devlogs'");

    if (result.recordset.length === 0) {
      console.log('Creating devlogs database...');
      await pool.request()
        .query('CREATE DATABASE devlogs');
      console.log('Database created');
    } else {
      console.log('Database already exists');
    }

    await pool.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

initDb();
