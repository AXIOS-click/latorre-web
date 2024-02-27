"use client";

import Link from "next/link";
import { useState } from "react";

export const DropdownProyect = ({ classNameProp }: { classNameProp: string }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div onMouseEnter={() => setOpenDropdown(!openDropdown)} onMouseLeave={() => setOpenDropdown(!openDropdown)}>
            <button
                data-fc-type="dropdown"
                type="button"
                data-fc-offset={0}
                data-fc-trigger="hover"
                className={`text-2xl hover:text-3xl transition-all ${classNameProp}`}
            >
                Proyectos
            </button>
            <div className={` ${openDropdown ? "block" : "hidden"} z-50 p-2 absolute`}>
                <Link
                    className="flex items-center py-2 px-3 rounded-md hover:bg-latorre-red"
                    href='/proyects/sculture'
                >
                    Esculturas
                </Link>
                <Link
                    className="flex items-center py-2 px-3 rounded-md hover:bg-latorre-red"
                    href='/proyects/paintings'
                >
                    Pinturas
                </Link>
            </div>
        </div>
    );
};
