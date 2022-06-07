import React from "react";
import { Alert } from "react-native";
import { LoginView } from "ad-b2c-react-native";
import * as SecureStore from "expo-secure-store";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { APP_CLIENT_ID, APP_REDIRECT_URI } from "@env";

const Spinner = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={"green"} />
    </View>
  );
};

const azureB2cCredentials = {
  appClientId: APP_CLIENT_ID,
  appRedirectUri: APP_REDIRECT_URI,
};

const SignInScreen = ({ navigation }) => {
  const onLogin = () => {
    console.log("LOGIN SUCCESS HIT");
    navigation.navigate("App");
  };

  const onFail = (reason) => {
    Alert.alert(reason);
  };

  console.log("CLIENT ID", azureB2cCredentials.appClientId);

  return (
    <LoginView
      appId={azureB2cCredentials.appClientId}
      redirectURI={azureB2cCredentials.appRedirectUri}
      tenant="sharpsmountain"
      loginPolicy="B2C_1_SharpsUserFlow"
      passwordResetPolicy="B2C_1_password_reset"
      profileEditPolicy="B2C_1_edit_profile"
      onSuccess={onLogin}
      onFail={onFail}
      secureStore={SecureStore}
      renderLoading={Spinner}
      scope="openid offline_access" //optional, but see the notes above
    />
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default SignInScreen;
