import React, { useState } from "react"
import OauthLogin from "../src/index"

const clientId =
  "617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com"

const signInCallBack = (err,response) => {
    console.log(err)
    console.log(response) // eslint-disable-line
}



export default () => (
  <div >
    Google buttons
    <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        small:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='sm'
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Normal:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Large:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='lg'
          signInCallBack={signInCallBack}
        />
      </span>
    </div>
    <br />
    Facebook buttons
    <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        small:
        <OauthLogin
          provider='facebook'
          clientId='852823344832596'
          size='sm'
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Normal:
        <OauthLogin
          provider='facebook'
          clientId='852823344832596'
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Large:
        <OauthLogin
          provider='facebook'
          clientId='852823344832596'
          size='lg'
          signInCallBack={signInCallBack}
        />
      </span>
    </div>
    <br />
    large customized google button
    <OauthLogin
      //google|facebook
      provider='google'
      //text|icon|normal
      clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
      size='lg'
      buttonText='Hello World'
      buttonColor='#28a745'
      signInCallBack={signInCallBack}
    />
    <br />
    <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        large loading button:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='lg'
          isLoading
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        customized  icon  loading button:
        <OauthLogin
          provider='facebook'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='lg'
          isLoading
          spinner='fa-cubes'
          signInCallBack={signInCallBack}
        />
      </span>
    </div>
    <br />
      text only button:

      <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        Large text only button:
    <OauthLogin
        provider='google'
        clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
        size='lg'
        textOnly
        signInCallBack={signInCallBack}
    />
      </span>
          <span>
        Large text only button loading:
    <OauthLogin
        provider='google'
        clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
        size='lg'
        isLoading
        textOnly
        signInCallBack={signInCallBack}
    />
      </span>
      </div>

    <br />
    icon only
    <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        small:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='sm'
          iconOnly
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Normal:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          iconOnly
          signInCallBack={signInCallBack}
        />
      </span>
      <span>
        Large:
        <OauthLogin
          provider='google'
          clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
          size='lg'
          iconOnly
          signInCallBack={signInCallBack}
        />
      </span>
    </div>
      <br/>
      Round icon only
      <div style={{ display: "flex", justifyContent: "space-around " }}>
      <span>
        small:
        <OauthLogin
            provider='google'
            clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
            size='sm'
            iconOnly
            buttonShape="round"
            signInCallBack={signInCallBack}
        />
      </span>
          <span>
        Normal:
        <OauthLogin
            provider='google'
            clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
            iconOnly
            buttonShape="round"
            signInCallBack={signInCallBack}
        />
      </span>
          <span>
        Large:
        <OauthLogin
            provider='google'
            clientId='409968901231-v6och3v52mqfefcq0e1dde9ko92npi0k.apps.googleusercontent.com'
            size='lg'
            iconOnly
            buttonShape="round"
            signInCallBack={signInCallBack}
        />
      </span>
      </div>
  </div>
)
