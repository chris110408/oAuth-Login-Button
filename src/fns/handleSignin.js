const googleHandleSignin =(window,signInCallBack)=>{

    const oauth2 = window.gapi.auth2.getAuthInstance()
    oauth2
        .signIn()
        .then(
            res => {
                signInCallBack(null,res.Zi)
            },

            err => signInCallBack(err, null)
        )
}

const facebookHandleSignin =(window,signInCallBack)=>{

    window.FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', function(response) {
                signInCallBack(null,res);
            });
        } else {
            signInCallBack({err:'User cancelled login or did not fully authorize.'},null);
        }
    });
}

const handleSignin ={
    google:googleHandleSignin,
    facebook:facebookHandleSignin
}

export default handleSignin
