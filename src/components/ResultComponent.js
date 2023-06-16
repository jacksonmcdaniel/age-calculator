import React from "react";

function ResultComponent({ formData }) {
  const { day, month, year } = formData;

  const calculateAge = () => {
    const birthDate = new Date(parseInt(year), parseInt(month), parseInt(day));
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth();
    const birthYear = birthDate.getFullYear();

    const currentDate = new Date();
    let resDate = currentDate.getDate();
    let resMonth = currentDate.getMonth() + 1;
    let resYear = currentDate.getFullYear();

    const month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > resDate) {
      resDate = resDate + month_list[resMonth - 1];
      resMonth = resMonth - 1;
    }

    if (birthMonth > resMonth) {
      resMonth = resMonth + 12;
      resYear = resYear - 1;
    }

    const ageYears = resYear - birthYear;
    const ageMonths = resMonth - birthMonth;
    const ageDays = resDate - birthDay;

    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const { years, months, days } = calculateAge();

  return (
    <div className="flex flex-col pt-5">
      <div className="text-[54px] md:text-7xl leading-none font-poppinsbolditalic">
        <span className="text-violet-600">
          {!years ? "- - " : Number(years) + " "}
        </span>
        years
      </div>
      <div className="text-[54px] md:text-7xl leading-none font-poppinsbolditalic">
        <span className="text-violet-600">
          {!months ? "- - " : Number(months) + " "}
        </span>
        months
      </div>
      <div className="text-[54px] md:text-7xl leading-none font-poppinsbolditalic">
        <span className="text-violet-600">
          {!days ? "- - " : Number(days) + " "}
        </span>
        days
      </div>
    </div>
  );
}

export default ResultComponent;
