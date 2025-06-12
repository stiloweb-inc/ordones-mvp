"use client";

import * as React from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { useState } from "react";

export const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);

  return (
    <div className="w-full space-y-5">
      <DualRangeSlider
        label={(value) => <span className="text-xs">{value}</span>}
        value={values}
        onValueChange={setValues}
        min={0}
        max={1000}
        step={1}
      />
    </div>
  );
};
