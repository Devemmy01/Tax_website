import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Users = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <h1 class="lg:ml-[21rem] px-12 text-3xl font-bold text-gray-800 capitalize dark:text-white">
          Create New User
      </h1>
      <section class="lg:ml-[21rem] max-w-4xl p-6 mx-auto rounded-md shadow-md transparent mt-20 mb-10">
        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-800 text-xl dark:text-gray-200" for="fullname">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-800 text-xl dark:text-gray-200"
                for="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-800 dark:text-gray-200 text-xl" for="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="passwordConfirmation"
              >
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="block font-medium text-gray-800 dark:text-white text-xl">
                Upload Passport
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600 text-xl">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1 text-gray-800 dark:text-white">
                      or drag and drop
                    </p>
                  </div>
                  <p class="text-xs text-gray-800 dark:text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label class="block font-medium text-gray-800 dark:text-white text-xl">
                Upload Government Approved Means of ID
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-gray-600 text-xl">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1 text-gray-800 dark:text-white">
                      or drag and drop
                    </p>
                  </div>
                  <p class="text-xs text-gray-800 dark:text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="passwordConfirmation"
              >
                Select Type of ID
              </label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Select</option>
                <option>International Passport</option>
                <option>National ID Card</option>
                <option>Voters Card</option>
              </select>
            </div>

            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="emailAddress"
              >
                Input ID Number
              </label>
              <input
                id="IDNumber"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-800 dark:text-gray-200 text-xl" for="sex">
                Sex
              </label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="passwordConfirmation"
              >
                Date of Birth
              </label>
              <input
                id="date"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="emailAddress"
              >
                Street Address
              </label>
              <input
                id="StreetAddress"
                type=""
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="city"
              >
                City
              </label>
              <input
                id="City"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="State/Region"
              >
                State / Region
              </label>
              <input
                id="State/Region"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="country"
              >
                Country
              </label>
              <input
                id="Country"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="organization"
              >
                Organization
              </label>
              <input
                id="Organization"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-800 dark:text-gray-200 text-xl"
                for="designation"
              >
                Designation
              </label>
              <input
                id="Designation"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex mt-6">
            <button type="submit" class="px-6 py-2 h-12 text-xl leading-5 w-full text-white transition-all duration-200 transform bg-[#1C4E80] rounded-md hover:bg-[#052444] focus:outline-none focus:bg-gray-600">
              Create User
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Users;
