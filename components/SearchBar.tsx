"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@material-tailwind/react";

function SearchBar() {
    const router = useRouter();

    const [val, setVal] = useState<string>("");

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                const query = val?.target?.value;
                if (!query) {
                    router.push(`/search`);
                    return;
                }
                router.push(`/search?query=${query}`);
            }}
            action="#">
            <Input
                className="bg-white"
                onChange={value => {
                    setVal(value);
                }}
                placeholder="Search"
            />
        </form>
    );
}

export default SearchBar;
