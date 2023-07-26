import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RoadTaxes = () => {
  // State for form inputs
  const [plateNumber, setPlateNumber] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [vehicleLicense, setVehicleLicense] = useState("");
  const [vehicleRegistration, setVehicleRegistration] = useState("");
  const [dealersLicense, setDealersLicense] = useState("");
  const [HackneyPermit, setHackneyPermit] = useState("");
  const [stageConductorsBadges, setStageConductorsBadges] = useState("");
  const [changeOfOwnership, setChangeOfOwnership] = useState("");
  const [learnersPermit, setLearnersPermit] = useState("");
  const [emblemsStickers, setEmblemsStickers] = useState("");
  const [vioCollection, setVioCollection] = useState("");

  // State for reports
  const [totalCollection, setTotalCollection] = useState({});
  const [licensingCategories, setLicensingCategories] = useState([]);
  const [actualCollectionComparison, setActualCollectionComparison] = useState(
    {}
  );
  const [registeredVehicles, setRegisteredVehicles] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform database operations or API calls here
    // You can use the form inputs to update the database

    // Update reports based on database data

    // Example: Update total collection per category
    const totalCollectionPerCategory = {
      plateNumbers: plateNumber,
      drivingLicense: drivingLicense,
      vehicleLicense: vehicleLicense,
      vehicleRegistration: vehicleRegistration,
      dealersLicense: dealersLicense,
      HackneyPermit: HackneyPermit,
      stageConductorsBadges: stageConductorsBadges,
      changeOfOwnership: changeOfOwnership,
      learnersPermit: learnersPermit,
      emblemsStickers: emblemsStickers,
      vioCollection: vioCollection,
    };
    setTotalCollection(totalCollectionPerCategory);

    // Example: Update licensing categories
    const categories = [
      "Plate Numbers",
      "Driving License",
      "Vehicle License",
      "Vehicle Registration",
      "Dealers License",
      "Hackney Permit",
      "Stages/Conductors Badges",
      "Change of Ownership",
      "Learners Permit",
      "Emblems/Stickers",
      "VIO Collection",
    ];
    setLicensingCategories(categories);

    // Example: Update actual collection comparison
    const actualCollection = {
      plateNumbers: plateNumber,
      drivingLicense: drivingLicense,
      vehicleLicense: vehicleLicense,
      vehicleRegistration: vehicleRegistration,
      dealersLicense: dealersLicense,
      HackneyPermit: HackneyPermit,
      stageConductorsBadges: stageConductorsBadges,
      changeOfOwnership: changeOfOwnership,
      learnersPermit: learnersPermit,
      emblemsStickers: emblemsStickers,
      vioCollection: vioCollection,
    };
    const targetCollection = {
      plateNumbers: 1000, // Sample target collection for plate numbers
      drivingLicense: 500, // Sample target collection for driving license
      vehicleLicense: 800, // Sample target collection for vehicle license
      vehicleRegistration: 1200, // Sample target collection for vehicle registration
      dealersLicense: 300, // Sample target collection for dealers license
      HackneyPermit: 200, // Sample target collection for Hackney permit
      stageConductorsBadges: 150, // Sample target collection for stage conductors badges
      changeOfOwnership: 400, // Sample target collection for change of ownership
      learnersPermit: 250, // Sample target collection for learners permit
      emblemsStickers: 180, // Sample target collection for emblems/stickers
      vioCollection: 900, // Sample target collection for VIO collection
    };
    const actualVsTargetCollection = {
      actual: actualCollection,
      target: targetCollection,
    };
    setActualCollectionComparison(actualVsTargetCollection);

    // Example: Update listing of registered vehicles
    const vehicles = [
      { plateNumber: "ABC123", owner: "John Doe", model: "Toyota Camry" },
      { plateNumber: "DEF456", owner: "Jane Smith", model: "Honda Civic" },
      { plateNumber: "GHI789", owner: "David Johnson", model: "Ford Focus" },
      // ...
    ];
    setRegisteredVehicles(vehicles);
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="container min-w-full">
        <h2 className="text-2xl md:text-3xl text-[#2f373b] dark:text-slate-100 font-bold lg:ml-[20rem] p-4 md:p-7">Enter Data</h2>
        <form onSubmit={handleSubmit} className="mb-8 p-4 md:p-7 grid md:grid-cols-2 gap-5 lg:ml-[20rem] ">          
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="plateNumberInput" className="text-[#2f373b] dark:text-slate-100">Plate Number:</label>
              <input
                id="plateNumberInput"
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              />
            </div>
          

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="drivingLicense" className="text-[#2f373b] dark:text-slate-100">Driving License:</label>
            <input
              type="text"
              id="drivingLicense"
              value={drivingLicense}
              onChange={(e) => setDrivingLicense(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="vehicleLicense" className="text-[#2f373b] dark:text-slate-100">Vehicle License:</label>
            <input
              type="text"
              id="vehicleLicense"
              value={vehicleLicense}
              onChange={(e) => setVehicleLicense(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="vehicleRegistration" className="text-[#2f373b] dark:text-slate-100">Vehicle Registration:</label>
            <input
              type="text"
              id="vehicleRegistration"
              value={vehicleRegistration}
              onChange={(e) => setVehicleRegistration(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="dealersLicense" className="text-[#2f373b] dark:text-slate-100">Dealers License:</label>
            <input
              type="text"
              id="dealersLicense"
              value={dealersLicense}
              onChange={(e) => setDealersLicense(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="HackneyPermit" className="text-[#2f373b] dark:text-slate-100">Hackney Permit:</label>
            <input
              type="text"
              id="HackneyPermit"
              value={HackneyPermit}
              onChange={(e) => setHackneyPermit(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="stageConductorsBadges" className="text-[#2f373b] dark:text-slate-100">
              Stages/Conductors Badges:
            </label>
            <input
              type="text"
              id="stageConductorsBadges"
              value={stageConductorsBadges}
              onChange={(e) => setStageConductorsBadges(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="changeOfOwnership" className="text-[#2f373b] dark:text-slate-100">Change of Ownership:</label>
            <input
              type="text"
              id="changeOfOwnership"
              value={changeOfOwnership}
              onChange={(e) => setChangeOfOwnership(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="learnersPermit" className="text-[#2f373b] dark:text-slate-100">Learners Permit:</label>
            <input
              type="text"
              id="learnersPermit"
              value={learnersPermit}
              onChange={(e) => setLearnersPermit(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="emblemsStickers" className="text-[#2f373b] dark:text-slate-100">Emblems/Stickers:</label>
            <input
              type="text"
              id="emblemsStickers"
              value={emblemsStickers}
              onChange={(e) => setEmblemsStickers(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="vioCollection" className="text-[#2f373b] dark:text-slate-100">VIO Collection:</label>
            <input
              type="text"
              id="vioCollection"
              value={vioCollection}
              onChange={(e) => setVioCollection(e.target.value)}
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxpayerName"
            >
              Name of Tax Payer (Name of Organization if corporate entity)
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxpayerName"
            />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-[#2f373b] dark:text-slate-100" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxIdentificationNumber"
            >
              Tax Identification Number (TIN)
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxIdentificationNumber"
            />
        </div>

        <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="number"
              name="amount"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="taxPeriod"
            >
              Tax Period
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="text"
              name="taxPeriod"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-[#2f373b] dark:text-slate-100"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="h-10 outline-none bg-transparent rounded-md border-2 border-[#2f373b91] dark:border-slate-400 p-2 text-gray-900 dark:text-slate-100"
              type="date"
              name="date"
            />
          </div>
        </form>
        <div className="lg:ml-[22rem] p-4 lg:p-7 mb-10">
          <button
              type="submit"
              className="p-3 w-full transition-all duration-200 bg-[#1C4E80] hover:bg-slate-500 cursor-pointer hover:bg-[#e6e9ec6b] rounded-md text-slate-100 text-xl font-semibold "
            >
              Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default RoadTaxes;
