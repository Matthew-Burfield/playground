import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default React.forwardRef<HTMLInputElement, Props>(function Input(
  { labelText, ...props },
  ref
) {
  return (
    <div className="align-items relative flex h-12 justify-start">
      <label className="h-full w-full border border-solid border-transparent px-2.5">
        <input
          ref={ref}
          className="peer absolute inset-0 rounded-sm border border-solid
          border-steel-40 bg-transparent px-2.5 pt-2 leading-4
          outline-none focus:border-mountain-100"
          placeholder=" "
          {...props}
        />
        <span
          className="pointer-events-none flex h-full origin-top-left 
          -translate-y-1 scale-[.65] items-center text-steel-100
          duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
          peer-focus:text-mountain-100 peer-placeholder-shown:peer-focus:-translate-y-1 peer-placeholder-shown:peer-focus:scale-[.65]
          "
        >
          {labelText}
          {props.required ? " *" : ""}
        </span>
      </label>
    </div>
  );
});
