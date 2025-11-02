import React from "react";

export default function DirectoryPageHeader(props) {
  return (
    <div className="w-full flex justify-center border border-neutral-200 shadow-sm bg-neutral-0">
      <div className="w-full max-w-[600px] pt-6 pb-4 space-y-4 px-5 lg:pt-10 lg:pb-10">
        <div className="flex flex-col gap-2">
          <div className="subheading-2 text-neutral-9">
            Browse our providers
          </div>
          <div className="input-text-3 text-neutral-7">Mental Wellness</div>
        </div>

        <div className="cursor-pointer inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-0 border rounded-[94px] hover:bg-neutral-2 focus:ring-2 focus:ring-[#9ab7fb] active:bg-neutral-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[13px] h-[13px] text-secondary-5"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" fill="white" />
          </svg>

          <span className="text-neutral-8 text-label-3 cursor-pointer">ON</span>
        </div>
      </div>
    </div>
  );
}
