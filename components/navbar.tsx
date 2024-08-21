import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ToggleTheme } from "./toggle-theme";
import Image from "next/image";

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <Image
                                    className="block lg:hidden h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                    width={10}
                                    height={10}
                                />
                                <Image
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                    alt="Workflow"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="px-3 py-2 rounded-md text-sm font-medium">
                                        Dashboard
                                    </a>
                                    <SignedOut>
                                        <SignInButton />
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                    <ToggleTheme/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
