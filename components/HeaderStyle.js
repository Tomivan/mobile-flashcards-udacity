import { standout } from "./../styles/colors";

const HeaderStyle = title => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: standout
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "normal"
    }
  };
};

export default HeaderStyle;