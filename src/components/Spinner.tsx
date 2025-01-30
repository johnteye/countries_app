import React from "react";
import { Spinner } from "flowbite-react";

export default function SpinnerComponent() {
  return (
    <div className="flex justify-center items-center">
      <Spinner aria-label="Loading spinner" className="size-40 text-white animate-spin fill-blue-700 " />
    </div>
  );
}
