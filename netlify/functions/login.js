const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "허용되지 않은 메서드입니다." }),
    };
  }

  try {
    const params = new URLSearchParams(event.body);
    const username = params.get("username");
    const password = params.get("password");

    const response = await fetch("http://dmupay01.dothome.co.kr/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params.toString(),
    });

    const raw = await response.text();
    console.log("PHP 응답 원문:", raw); // 🔍 Netlify Functions 로그에서 확인

    let result;
    try {
      result = JSON.parse(raw);
    } catch (e) {
      console.error("JSON 파싱 실패:", raw);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "PHP 응답이 JSON 형식이 아닙니다.",
          rawResponse: raw, // 프론트에서도 응답 내용을 확인 가능
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("Netlify 함수 오류:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "서버 오류: " + err.message }),
    };
  }
};
