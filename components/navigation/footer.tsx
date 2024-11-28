"use client";

import links from "@/config/links";
import "../../app/globals.css";
import Link from 'next/link';
import { FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
	return (
		<nav className="w-full flex justify-center border-t-2 mt-16 mb-16">
            <div className="w-full max-w-6xl flex flex-col gap-6 items-center text-sm mt-12">
                <div className="flex gap-3 items-center font-semibold">
                    <Link href="\" className="text-2xl font-normal uppercase">
                        Kiselev Alexey
                    </Link>
                </div>
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