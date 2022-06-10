const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') 
        return global.connection;
    
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'crud'
    });

    console.log('MySQL esta Conectado!');;
    global.connection = connection;
    return global.connection;
}


// TABLE COMPRADOR


// CREATE COMPRADOR
async function insertBuyer(buyer) {
    const conn = await connect();
    const sql = 'INSERT INTO comprador (buyer_nome, buyer_idade, buyer_uf) VALUES (?, ?, ?);';
    const values = [buyer.buyer_nome, buyer.buyer_idade, buyer.buyer_uf];
    return await conn.query(sql, values);
}

// READ COMPRADOR
async function selectBuyers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM comprador;');
    return rows;
}

// UPDATE COMPRADOR
async function updateBuyer(id, buyer) {
    const conn = await connect();
    const sql = 'UPDATE comprador SET buyer_nome = ?, buyer_idade = ?, buyer_uf = ? WHERE buyer_id = ?;';
    const values = [buyer.buyer_nome, buyer.buyer_idade, buyer.buyer_uf, id];
    return await conn.query(sql, values);
}

// DELETE COMPRADOR
async function deleteBuyer(id) {
    const conn = await connect();
    const sql = 'DELETE FROM comprador WHERE buyer_id = ?;';
    return await conn.query(sql, [id]);
}

// TABLE PEDIDO

// CREATE PEDIDO
async function insertPurchase(purchase) {
    const conn = await connect();
    const sql = 'INSERT INTO pedido (buy_nome, buy_preco, buy_categoria) VALUES (?, ?, ?);';
    const values = [purchase.buy_nome, purchase.buy_preco, purchase.buy_categoria];
    return await conn.query(sql, values);
}

// READ PEDIDO
async function selectPurchases() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM pedido;');
    return rows;
};

// UPDATE PEDIDO
async function updatePurchase(id, purchase) {
    const conn = await connect();  
    const sql = 'UPDATE pedido SET buy_nome = ?, buy_preco = ?, buy_categoria = ? WHERE buy_id = ?;';
    const values = [purchase.buy_nome, purchase.buy_preco, purchase.buy_categoria, id];
    return await conn.query(sql, values);
};

// DELETE PEDIDO
async function deletePurchase(id) {
    const conn = await connect();
    const sql = 'DELETE FROM pedido WHERE buy_id = ?;';
    return await conn.query(sql, [id]);
}; 


module.exports = {selectBuyers, insertBuyer, updateBuyer, deleteBuyer, insertPurchase, selectPurchases, updatePurchase, deletePurchase}