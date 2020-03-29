// Callback- based approach
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

// Promise- based approach
// getUser(1).then(user=>{console.log(user); return getRepositories(user.gitUserName)}).
// then(repos=> {console.log(repos); return getCommits(repos)}).then(commits=> console.log(commits)).catch(err=> console.log(err.message));

// function getUser(id) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Reading a user from a database...')
//             resolve({id: id , gitUserName: 'amit'})
//         }, 2000);
//     })

// }

// function getRepositories(username) {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Reading  a Repo from a database...')
//         resolve(['Repo1','Repo2','Repo3'])
//     }, 2000);
// });
// }
// function getCommits(repo) {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Reading a commits from a database...')
//         resolve(['Com1','Com2','Com3'])
//     }, 2000);
// });
// } 

// Async await- based approach
async function displayData() {
    try {
        const user = await getUser(1);
        console.log(user);
        const repos = await getRepositories(user.gitUserName);
        console.log(repos);
        const commits = await getCommits(repos);
        console.log(commits);
    } catch (err) {
        console.log(err.message);
    }

}

displayData();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...')
            resolve({
                id: id,
                gitUserName: 'amit'
            })
        }, 2000);
    })

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading  a Repo from a database...')
            resolve(['Repo1', 'Repo2', 'Repo3'])
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a commits from a database...')
            resolve(['Com1', 'Com2', 'Com3'])
        }, 2000);
    });
}