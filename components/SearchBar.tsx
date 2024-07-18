"use client";
import React from "react";
import SearchManufacture from "./SearchManufacture";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10  ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="mg" width={40} height={40} />
  </button>
);

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "")
      return alert("FILL IN THE SEARCH BAR!!!");

    if (manufacturer === "" || model === "")
      return alert("FILL IN BOTH OF THE SEARCH BARs!!!");

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const SearchParams = new URLSearchParams(window.location.search);

    if (model) {
      SearchParams.set("model", model);
    } else {
      SearchParams.delete("model", model);
    }

    if (manufacturer) {
      SearchParams.set("make", manufacturer);
    } else {
      SearchParams.delete("make", manufacturer);
    }

    const newPathname = `${
      window.location.pathname
    }?${SearchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Polo"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
