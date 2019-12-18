// @ts-ignore
import _ from "lodash";
import React, { useState } from "react";

type TokenPropType = {
  label: string;
  firstValue: number;
  secondValue: number;
  onSend: Function;
};

const TokenInput = (props: TokenPropType) => {
  const [editMode, setEditMode] = useState(false);
  const [digit, setDigit] = useState(props.firstValue);

  return (
    <div className="token flex items-center py-1">
      <span
        className="color4 mr-5 inline-flex justify-center items-center 
                text-xs uppercase border border-1 rounded-full p-1 mr-2"
        style={{ width: 40, height: 40, lineHeight: 1.5 }}
      >
        {props.label}
      </span>
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
          <img src="/assets/arrow-left.svg" className="ml-4" alt="send" style={{width: 15, height: 15}}/>
        </span>
      )}
    </div>
  );
};

export const TokenGroup = (props: any) => {
  return (
    <div className="private-token-cont mt-8">
      <p className="text-sm mb-2">{props.name}</p>
      <div className="token-cont">{props.children}</div>
    </div>
  );
};

export default TokenInput;
