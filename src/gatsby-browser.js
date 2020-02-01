import { checkHash } from "./src/utils/helpers";

export const onRouteUpdate = ({ location }) => {
  checkHash(location);
};
