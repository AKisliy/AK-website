"use client";

import "../../app/globals.css";
import Link from 'next/link';

export default function Header() {
	return (
		<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                    <Link href="\" className="text-2xl font-bold">
                        Kiselev A.
                    </Link>
                </div>
                <div className="flex gap-16 items-center">
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
                </div>
            </div>
        </nav>
	);
}