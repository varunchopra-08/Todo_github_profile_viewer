
 async function fetchGithubProfile() {
    const username = document.getElementById('username').value
    const profileDiv = document.getElementById('profile');
    if(!username){
        profileDiv.innerHTML='<p>Please enter the username</p>';
        return;
    }  
    try{
        const response =await fetch(`https://api.github.com/users/${username}`);
        if (response.status === 404){
            profileDiv.innerHTML = '<p>User Not Found</p>'
            return;
        }
        const data = await response.json();
        profileDiv.innerHTML += 
            `<div><h2>${data.name || 'No name provided'}</h2>
            <img src="${data.avatar_url}" alt="avatar" width ="150">
            <p><strong>Username:</strong>${data.login}</p>
            <p><strong>Public Repos:</strong>${data.public_repos}</p>
            <p><strong>Followers:</strong>${data.followers}</p>
            <p><strong>Following:</strong>${data.following}</p>
            <p><a href="${data.html_url}" target ="_blank">View github profile</a></p></div`;
    } catch (error) {
        profileDiv.innerHTML = '<p>An error occurred while fetching the profile.</p>';
    }
}
