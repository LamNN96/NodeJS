   const  controller = require('./controller');



    controller.readFile('test.txt', (data) => {
        console.log(`log: ${data}`);
    });