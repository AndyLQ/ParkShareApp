import React, { Component } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";

import { DrawerItems } from "react-navigation-drawer";

class CustomDrawerContentComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <SafeAreaView>
            <DrawerItems />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default CustomDrawerContentComponent;
