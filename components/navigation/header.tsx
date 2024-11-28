"use client";

import links from "@/config/links";
import "../../app/globals.css";
import Link from 'next/link';
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Button } from "../ui/button";
import { IoIosMail } from "react-icons/io";

export default function Header() {
	return (
		<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-6xl flex justify-between items-center text-sm">
                <div className="flex gap-3 items-center font-semibold">
                    <div className="flex bg-white rounded text-black p-2 pl-3 pr-3 text-2xl ">
                        K
                    </div>
                    <Link href="\" className="text-2xl font-normal uppercase">
                        Kiselev Alexey
                    </Link>
                </div>
                {/* <div className="flex gap-16 items-center">
                    <Link
                        href="\" 
                        className="header-link hover:text-transparent hover:bg-link-gradient hover:bg-clip-text relative after:content-[''] after:block after:w-full after:h-[2px] after:mt-1 after:bg-link-gradient after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                        Home
                    </Link>

                    <Link href="\" 
                        className="header-link hover:text-transparent hover:bg-link-gradient hover:bg-clip-text relative after:content-[''] after:block after:w-full after:h-[2px] after:mt-1 after:bg-link-gradient after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                        About
                    </Link>
                    <Link href="\"
                        className="header-link hover:text-transparent hover:bg-link-gradient hover:bg-clip-text relative after:content-[''] after:block after:w-full after:h-[2px] after:mt-1 after:bg-link-gradient after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                        Resume
                    </Link>
                </div> */}
                <div className="flex gap-4 items-center">
                    <Link
                        className="hover:text-purple-600 hover:transition-colors"
                        href={links.github}
                    >
                        <FaGithub size={28}/>
                    </Link>
                    <Link
                        className="hover:text-purple-600 hover:transition-colors"
                        href={links.telegram}
                    >
                        <FaTelegram size={28}/>
                    </Link>
                    {/* <Button className="flex flex-col w-fit rounded-full p-4">
                        <IoIosMail size={32} />
                    </Button> */}
                </div>
            </div>
        </nav>
	);
}