import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const IconComponent = ({
  icon,
  isLoading,
  spinner,
  customizePrefixCls,
  size,
  iconOnly
}) => {
  const spinnerString = spinner === "" ? "fa-circle-o-notch" : spinner
  const iconString = isLoading ? ` ${spinnerString} fa-spin` : `fa ${icon}`
  const prefixCls = `${customizePrefixCls}-icon`
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size
    },
    `fa ${iconString}`,
    iconOnly ? "icon-only" : false
  )
  return (
    <span>
      {
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
        />
      }

      <i className={classes} />
    </span>
  )
}

IconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  customizePrefixCls: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  spinner: PropTypes.string,
  iconOnly: PropTypes.bool
}

IconComponent.defaultProps = {
  isLoading: false,
  spinner: "",
  iconOnly: false
}

export default IconComponent
