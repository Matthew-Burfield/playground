type Props = {
  labelText: string;
};

export default function Input(props: Props) {
  return (
    <div className="align-items relative flex h-11 justify-start">
      <label className="h-full w-full px-2.5">
        <input
          className="peer absolute inset-0 rounded-sm border border-solid
          border-steel-40 bg-transparent px-2.5 pt-2 leading-4
          outline-none focus:border-mountain-100"
          placeholder=" "
        />
        <span
          className="pointer-events-none flex h-full origin-top-left 
          -translate-y-1 scale-[.65] items-center text-steel-100
          duration-200 peer-focus:text-mountain-100
          "
        >
          {props.labelText}
        </span>
      </label>
    </div>
  );
}
