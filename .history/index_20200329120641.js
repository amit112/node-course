console.log('before')
console.log('after')
getUser(1, function(user) {
    console.log('User', user);
    getRepositories(user.gitUserName , (repositories) => {console.log('Repositories', repositories);
});

function getUser(id , callback ) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback({id: id , gitUserName: 'amit'})
    }, 2000);
}

function getRepositories(username) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback(['Repo1','Repo2','Repo3'])
    }, 2000);
}