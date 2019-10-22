import React, { Component } from "react"
import { polyfill } from "react-lifecycles-compat"
import { getProviderConfig } from "./util"
import ButtonComponent from "./button-component"
import Wrapper from "./sytle-wrapper"
import PropTypes from "prop-types"
import configs from "./configs"

class Oauthlogin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      size,
      clientId,
      buttonText,
      buttonColor,
      isLoading,
      provider,
      spinner,
      textOnly,
      iconOnly,
      buttonShape,
      signInCallBack
    } = this.props

    const providerObj = getProviderConfig(provider, configs)
    const color = buttonColor === "" ? providerObj.color : buttonColor
    return (
      <Wrapper color={color}>
        <ButtonComponent
          providerObj={providerObj}
          clientId={clientId}
          buttonText={buttonText}
          size={size}
          isLoading={isLoading}
          spinner={spinner}
          buttonText={buttonText}
          textOnly={textOnly}
          iconOnly={iconOnly}
          buttonShape={buttonShape}
          signInCallBack={signInCallBack}
        />
      </Wrapper>
    )
  }
}

Oauthlogin.propTypes = {
  provider: PropTypes.oneOf(["google", "facebook"]).isRequired,
  clientId: PropTypes.string.isRequired,
  signInCallBack: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonShape: PropTypes.string,
  scope: PropTypes.string,
  fetch_basic_profile: PropTypes.bool,
  ux_mode: PropTypes.string,
  redirect_uri: PropTypes.string,
  cookiePolicy: PropTypes.string,
  prefixCls: PropTypes.string,
  size: PropTypes.string,
  hasIcon: PropTypes.bool,
  isLoading: PropTypes.bool,
  spinner: PropTypes.string,
  textOnly: PropTypes.bool,
  iconOnly: PropTypes.bool
}

Oauthlogin.defaultProps = {
  isLoading: false,
  buttonText: "login",
  buttonColor: "",
  buttonShape: "",
  scope: "profile email",
  cookiePolicy: "single_host_origin",
  fetch_basic_profile: true,
  uxMode: "popup",
  customizePrefixCls: "oauth-login",
  size: "",
  hasIcon: false,
  spinner: "",
  textOnly: false,
  iconOnly: false
}

export default polyfill(Oauthlogin)
