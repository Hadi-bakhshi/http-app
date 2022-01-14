import http from "./httpService";

export function getOneComment(commentId) {
  return http.get(`/comments/${commentId}`);
}