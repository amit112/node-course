const p = new Resolve((resolve,reject)=> {
    resolve(1);
})

p.then(result=> console.log('Result', result))