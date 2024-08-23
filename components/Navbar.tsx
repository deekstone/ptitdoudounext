"use client";

import { RootState } from "@app/GlobalRedux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function Navbar() {
    const cartData = useSelector((state: RootState) => state.cart);

    return (
        <header className="w-full bg-primary sticky top-0 shadow z-40">
            <nav className="p-3 max-website-width m-auto flex flex-row items-center gap-1">
                <div className="w-[120px] sm:w-[150px]">
                    <Link href={"/"}>
                        <h1 className="text-2xl sm:text-3xl font-bold   text-white font-LobsterRegular ">
                            Ptit Doudou
                        </h1>
                    </Link>
                </div>
                <div className="flex-1 sm:px-5">
                    <SearchBar />
                </div>
                <div className=" cursor-pointer flex flex-row  ">
                    <Link
                        href={"/cart"}
                        className=" self-center w-full items-center text-right ">
                        <div className="relative self-end justify-end ">
                            <Image
                                src={"/cart.svg"}
                                width={30}
                                height={30}
                                alt="search product"
                            />
                            {cartData?.data &&
                                Object.keys(cartData?.data).length > 0 && (
                                    <span className="flex absolute bottom-[0px] right-[-5px] bg-white text-center justify-center rounded-2xl w-[20px] h-[20px] items-center">
                                        <p className=" font-MontserratLight">
                                            {Object.keys(cartData.data).length}
                                        </p>
                                    </span>
                                )}
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
