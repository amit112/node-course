console.log('before')
console.log('after')
const user = getUser(1);
console.log(user);
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        return {id: id , gitUserNam: 'amit'}
    }, 2000);
}