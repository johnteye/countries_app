
import React from "react";
import { useParams } from "react-router-dom";
import { useGetCountryByIdQuery } from "../redux/allcountriesApi";
import { useEffect, useState } from "react";
import SpinnerComponent from "../components/Spinner"

const Country = () => {
  const params = useParams<{ countryName: string }>();
  const { data, error, isLoading } = useGetCountryByIdQuery({ name: { common: params.countryName || "" } });

  const [countryData, setCountryData] = useState<any>({});
  useEffect(() => {
    if (data) {
      setCountryData(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SpinnerComponent /> 
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">Error loading Country data.</div>
    );
  }

  if (!data) {
    return <div className="flex items-center justify-center h-screen"> No Country data found.</div>;
  }
 

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
    
        <div className="border-2 rounded-3xl h-5/6 w-1/3 p-6 flex flex-col justify-evenly shadow-lg divide-y">
          <h1 className="text-center font-sans font-semibold text-3xl">
            Detail Country View
          </h1>
          <h2 className="font-sans font-medium text-xl">Official Name: {`${countryData?.name?.official}`}</h2>
          <p className="font-sans font-medium text-xl">Capital: {countryData.capital?.[0] || "N/A"}</p>
          <p className="font-sans font-medium text-xl">Region: {countryData?.region} </p>
          <p className="font-sans font-medium text-xl">Subregion: {countryData?.subregion || "N/A"}</p>
          <p className="font-sans font-medium text-xl">Population: {countryData?.population} </p>
          <p className="font-sans font-medium text-xl">Area (sq km): {countryData?.area}</p>
          <p className="font-sans font-medium text-xl"> Languages: {countryData?.languages ? Object.values(countryData.languages).join(", ") : "N/A"} </p>
        </div>
    
    
    </div>
  );
};

export default Country;