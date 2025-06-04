const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "허용되지 않은 메서드입니다." }),
    };
  }

  const params = new URLSearchParams(event.body);

  const username = params.get("username");
  const password = params.get("password");

  try {
    const response = await fetch("https://dmupay01.dothome.co.kr/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    });

    const result = await response.text(); // PHP가 HTML일 수도 있어서 text()

    return {
      statusCode: 200,
      body: result,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "서버 오류: " + err.message }),
    };
  }
};
