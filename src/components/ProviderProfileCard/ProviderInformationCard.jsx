import React from "react";

const ProviderInformationCard = ({ location, education, languages }) => {
  return (
    <div className="w-full max-w-[598px] bg-white shadow-sm px-5 py-[24px] flex flex-col space-y-[10px] rounded-md">
      <div className="flex flex-col justify-between space-y-[16px]">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-md bg-neutral-1 flex items-center justify-center">
            <img
              src="/map-icon.png"
              alt="Location icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col space-y-[6px]">
            <span className="text-neutral-7 input-text-1 capitalize">
              Location
            </span>
            <span className="text-neutral-8 Label-3 captialize">
              Toronto, Ontario
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-md bg-neutral-1 flex items-center justify-center">
            <img
              src="/education-icon.png"
              alt="Location icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col space-y-[6px]">
            <span className="text-neutral-7 input-text-1 capitalize">
              Education
            </span>
            <span className="text-neutral-8 Label-3 captialize">
              {education}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-md bg-neutral-1 flex items-center justify-center">
            <img
              src="/language-icon.png"
              alt="Location icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col space-y-[6px]">
            <span className="text-neutral-7 input-text-1 capitalize">
              Language
            </span>
            <span className="text-neutral-8 Label-3 captialize">
              {languages?.join(", ")}
            </span>
          </div>
        </div>
      </div>
      <button className="w-full py-[18px] bg-thvc-purple-5 button-4 text-neutral-0 rounded-full !mt-[28px] hover:bg-thvc-purple-4 focus:bg-thvc-purple-4 active:bg-thvc-purple-6 transition-colors duration-300">
        Book with us
      </button>
    </div>
  );
};

export default ProviderInformationCard;
