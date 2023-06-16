import React from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  day: yup
    .number()
    .typeError("Must be a number")
    .required("Field is required")
    .min(1, "Invalid day")
    .max(31, "Invalid day"),
  month: yup
    .number()
    .typeError("Must be a number")
    .required("Field is required")
    .min(1, "Invalid month")
    .max(12, "Invalid month"),
  year: yup
    .number()
    .typeError("Must be a number")
    .required("Field is required")
    .min(1900, "Invalid year")
    .max(2100, "Invalid year"),
});

const isDateValid = (day, month, year) => {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === parseInt(year, 10) &&
    date.getMonth() === parseInt(month, 10) - 1 &&
    date.getDate() === parseInt(day, 10)
  );
};

function FormComponent({ onFormSubmit }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ day, month, year }) => {
    if (!isDateValid(day, month, year)) {
      setError("day", { message: "Date is invalid" });
      setError("month", { message: " " });
      setError("year", { message: " " });
    } else {
      clearErrors();
      onFormSubmit(day, month, year);
    }
  };

  return (
    <div>
      <form
        id="ageForm"
        className="flex flex-row justify-start gap-5 w-full md:w-3/4 pb-5 md:pb-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          name="day"
          label="DAY"
          placeholder="DD"
          register={register}
          errors={errors}
        />
        <FormField
          name="month"
          label="MONTH"
          placeholder="MM"
          register={register}
          errors={errors}
        />
        <FormField
          name="year"
          label="YEAR"
          placeholder="YYYY"
          register={register}
          errors={errors}
        />
      </form>

      <div className="flex items-center">
        <div className="h-px bg-gray-300 w-full"></div>
        <button
          type="submit"
          form="ageForm"
          className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full bg-violet-600 hover:bg-black shrink-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50%"
            height="50%"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
        <div className="h-px bg-gray-300 w-full md:w-0"></div>
      </div>
    </div>
  );
}

export default FormComponent;
