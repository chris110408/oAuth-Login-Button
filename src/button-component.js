import React, { Children } from "react"
import PropTypes from "prop-types"
import { loadSdk } from "./util"
import { polyfill } from "react-lifecycles-compat"
import IconComponent from "./icon-component"
import classNames from "classnames"
import Configs from "./configs"
const { sdkSrc, ElementIndexIdName } = Configs
import  SdkLoader  from "./fns/sdk-loader"
import handleSignin from "./fns/handleSignin"

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
    this.enableButton = this.enableButton.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      disable: true,
      isLoading: this.props.isLoading
    }
  }

  componentDidMount() {
    const { clientId, providerObj } = this.props
    const { sdkSrc, ElementIndexIdName, params } = providerObj
    let initPrams
    if (ElementIndexIdName === "gsdk") {
      initPrams = Object.assign({}, params, { client_id: clientId })
      SdkLoader.google(document, ElementIndexIdName, sdkSrc, initPrams)
    }
    if (ElementIndexIdName === "fsdk") {
      initPrams = Object.assign({}, params, { appId: clientId })
      SdkLoader.facebook(document, ElementIndexIdName, sdkSrc, initPrams)

    }
    this.enableButton()
  }

  componentWillReceiveProps(nextProps) {
    const { isLoading: currentLoading } = this.props
    const { loading } = nextProps

    if (currentLoading) {
      clearTimeout(this.delayTimeout)
    }

    if (typeof loading !== "boolean" && loading && loading.delay) {
      // eslint-disable-next-line react/no-unused-state
      this.delayTimeout = setTimeout(
        () => this.setState({ isLoading }),
        loading.delay
      )
    } else {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ loading })
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
    }
  }

  async handleClick(e) {
    if (e) {
      e.preventDefault() // to prevent submit if used within form
    }
    const { disable } = this.state
    const { providerObj, signInCallBack } = this.props
    const { ElementIndexIdName } = providerObj
    if (!disable) {
      if (ElementIndexIdName === "gsdk") {
        handleSignin.google(window,signInCallBack)
      }
      if (ElementIndexIdName === "fsdk") {

        handleSignin.facebook(window,signInCallBack)
      }
    }
    this.enableButton()
  }


  enableButton() {
    this.setState({
      disable: false
    })
  }

  render() {
    const {
      customizePrefixCls,
      size,
      isLoading,
      spinner,
      providerObj,
      buttonText,
      textOnly,
      iconOnly,
      buttonShape
    } = this.props
    const { disable } = this.state
    const { iconName } = providerObj
    const prefixCls = `${customizePrefixCls}-btn`
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-icon-only`]: iconOnly,
      [`${prefixCls}-${buttonShape}`]: buttonShape,
      [`${prefixCls}-disabled`]: disable
    })
    const getIcon = (
      icon,
      size,
      customizePrefixCls,
      isLoading,
      spinner,
      iconOnly
    ) => {
      return (
        <IconComponent
          icon={icon}
          size={size}
          customizePrefixCls={customizePrefixCls}
          isLoading={isLoading}
          spinner={spinner}
          iconOnly={iconOnly}
        />
      )
    }
    return (
      <div>
        <button className={classes} type='button' onClick={this.handleClick}>
          {!textOnly | isLoading
            ? getIcon(
                iconName,
                size,
                customizePrefixCls,
                isLoading,
                spinner,
                iconOnly
              )
            : null}

          {iconOnly ? null : buttonText}
        </button>
      </div>
    )
  }
}

ButtonComponent.propTypes = {
  signInCallBack: PropTypes.func.isRequired,
  providerObj: PropTypes.object.isRequired,
  clientId: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  prefixCls: PropTypes.string,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  spinner: PropTypes.string,
  textOnly: PropTypes.bool,
  iconOnly: PropTypes.bool
}

ButtonComponent.defaultProps = {
  loading: false,
  buttonText: "login",
  customizePrefixCls: "oauth-login",
  size: "lg",
  hasIcon: false,
  isLoading: false,
  spinner: "",
  textOnly: false,
  iconOnly: false
}

export default ButtonComponent
