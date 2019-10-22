import { loadSdk } from "../util"

const googleSdkLoader = (document, ElementIndexIdName, sdkSrc, initPrams) => {
  const cb = () => {
    window.gapi.load("auth2", async () => {
      if (!window.gapi.auth2.getAuthInstance()) {
        window.gapi.auth2.init(initPrams)
      }
    })
  }
  loadSdk(document, "script", ElementIndexIdName, sdkSrc, cb)
}

const facebookSdkLoader = (document, ElementIndexIdName, sdkSrc, initPrams) => {
  const cb = () => {
    window.fbAsyncInit = () => {
      window.FB.init(initPrams)
    }
  }
  loadSdk(document, "script", ElementIndexIdName, sdkSrc, cb)
}

const SdkLoader = {
  google: googleSdkLoader,
  facebook: facebookSdkLoader
}

export default SdkLoader
