import React from "react";

const DirectoryProfileCard = ({ provider }) => {
  return (
    <div className="w-full min-w-[375px] max-w-[598px] h-[167px] bg-white shadow-sm px-4 pt-[10px] py-[14px] flex flex-col space-y-[10px] justify-between rounded-md">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-14 h-14 rounded-full border border-neutral-3 bg-neutral-0 flex items-center justify-center flex-shrink-0">
          <img
            src={provider.avatarUrl || "/person-placeholder.svg"}
            alt={provider.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[6px] min-w-0">
          <div className="label-5 text-neutral-9 truncate">
            {provider.name}
            {provider.title && provider.title !== ""
              ? `, ${provider.title}`
              : null}
          </div>
          <div className="input-text-1 text-neutral-7">
            {provider.specialization}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-[12px]">
        <p className="body-3 text-neutral-7 line-clamp-2">{provider.bio}</p>
        <div className="mt-2 inline-block bg-secondary-2 text-neutral-8 px-3 py-1.5 link-1 rounded-full w-max">
          Available {provider.availabilty}
        </div>
      </div>
    </div>
  );
};

export default DirectoryProfileCard;
