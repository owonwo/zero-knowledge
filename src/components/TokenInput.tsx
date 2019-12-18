// @ts-ignore
import _ from "lodash";
import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";

type TokenPropType = {
  firstValue: number;
  secondValue: number;
  children: any;
  onSend: Function;
};

const TokenInput = (props: TokenPropType) => {
  const [editMode, setEditMode] = useState(false);
  const [digit, setDigit] = useState(props.firstValue);

  return (
    <div className="token flex items-center py-1">
      {props.children}
      <input
        value={digit}
        onChange={(e: any) => setDigit(e.target.value)}
        onFocus={() => setEditMode(!editMode)}
        className="appearance-none text-base w-12 text-right rounded border border-transparent 
                    focus:border-gray-600 hover:border-gray-600"
      />
      <div className="h-5 flex-shrink-0 bg-gray-400 border mx-1"></div>
      {!editMode ? (
        <span className="px-1 text-base">{props.secondValue}</span>
      ) : (
        <span
          onClick={() => {
            setEditMode(!editMode);
            props.onSend();
          }}
        >
          <img src={arrowLeft} className="ml-4" alt="send" style={{width: 15, height: 15}}/>
        </span>
      )}
    </div>
  );
};

type CTProps = {
  color: string,
  label: string,
}

export const CircularText = ({ color, label }: CTProps) => {
  return (
    <span
        className="color4 mr-5 inline-flex justify-center items-center 
          text-xs uppercase border border-1 rounded-full p-1 mr-2"
        style={{ color: color, borderColor: color, width: 40, height: 40, lineHeight: 1.5 }}
      >
        {label}
    </span>
  );
}

export const TokenGroup = (props: any) => {
  return (
    <div className="private-token-cont mt-8">
      <p className="text-sm mb-2">{props.name}</p>
      <div className="token-cont">{props.children}</div>
    </div>
  );
};

export default TokenInput;
