import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from 'react-i18next';

const MessageItem = ({ item, sender }) => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: item.sender === sender ? "flex-end" : "flex-start",
        padding: 10,
      }}
    >
      <View
        style={{
          backgroundColor: item.sender === sender ? "#dcf8c6" : "#ffffff",
          padding: 10,
          borderRadius: 10,
          maxWidth: "80%",
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Text className="text-gray-500 text-sm">{t(item.sender)}</Text>
        <Text className="text-gray-700 text-base">{t(item.message)}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
