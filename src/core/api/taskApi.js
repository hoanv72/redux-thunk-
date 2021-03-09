import request from "../utils/request";

export const getTaskListApi = () =>
  request({
    url: "/posts",
    method: "get",
  });
