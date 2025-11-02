import React from "react";

export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 z-50 flex items-center justify-center">
      <div className="flex space-x-10">
        <div className="w-3 h-3 bg-thvc-purple-5 rounded-full animate-ping"></div>
        <div className="w-3 h-3 bg-thvc-purple-5 rounded-full animate-ping delay-200"></div>
        <div className="w-3 h-3 bg-thvc-purple-5 rounded-full animate-ping delay-400"></div>
      </div>
    </div>
  );
}
