console.log('before')
console.log('after')
getUser(1,displayUser);

function getUser(id , callback ) {
    setTimeout(() => {
        console.log('Reading a user from a database...')
        callback({id: id , gitUserName: 'amit'})
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Reading  a Repo from a database...')
        callback(['Repo1','Repo2','Repo3'])
    }, 2000);
}
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Reading a commits from a database...')
        callback(['Com1','Com2','Com3'])
    }, 2000);
} 

function displayCommits(commits) {
    console.log(commits);
}
function displayRepositories(repositories) {
    console.log(repositories);
    getCommits(repositories,displayCommits);
}

function displayUser(user) {
    console.log(user);
    getRepositories(user.gitUserName , displayRepositories)
}