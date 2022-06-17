import React from "react";
import { Alert } from "react-native";
import { LoginView } from "ad-b2c-react-native";
import * as SecureStore from "expo-secure-store";

export default class Login extends React.PureComponent {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onFail = this.onFail.bind(this);
    this.spinner = this.spinner.bind(this);
  }

  onLogin() {
    const { navigation } = this.props;
    navigation.navigate("App");
  }

  onFail(reason) {
    Alert.alert(reason);
  }

  spinner() {
    //this is just a sample implementation, so copy pasting will not work as the components used below are custom
    //and are not in imports above. Please replace it with your implementation.
    return (
      <CView>
        {" "}
        //custom wrapper around View
        <Spinner /> //component wrapping loading status symbol(e.g spinner)
      </CView>
    );
  }

  render() {
    //apart from these props you can use any webview props

    //for *secureStore*, you can pass expo's secure store or create your own wrapper,
    //which implements deleteItemAsync(key), getItemAsync(key), setItemAsync(key, data)

    //*scope is optional*,if provided will overwrite the default scope {appId offline_access}
    //*Suggestion*: with custom scope, id and refresh tokens will not be returned,
    //so consider using format 'openid offline_access {your scope} '

    return (
      <LoginView
        appId="myAppId"
        redirectURI="myRedirectURI"
        tenant="myTenant"
        loginPolicy="B2C_1_SignUpSignIn"
        passwordResetPolicy="B2C_1_PasswordReset"
        profileEditPolicy="B2C_1_ProfileEdit"
        onSuccess={onLogin}
        onFail={onFail}
        secureStore={MySecureStore}
        renderLoading={spinner}
        scope="openid offline_access" //optional, but see the notes above
      />
    );
  }
}
