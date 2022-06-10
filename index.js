(async () => {
    const banco = require("./db");
    console.log('Começou!');

    // TABLE COMPRADOR

    // CREATE COMPRADOR
    console.log('INSERT INTO comprador');
    const result = await db.insertBuyer({ buyer_nome: 'Ana', buyer_idade: 29, buyer_uf: 'SP' });
    console.log(result);

    // READ COMPRADOR
    console.log('SELECT * FROM compradores');
    const compradores = await db.selectBuyers();
    console.log(compradores);

    // UPDATE COMPRADOR
    console.log('UPDATE INTO comprador');
    const result2 = await db.updateBuyer(1, { buyer_nome: 'Gabriela', buyer_idade: 22, buyer_uf: 'PR' })
    console.log(result2);

    // READ COMPRADOR
    console.log('SELECT * FROM comprador');
    const compradores1 = await db.selectBuyers();
    console.log(compradores1);

    // DELETE COMPRADOR
    console.log('DELETE FROM comprador');
    const result3 = await db.deleteBuyer(4);
    console.log(result3);

    // READ COMPRADOR
    console.log('SELECT * FROM compradores');
    const compradores2 = await db.selectBuyers();
    console.log(compradores2);

     // TABLE PEDIDO

    // CREATE PEDIDO
    console.log('INSERT INTO pedido');
    const result4 = await db.insertRequest({ buy_nome: 'Notebook', buy_preco: 3500.00, buy_categoria: 'Eletronicos' });
    console.log(result4);

    // READ PEDIDO
    console.log('SELECT * FROM pedido');
    const pedido = await db.selectRequests();
    console.log(pedido);


    // UPDATE PEDIDO
    console.log('UPDATE INTO pedido');
    const result5 = await db.updateRequest(1, { buy_nome: 'Sofá', buy_preco: 1370.00, buy_categoria: 'Moveis' })
    console.log(result5);

    // READ PEDIDO
    console.log('SELECT * FROM pedido');
    const pedido1 = await db.selectRequests();
    console.log(pedido1);
 

    // DELETE PEDIDO
    console.log('DELETE FROM pedido');
    const result6 = await db.deleteRequest(4)
    console.log(result6);

    // READ PEDIDO
    console.log('SELECT * FROM pedido');
    const pedido2 = await db.selectRequests();
    console.log(pedido2);

})();