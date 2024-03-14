import React, { useEffect, useState } from "react";
import { useContexter } from "@/app/dashboard/contexter";
import axios from "axios";

const Table = ({ path }) => {
  const { expense, setExpense } = useContexter();
  const [isLoader, setIsLoader] = useState(false);
  const fetchExpense = async () => {
    setIsLoader(true);
    try {
      const response = await axios.get(`${process.env.DOMAIN}/${path}`);
      setExpense(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoader(false);
    }
  };
  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <div>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-[12px] sm:text-sm md:text-lg hidden md:table">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {expense[0]?.to ? "To" : "From"}
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
            </tr>
          </thead>

          {isLoader ? (
            <tr>
              <td colSpan={5} className="w-full">
                <div className="w-full flex justify-center py-10">
                  <div className="loader"></div>
                </div>
              </td>
            </tr>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200 text-black">
              {/* Example table rows */}

              {expense.map((data) => {
                return (
                  <tr>
                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                      {data.amount}
                    </td>
                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                      {data.type}
                    </td>
                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                      {data.to || data.from}
                    </td>
                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                      {data.date.split("T")[0]}
                    </td>
                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                      {data.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      <div>
        {expense.map((data) => {
          return (
            <div className="text-black bg-white my-2 text-sm p-3 rounded-lg">
              <div className="flex justify-end mr-2">
                <label>{data.date.split("T")[0]}</label>
              </div>
              <div>
                <label>Amount : </label>
                <label>{data.amount}</label>
              </div>
              <div>
                <label>Type : </label>
                <label className="capitalize">{data.type}</label>
              </div>
              <div>
                <label>{expense[0]?.to?"To":"From"} : </label>
                <label className="capitalize">{data.to || data.from}</label>
              </div>
              <div>
                <label>Description : </label>
                <label className="capitalize">{data.description}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
