import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/(auth)/signin"} />;
};

export default index;
