import classNames from "classnames";

function FormField({ name, label, placeholder, register, errors }) {
  const error = errors[name];

  return (
    <div className="flex flex-col shrink">
      <label
        className={classNames(
          "text-xxs font-poppinsbold text-slate-500 tracking-widest pb-1",
          { "!text-red-500": error }
        )}
      >
        {label}
      </label>
      <input
        className={classNames(
          "text-xl font-poppinsbold p-3 w-full border rounded border-slate focus:outline-none focus:border-violet-600 cursor-pointer",
          { "border-red-500": error }
        )}
        {...register(name)}
        type="text"
        placeholder={placeholder}
      ></input>
      <div className="pt-1 text-xxs text-red-500 font-poppinsitalic">
        {error && error.message}
      </div>
    </div>
  );
}

export default FormField;
