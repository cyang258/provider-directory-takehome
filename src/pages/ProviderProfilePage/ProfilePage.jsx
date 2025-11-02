import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "api";

import ProviderInformationCard from "components/ProviderProfileCard/ProviderInformationCard";
import ProviderIntroductionCard from "components/ProviderProfileCard/ProviderIntroductionCard";
import ScaledImage from "components/ImageWrapper/ScaledImage";

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
  return (
    provider && (
      <div>
        <div className="hidden md:block">
          <p>Mental Wellness &gt; Caroline Champagne</p>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4 md:mx-6">
          <div className="relative flex items-center md:items-start justify-center w-full md:w-1/2 overflow-hidden rounded-md">
            <ScaledImage
              src="/photo-example-1.png"
              alt="Profile"
              scaleSize={1.5}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between space-y-1 max-w-[495px]">
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
