const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "허용되지 않은 메서드입니다." }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const username = body.username;
    const password = body.password;

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const response = await fetch("http://dmupay01.dothome.co.kr/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params.toString(),
    });

    const result = await response.json(); // 🔥 text() → json() 변경

    return {
      statusCode: 200,
      body: JSON.stringify(result), // 🔥 JSON.stringify로 감싸줌
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("서버 오류:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "서버 오류: " + err.message }),
    };
  }
};
