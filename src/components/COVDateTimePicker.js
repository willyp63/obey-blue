import React, { useState } from "react";
import DatePicker from "react-datepicker";

const DATE_OPTIONS = [
  { label: "12:00 am", value: 0 },
  { label: "12:15 am", value: 1 },
  { label: "12:30 am", value: 2 },
  { label: "12:45 am", value: 3 },
  { label: "1:00 am", value: 4 },
  { label: "1:15 am", value: 5 },
  { label: "1:30 am", value: 6 },
  { label: "1:45 am", value: 7 },
  { label: "2:00 am", value: 8 },
  { label: "2:15 am", value: 9 },
  { label: "2:30 am", value: 10 },
  { label: "2:45 am", value: 11 },
  { label: "3:00 am", value: 12 },
  { label: "3:15 am", value: 13 },
  { label: "3:30 am", value: 14 },
  { label: "3:45 am", value: 15 },
  { label: "4:00 am", value: 16 },
  { label: "4:15 am", value: 17 },
  { label: "4:30 am", value: 18 },
  { label: "4:45 am", value: 19 },
  { label: "5:00 am", value: 20 },
  { label: "5:15 am", value: 21 },
  { label: "5:30 am", value: 22 },
  { label: "5:45 am", value: 23 },
  { label: "6:00 am", value: 24 },
  { label: "6:15 am", value: 25 },
  { label: "6:30 am", value: 26 },
  { label: "6:45 am", value: 27 },
  { label: "7:00 am", value: 28 },
  { label: "7:15 am", value: 29 },
  { label: "7:30 am", value: 30 },
  { label: "7:45 am", value: 31 },
  { label: "8:00 am", value: 32 },
  { label: "8:15 am", value: 33 },
  { label: "8:30 am", value: 34 },
  { label: "8:45 am", value: 35 },
  { label: "9:00 am", value: 36 },
  { label: "9:15 am", value: 37 },
  { label: "9:30 am", value: 38 },
  { label: "9:45 am", value: 39 },
  { label: "10:00 am", value: 40 },
  { label: "10:15 am", value: 41 },
  { label: "10:30 am", value: 42 },
  { label: "10:45 am", value: 43 },
  { label: "11:00 am", value: 44 },
  { label: "11:15 am", value: 45 },
  { label: "11:30 am", value: 46 },
  { label: "11:45 am", value: 47 },
  { label: "12:00 pm", value: 48 },
  { label: "12:15 pm", value: 49 },
  { label: "12:30 pm", value: 50 },
  { label: "12:45 pm", value: 51 },
  { label: "1:00 pm", value: 52 },
  { label: "1:15 pm", value: 53 },
  { label: "1:30 pm", value: 54 },
  { label: "1:45 pm", value: 55 },
  { label: "2:00 pm", value: 56 },
  { label: "2:15 pm", value: 57 },
  { label: "2:30 pm", value: 58 },
  { label: "2:45 pm", value: 59 },
  { label: "3:00 pm", value: 60 },
  { label: "3:15 pm", value: 61 },
  { label: "3:30 pm", value: 62 },
  { label: "3:45 pm", value: 63 },
  { label: "4:00 pm", value: 64 },
  { label: "4:15 pm", value: 65 },
  { label: "4:30 pm", value: 66 },
  { label: "4:45 pm", value: 67 },
  { label: "5:00 pm", value: 68 },
  { label: "5:15 pm", value: 69 },
  { label: "5:30 pm", value: 70 },
  { label: "5:45 pm", value: 71 },
  { label: "6:00 pm", value: 72 },
  { label: "6:15 pm", value: 73 },
  { label: "6:30 pm", value: 74 },
  { label: "6:45 pm", value: 75 },
  { label: "7:00 pm", value: 76 },
  { label: "7:15 pm", value: 77 },
  { label: "7:30 pm", value: 78 },
  { label: "7:45 pm", value: 79 },
  { label: "8:00 pm", value: 80 },
  { label: "8:15 pm", value: 81 },
  { label: "8:30 pm", value: 82 },
  { label: "8:45 pm", value: 83 },
  { label: "9:00 pm", value: 84 },
  { label: "9:15 pm", value: 85 },
  { label: "9:30 pm", value: 86 },
  { label: "9:45 pm", value: 87 },
  { label: "10:00 pm", value: 88 },
  { label: "10:15 pm", value: 89 },
  { label: "10:30 pm", value: 90 },
  { label: "10:45 pm", value: 91 },
  { label: "11:00 pm", value: 92 },
  { label: "11:15 pm", value: 93 },
  { label: "11:30 pm", value: 94 },
  { label: "11:45 pm", value: 95 },
];

const COVDateTimePicker = ({ label, onDateTimeChange }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(0);

  const onDateChange = (newDate) => {
    newDate.setHours(Math.floor(time / 4));
    newDate.setMinutes((time % 4) * 15);
    onDateTimeChange(newDate);
    setDate(newDate);
  };

  const onTimeChange = ({ target: { value: newTime } }) => {
    const newDate = new Date(date);
    newDate.setHours(Math.floor(newTime / 4));
    newDate.setMinutes((newTime % 4) * 15);
    onDateTimeChange(newDate);
    setTime(newTime);
  };

  return (
    <>
      <label className="mr-4">{label}</label>
      <DatePicker selected={date} onChange={onDateChange} />
      <select onChange={onTimeChange} className="cov-select ml-4">
        {DATE_OPTIONS.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </>
  );
};

export default COVDateTimePicker;
