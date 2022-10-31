import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import { useRef } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

import { COLORS, SIZES } from "../../../theme";
import { TouchableOpacity } from "react-native";
import Space from "../../../components/Space";
import Animated from "react-native-reanimated";
const PageForTest2 = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: "1",
      label: "item 1",
      height: 80,
      background: "#123eee",
    },
    {
      key: "2",
      label: "item 2 ",
      height: 80,
      background: "#123",
    },
    {
      key: "3",
      label: "item 3 ",
      height: 80,
      background: "#008123",
    },
    {
      key: "4",
      label: "item 4 ",
      height: 80,
      background: "#112023",
    },
    {
      key: "5",
      label: "item 5 ",
      height: 80,
      background: "#123213",
    },
  ]);

  const renderItem = ({ item, move, drag }) => {
    const { isActive } = useOnCellActiveAnimation;
    return (
      <ScaleDecorator>
        <OpacityDecorator>
          <ShadowDecorator>
            <TouchableOpacity
              onLongPress={drag}
              activeOpacity={1}
              style={{
                height: item.height,
                backgroundColor: item.background,
                elevation: isActive ? 30 : 0,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                console.log("item", item);
              }}
            >
              <Animated.View>
                <Text color={COLORS.white}>{item.label}</Text>
              </Animated.View>
            </TouchableOpacity>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };
  const ref = useRef(null);
  console.log("data", data);
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container1}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />

        <Space space={120} />

        <View style={{ flex: 1 }}>
          <DraggableFlatList
            containerStyle={{ marginHorizontal: 20 }}
            ref={ref}
            data={data}
            keyExtractor={(item, index) => {
              index.toString();
            }}
            onDragEnd={({ data }) => {
              setData(data);
            }}
            renderItem={renderItem}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PageForTest2;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: COLORS.paleGrey,
    flex: 1,
  },
  soustext: {
    fontSize: 12,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    borderBottomEndRadius: 15,
    overflow: "hidden",
    borderBottomStartRadius: 15,
    height: 110,
  },
});
