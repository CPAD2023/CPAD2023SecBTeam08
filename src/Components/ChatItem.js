import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
const userAvatar = require("../../assets/man.png");
import { useTranslation } from 'react-i18next';

const ChatItem = ({ navigation, friend }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", {
          friendName: friend.name,
          friendAvatar: friend.avatar,
          friendEmail: friend.email,
        })
      }
      className="mx-4 mt-1"
    >
      <View className="flex-row items-center bg-white my-2 py-2 rounded-lg">
        {friend.avatar !== undefined ? (
          <Image
            source={{ uri: friend.avatar }}
            className="h-12 w-12 rounded-full  mx-3"
          />
        ) : (
          <Image source={userAvatar} className="h-12 w-12 rounded-full mx-3" />
        )}
        <View>
          <Text className="font-medium tracking-widest text-lg">
            {t(friend.name)}
          </Text>
          <Text className="text-gray-500 text-sm tracking-tight max-h-7">
            {t(friend.lastMessage[0]?.message)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;