import React from "react";
import useCalculator from "./useCalculator";

const CalculatorView = () => {
  const viewModel = useCalculator();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px]">
        <div className="flex flex-col mb-1 rounded-sm">
          <input
            disabled
            placeholder="0"
            type="text"
            className="bg-black text-right  border-indigo-200 p-2 rounded-sm"
            value={
              viewModel.typedValue
                ? (() => {
                    try {
                      return eval(viewModel.typedValue);
                    } catch {
                      return viewModel.typedValue;
                    }
                  })()
                : ""
            }
          />
          <input
            type="text"
            className="text-right pr-1 bg-black  border-indigo-200 rounded-sm p-2"
            onChange={(e) => viewModel.setTypedValue(e.target.value)}
            value={viewModel.typedValue}
          />
        </div>

        {viewModel.buttons?.map((buttonRow, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-1">
            {buttonRow.map((buttonValue, colIndex) => {
              const isEqual = buttonValue === "=";
              return (
                <button
                  key={colIndex}
                  className={` p-4 ${
                    isEqual
                      ? "col-span-2 border-[0.2px] border-white rounded-md"
                      : "col-span-1"
                  }`}
                  onClick={() =>
                    viewModel.setTypedValue((prev) => `${prev}${buttonValue}`)
                  }
                >
                  {buttonValue}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorView;
