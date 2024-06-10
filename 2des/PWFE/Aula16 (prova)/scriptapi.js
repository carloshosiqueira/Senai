function loginWithGithub(){
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23liy5GSblftW2snRo&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if(error === 'acess-denied'){
    window.location.href = 'index.html';
}