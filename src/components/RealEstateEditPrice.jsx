import React from "react";
import { IoClose } from "react-icons/io5";
import RealEstateEditPriceJsonData from "../../public/docs/realestateeditpriceinfo.json";

const RealEstateEditPrice = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="relative bg-white rounded-lg p-6 shadow-lg w-[900px] max-h-[85vh] overflow-y-auto">

        {/* Close Button */}
        <IoClose
          size={28}
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-red-500"
        />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Video Edit Price List
        </h2>

        <div className="space-y-10">

          {RealEstateEditPriceJsonData.map((category, index) => (
            <div key={index}>

              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                {category.serviceCategory}
              </h3>

              {/* Horizontal Scroll */}
              <div className="flex gap-6 overflow-x-auto pb-4">

                {category.services.map((service, i) => (
                  <div
                    key={i}
                    className="min-w-[250px] bg-white border rounded-lg shadow-md p-5 flex-shrink-0"
                  >

                    {/* Service Name */}
                    <h4 className="text-lg font-bold mb-2 text-red-600">
                      {service.name}
                    </h4>

                    {/* Video Length */}
                    <p className="text-sm text-gray-500 mb-3">
                      {service.videoLength}
                    </p>

                    {/* Editing Includes */}
                    <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                      {service.editingIncludes.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mt-4 font-semibold text-blue-600">
                      ₹{service.priceRangeINR}
                    </div>

                    {/* Bottom Line */}
                    <div className="h-1 bg-blue-900 mt-4 w-20 rounded"></div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default RealEstateEditPrice;