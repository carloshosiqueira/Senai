function loginWithGithub(){
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=b554c89f32c3b5ff3303&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if(error === 'acess-denied'){
    window.location.href = 'index.html';
}