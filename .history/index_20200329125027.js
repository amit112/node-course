console.log('before')
console.log('after')
getUser(1, function(user) {
    console.log(user);
    getRepositories(user.gitUserName , function(repositories) {
        console.log('Repositories', repositories)
        getCommits(repo,displayCommits);
    })
});

function getUser(id , callback ) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback({id: id , gitUserName: 'amit'})
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback(['Repo1','Repo2','Repo3'])
    }, 2000);
}
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Reading a from a database...')
        callback(['Com1','Com2','Com3'])
    }, 2000);
} 

function displayCommits(commits) {
    console.log(commits);
}