import React, { useState } from "react";
import * as Styles from "./styles";

const PaymentDropdown = ({
  placeholder,
  selectedOption,
  setSelectedOption,
  optionsArray,
  ...props
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <Styles.Dropdown>
      <Styles.SelectBox
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
        style={props.style}
      >
        {!selectedOption && placeholder
          ? placeholder
          : `**** **** **** ${selectedOption}`}
        <Styles.SelectBoxArrow src="../../icons/arrow_down.svg" />
      </Styles.SelectBox>

      {isDropdownOpen && (
        <Styles.OptionsBox>
          <Styles.Option
            onClick={() => {
              handleClickOption(undefined);
            }}
          >
            + Add new card
          </Styles.Option>
          {optionsArray.map((option, index) => {
            const isSelected = selectedOption === option ? true : false;
            return (
              <Styles.Option
                key={index}
                isSelected={isSelected ? true : undefined}
                onClick={() => {
                  handleClickOption(option);
                }}
              >
                {`**** **** **** ${option}`}
              </Styles.Option>
            );
          })}
        </Styles.OptionsBox>
      )}
    </Styles.Dropdown>
  );
};

export default PaymentDropdown;
