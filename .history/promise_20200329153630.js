const p = new Promise((resolve,reject)=> {
    setTimeout(() => {
        //resolve(1);
        reject(new Error('error'))
    }, 2000);
})

p.catch(result=> console.log('Result', result))