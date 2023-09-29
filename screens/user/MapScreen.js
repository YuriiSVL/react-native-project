import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  const latitude = route.params.item.location.latitude;
  const longitude = route.params.item.location.longitude;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude,
          latitude,
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
        }}
      >
        <Marker coordinate={{ longitude, latitude }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
