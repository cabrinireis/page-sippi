import React, { InputHTMLAttributes } from "react";
import "./style.scss";

interface custom extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  size?: number;
  cor?: string;
  label?: string;
  tipo?: string;
  buttonTitle?: string;
}

const Input: React.FC<custom> = props => {
  return (
    <div className="forInput">
      <label htmlFor="name" className="label-name">
        <span className="content-name">{props.label}</span>
      </label>
      {props.tipo == "input" ? (
        <input
          {...props}
          style={{
            width: props.size + "%",
            backgroundColor: props.cor,
          }}
          className="input-tag"
        />
      ) : props.tipo == "button" ? (
        <button
          style={{
            width: props.size + "%",
            backgroundColor: props.cor,
          }}
        >
          {props.buttonTitle}
        </button>
      ) : (
        <textarea
          style={{
            width: props.size + "%",
            backgroundColor: props.cor,
          }}
          cols={2}
          className="input-tag"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
