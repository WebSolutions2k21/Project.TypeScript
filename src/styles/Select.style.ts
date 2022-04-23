import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  .Select__control {
    border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
    border-style: none none solid none;
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    border-radius: 0;
    width: 245px;
    height: 30px;
    background: none;
    font-size: 14px;
    text-align: right;
    padding-right: 10px;
    margin-top: -13px;
  }

  .Select__control--is-focused {
    outline: none;
    box-shadow: none;
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    margin-bottom: -5px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    margin-right: -22px;
    margin-bottom: -5px;
  }

  .Select__menu {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    font-size: 14px;
  }

  .Select__single-value {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    text-align: left;
    margin-left: -8px;
    margin-bottom: -12px;
  }
`;
