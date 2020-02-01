import { checkHash } from "./utils";

export const onRouteUpdate = ({ location }, { offset = 0 }) => {
  checkHash(location, offset);
};
