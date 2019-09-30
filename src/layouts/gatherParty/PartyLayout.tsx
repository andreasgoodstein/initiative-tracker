import React from "react";
import { View } from "react-native";

import Footer from "../../components/display/footer/Footer";
import Header from "../../components/display/header";

import styles from "./styles";

export default () => (
  <View style={styles.container}>
    <Header />

    <Footer />
  </View>
);
