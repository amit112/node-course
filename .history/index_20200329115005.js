console.log('before')
console.log('after')
getUser(1, function(user) {
    console.log(user);
});

function getUser(id , callback ) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback({id: id , gitUserNam: 'amit'})
    }, 2000);
}

