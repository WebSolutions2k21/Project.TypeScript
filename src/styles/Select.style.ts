import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  .Select__control {
    border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
    border-style: none none solid none;
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    border-radius: 0;
    width: 245px;
    background: none;
    font-size: 14px;
    text-align: right;
    padding-right: 10px;
    margin-top: -5px;
  }

  .Select__control:hover {
    border: 1px solid ${({ theme }) => theme.colors.text || "#FFFFFF"};
    border-style: none none solid none;
 
  }

  .Select__control--is-focused {
    outline: none;
    box-shadow: none;
    color: black;
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    margin-bottom: -10px;
    margin-right: -7px;
    z-index: -1;
  }

  .Select__indicator-separator {
    display: none;
    color: black;
  }

  .Select__dropdown-indicator {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    margin-right: -22px;
  }

  .Select__dropdown-indicator:hover {
    cursor: pointer;
    color: black;
  }

  .Select__menu {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    font-size: 14px;
  }

  .Select__single-value {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    text-align: left;
    margin-left: -8px;
    margin-top: 7px;
  }

  .Select__value-container--is-multi {
    
    margin-left: -10px;
  }

  .Select__value-container--has-value {
    margin-top: 8px;
  }

  .Select__multi-value__label {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
  }

  .Select__clear-indicator {
    display: none;
    padding: 0;
  }
`;
