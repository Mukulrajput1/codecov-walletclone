"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContexter } from "../contexter";

function Profile() {
  const { username, mobile, password } = useContexter();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)] px-5 py-10">
      <div className="bg-white h-full text-gray-900 p-6 w-full overflow-hidden">
        <div>
          <form>
            <div className="text-white flex flex-col justify-center items-center">
              <div className="bg-gray-700 h-32 w-32 flex justify-center items-center text-6xl rounded-full">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </div>
              <div className="text-gray-700 font-bold py-3">
                <div>{username}</div>
              </div>
            </div>
            <div className="font-bold my-5 flex flex-col justify-center items-center w-full space-y-5">
              <div className="flex flex-col">
                <label>Mobile : </label>
                <input
                  type="text"
                  disabled
                  className="bg-gray-100 h-10 text-gray-700 px-3"
                  value={mobile}
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Password : </label>
                <input
                  type="password"
                  disabled
                  className="bg-gray-100 h-10 text-gray-700 px-3"
                  value={password}
                ></input>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center py-10">
            <div className="text-gray-500 ">
              <button className="hover:text-gray-900">Delete Account </button> |{" "} 
              <button className="hover:text-gray-900">Reset Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
