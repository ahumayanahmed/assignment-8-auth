"use client";

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [value, setValue] = useState(params.get("q") || "");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    router.push(`/allphotos?q=${val}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Input
        placeholder="Search tiles..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;