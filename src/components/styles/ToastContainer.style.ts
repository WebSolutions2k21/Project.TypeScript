import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast= styled(ToastContainer) `
.Toastify__toast-container {
}
.Toastify__toast-container--top-center {
  top: 5em !important;
  left: 10%;
  transform: translateX(-50%);
}
.Toastify__toast {
  cursor: inherit;
  background: ${({ theme }) => theme.colors.text || "#174C6F"};
  color: #FFFFF;
  padding: 0;
  margin-bottom: 0.75em;
  min-height: 10px;
}
.Toastify__toast-body {
  padding: 10px;
  margin: 10px;
}
`