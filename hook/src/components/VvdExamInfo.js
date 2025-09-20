import React, { useContext } from "react";
import { themeContext } from "./VvdExampleContext";

export default function VvdExamInfo() {
  // ✅ Truyền đúng context vào useContext
  const theme = useContext(themeContext);

  return (
    <div>
      <h2>nội dung có áp dụng useContext</h2>
      <p className={theme}>
        useContext() là một React hook cho phép component lấy dữ liệu từ Context
        mà không cần truyền props qua nhiều cấp (giúp tránh props drilling).
      </p>
    </div>
  );
}
