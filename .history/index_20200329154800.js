// Callbacks
// getUser(1,displayUser);

// function getUser(id , callback ) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...')
//         callback({id: id , gitUserName: 'amit'})
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Reading  a Repo from a database...')
//         callback(['Repo1','Repo2','Repo3'])
//     }, 2000);
// }
// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('Reading a commits from a database...')
//         callback(['Com1','Com2','Com3'])
//     }, 2000);
// } 

// function displayCommits(commits) {
//     console.log(commits);
// }
// function displayRepositories(repositories) {
//     console.log(repositories);
//     getCommits(repositories,displayCommits);
// }

// function displayUser(user) {
//     console.log(user);
//     getRepositories(user.gitUserName , displayRepositories)
// }

// Promises
getUser(1).then(user=> { 
    console.log(user);
    getRepositories(user.gitUserName).then(repos=>{ 
        console.log(repos);
        getCommits(repos).then(commits=> console.log(commits)) 
    })});

function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a database...')
            resolve({id: id , gitUserName: 'amit'})
        }, 2000);
    })
   
}

function getRepositories(username) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Reading  a Repo from a database...')
        resolve(['Repo1','Repo2','Repo3'])
    }, 2000);
});
}
function getCommits(repo) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Reading a commits from a database...')
        resolve(['Com1','Com2','Com3'])
    }, 2000);
});
} 
