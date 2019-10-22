

const googleConfig = {
    color:'#FF3E30',
    sdkSrc:'https://apis.google.com/js/api.js',
    iconName:'fa-google',
    ElementIndexIdName: 'gsdk',
    params:{
        scope: 'profile email',
        accessType: 'online',
        cookiePolicy: 'single_host_origin',
        fetchBasicProfile: true,
        isSignedIn: false,
        uxMode: 'popup',
    }
}

const facebookConfig = {
    color:'#3b5998',
    sdkSrc:`https://connect.facebook.net/en_US/sdk.js`,
    iconName:'fa-facebook',
    ElementIndexIdName: 'fsdk',
    params:{
        cookie: true,
        xfbml: true,
        version: 'v4.0',
    }
}

const Configs ={
    go:googleConfig,
    fa:facebookConfig
}



export default Configs
