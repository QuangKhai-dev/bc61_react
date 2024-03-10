import React from "react";

const Ex_Binding = () => {
  let sinhVien = {
    hoTen: "Trần Lâm",
    namSinh: 2000,
  };

  // dom tới thẻ html cần hiển thị
  // sử dụng inner html để đưa lên giao diện

  return <div>{sinhVien.hoTen}</div>;
};

export default Ex_Binding;
