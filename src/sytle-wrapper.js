import styled from "styled-components"

const Wrapper = styled.div`
  .oauth-login-icon {
    margin-right: 5px;
    font-size: 18px;
  }
  .oauth-login-icon-sm {
    margin-right: 3px;
    font-size: 16ox;
  }
  .oauth-login-icon-lg {
    margin-right: 8px;
    font-size: 20px;
  }
  i.icon-only {
    margin-right: 0;
  }

  .oauth-login-btn {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    padding: 0 15px;
    height: 32px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    border: 1px solid transparent;
    //color
    background-color: ${props => props.color  || "#096dd9"};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.025);

    :hover,
    :focus {
      //color
      color: ${props => props.color || "#096dd9"};
      background-color: #fff;
      border-color: ${props => props.color  || "#096dd9"};
    }

    :active {
      box-shadow: 0 0 0;
      top: 2px;
    }
  }
  .oauth-login-btn-sm {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }

  .oauth-login-btn-lg {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }
  .oauth-login-btn-icon-only {
    width: 32px;
    height: 32px;
    padding: 0;
    font-size: 16px;
    border-radius: 4px;
  }
  .oauth-login-icon-only.oauth-login-btn-lg {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 18px;
    border-radius: 4px;
  }
  .oauth-login-btn-icon-only.oauth-login-btn-sm {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 4px;
  }

  .oauth-login-btn-round {
    height: 32px;
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  .oauth-login-btn-round.oauth-login-btn-lg {
    height: 40px;
    min-width: 40px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  .oauth-login-btn-round.oauth-login-btn-sm {
    height: 28px;
    min-width: 28px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  .oauth-login-btn-disabled {
    opacity: 0.6;
  }
`

export default Wrapper
