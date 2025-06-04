const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "허용되지 않은 메서드입니다." }),
    };
  }

  try {
    const body = JSON.parse(event.body); // 문자열을 먼저 파싱해야 함
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
      body: params.toString(), // 바르게 인코딩된 body
    });

    const result = await response.text(); // HTML 또는 JSON 응답 가능

    return {
      statusCode: 200,
      body: result,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("서버 오류:", err); // Netlify 함수 로그에서 확인 가능
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "서버 오류: " + err.message }),
    };
  }
};
