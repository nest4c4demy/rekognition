import axios from "axios";

export const getData = async () => {
  const res = await axios({
    method: "GET",
    url: "https://a29g7ac4ya.execute-api.us-west-2.amazonaws.com/getAttendences",
    data: {
      token:
        "eyJraWQiOiJDTzJiaU5Xd2c4OUQzSGVHVjR5Yk5QNDZwN2VYUFhDQnlUcktzQ1BiVEtRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmMTJjZjY4MC0xYTNiLTQ4M2EtYTYzZC1mMjc2YWVjNDBmMGMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfbklZTDlGbHUxIiwiY29nbml0bzp1c2VybmFtZSI6ImYxMmNmNjgwLTFhM2ItNDgzYS1hNjNkLWYyNzZhZWM0MGYwYyIsIm9yaWdpbl9qdGkiOiIyMDczMzk1Yy1lZTUwLTRiMmMtOGRiOC0zNGE0MDYyNmZiOTAiLCJhdWQiOiI1dm1vZzBobWdjaGRydWM0MTlybXYxNWRkMSIsImV2ZW50X2lkIjoiMzQ0NWJjMGYtN2MwNy00MzcyLTg3MWUtOWQ4Zjk0NmM3ZDBjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MzgxOTQwNDMsImV4cCI6MTYzODE5NzY0MywiaWF0IjoxNjM4MTk0MDQzLCJqdGkiOiJiODY1NWQ1MS0wMGRkLTQzNmEtOTM5ZS0wY2I2N2Q5NDA2NzMiLCJlbWFpbCI6Im4uem9sYm9veXVyb0BnbWFpbC5jb20ifQ.OkJNQS8lWiPiNGVbNQ8u7lu43eEjy2iojwoZRvtjAccjBDrOsPqlKg6lLP7dglk_GzZDrZbIhhHTqHeW8MND3lwoIW-qwZ3fH5pp1oOjb1reIpolyX3mScF-0fZxT4q91ft9x-7OodqXZpdyOn8P-OKrUB2NhUZVAzU19AQq-KARDRZRB61AAEp2UovLm3MskU6wosNcm9tD4IklOKEHiNwevDg7JGiXFAsaGIbjCDatjyYjqv_njThYsu6457EOHNe8LTVaI5nq6XphyxnAOGaaNW_4Ljev99jaRhceYzeeWv-Gckp-2F9YhytAMfyTbZuNz3ukEf525NZpjF2Z5A",
    },
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    },
  });
  return res;
};
