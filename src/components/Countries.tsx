
import React, {useState} from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { useGetAllCountriesQuery } from "../redux/allcountriesApi";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "../components/Spinner"


export default function Countries() {
  const { data, error, isLoading } = useGetAllCountriesQuery();
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");



  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  
  const sortedData = data
    ? [...data].sort((a, b) =>
        sortOrder === "asc" ? a.population - b.population : b.population - a.population
      )
    : [];


  const handleCountryClick = (countryName: string) => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Countries</h1>
        <input
          type="Search"
          className="w-1/3 h-8 border-2 border-gray-900 rounded-md"
        />
        <div className="flex">
          <button  onClick={handleSort} title="Sort by Population" className="border-2 rounded-lg size-10 border-gray-500 flex items-center justify-center">
            <HiMiniArrowsUpDown className="size-6 " />
          </button>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Population
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Flag
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {error ? (
                <tr>
                  <td colSpan={4}>Oh no, there was an error</td>
                </tr>
              ) : isLoading ? (
                <div className="flex items-center justify-center h-screen w-screen">
                  <SpinnerComponent/>
                </div>
              ) : data ? (

                sortedData.map((country: any) => (
                  <tr
                    key={country.cca3}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleCountryClick(country.name.common)}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {country.name.common}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {country.region}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {country.population}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-6 h-4" />
                    </td>
                  </tr>
                ))
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}