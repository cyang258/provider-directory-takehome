import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchProvider } from "api";

import ProviderInformationCard from "components/ProviderProfileCard/ProviderInformationCard";
import ProviderIntroductionCard from "components/ProviderProfileCard/ProviderIntroductionCard";
import ScaledImage from "components/ImageWrapper/ScaledImage";
import FullPageLoader from "components/Loader/FullPageLoader";

export default function ProfilePage() {
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProvider(id)
      .then((data) => setProvider(data))
      .finally(() => setLoading(false));
  }, [id]);
  return loading ? (
    <FullPageLoader />
  ) : (
    provider && (
      <div className="flex flex-col items-center w-full">
        <div className="hidden md:block w-full max-w-[1000px] px-6 py-[20px]">
          <p className="text-neutral-7 input-text-1 lg:pl-[100px]">
            <Link to="/directory" className="hover:text-primary-5">
              Mental Wellness
            </Link>{" "}
            &gt; <span className="text-neutral-8">{provider.name}</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 md:mx-6">
          <div className="relative flex items-center justify-center sm:items-start md:justify-end w-full md:w-2/5 overflow-hidden rounded-md">
            <ScaledImage
              src={
                provider.avatarUrl && provider.avatarUrl !== ""
                  ? provider.avatarUrl
                  : "/person-placeholder.svg"
              }
              alt="Profile"
              scaleSize={1.5}
            />
          </div>

          <div className="w-full md:w-3/5 flex flex-col justify-between space-y-1 max-w-[495px] md:min-w-[385px]">
            <ProviderIntroductionCard
              name={provider.name}
              title={provider.title}
              specialization={provider.specialization}
              bio={provider.bio}
            />
            <ProviderInformationCard
              location={provider.location}
              education={provider.education}
              languages={provider.languages}
            />
          </div>
        </div>
      </div>
    )
  );
}
