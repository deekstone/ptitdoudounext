"use client";

import { Ddl } from "@api";
import React, { useEffect, useState } from "react";

interface ISingleSelectionOptionsProp {
  data: Ddl[];
  value: number;
  title?: string;
  onSelectOption: (item: Ddl) => void;
}

const SingleSelectionOptions = ({
  data = [],
  value,
  title,
  onSelectOption,
}: ISingleSelectionOptionsProp) => {
  const [selectedOption, setSelectedOption] = useState<number>(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  return (
    <div>
      <h1 className=" text-s font-MontserratLight mt-4 mb-2">{title}</h1>
      <div className="flex flex-wrap gap-3">
        {data.map((item, index) => {
          const borderColor =
            selectedOption === item.id
              ? "border-primary"
              : "border-blue-gray-50";

          return (
            <div
              onClick={() => {
                if(selectedOption === item.id){
                  setSelectedOption(null);
                  onSelectOption({id: null});
                }else{
                  setSelectedOption(item.id);
                  onSelectOption(item);
                }
             
              }}
              key={`${item.name}single-selection`}
              className={`border ${borderColor} border-2 flex-grow text-center p-1 cursor-pointer font-MontserratMedium px-6`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleSelectionOptions;
