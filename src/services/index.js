import service from "./service";

export function getLikeCount() {
  return service("/getLikeCount");
}

export function addLikeCount() {
  return service("/addLikeCount");
}
