import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  I18nManager,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Paragraph, Dialog, Portal, Provider } from "react-native-paper";
const languages = [
  { name: "English", key: "en" },
  { name: "Arabic", key: "ar" },
  { name: "Detsch", key: "de" },
];
export default function changeLanguageDialog(props) {
  const { visible, hideDialog } = props;
  const [appLanguage, setAppLanguage] = React.useState("en");
  const { t, i18n } = useTranslation();
  const handleLanguageEditor = (event) => {
    setAppLanguage(event);
  };
  React.useEffect(() => {
    i18n.changeLanguage(appLanguage);
    if (i18n.language == "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [appLanguage]);
  const closeDialoge = () => {
    hideDialog(false);
  };
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={closeDialoge}>
          <Dialog.Title>Select Language</Dialog.Title>
          <Dialog.Content>
            {languages.map((language, index) => {
              return (
                <>
                  <TouchableOpacity
                    key={language.key}
                    onPress={() => {
                      handleLanguageEditor(language.key);
                      closeDialoge();
                    }}
                    style={
                      appLanguage == language.key
                        ? { backgroundColor: "lightgrey" }
                        : null
                    }
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: "15",
                        borderBottomColor: "1px solid grey",
                        padding: 10,
                      }}
                    >
                      {language.name}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
