import axios from "axios";
const backend = "http://localhost:4000/api/";
export const tail = {
  group: "group",
  upload: "upload",
  signUp: "signup",
  signIn: "signin",
};
export function getRequest(tail) {
  return new Promise((resolve, reject) => {
    axios.get(backend + tail).then(
      (result) => resolve(result),
      (reason) => {
        reject(reason);
      }
    );
  });
}
export function postRequest(tail, data) {
  return new Promise((resolve, reject) => {
    axios.post(backend + tail, data).then(
      (result) => resolve(result),
      (reason) => {
        reject(reason);
      }
    );
  });
}
export function deleteRequest(tail, data) {
  return new Promise((resolve, reject) => {
    axios.delete(backend + tail).then(
      (result) => resolve(result),
      (reason) => {
        reject(reason);
      }
    );
  });
}
export function putRequest(tail, data) {
  return new Promise((resolve, reject) => {
    axios.put(backend + tail, data).then(
      (result) => resolve(result),
      (reason) => {
        reject(reason);
      }
    );
  });
}
