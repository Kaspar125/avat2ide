import {LaptopIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Link} from "@remix-run/react";
import * as React from "react";
import {useHydrated} from "remix-utils/use-hydrated";

import {
    getTheme,
    setTheme as setSystemTheme,
} from "@/components/theme-switcher";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
    const hydrated = useHydrated();
    const [, rerender] = React.useState({});
    const setTheme = React.useCallback((theme: string) => {
        setSystemTheme(theme);
        rerender({});
    }, [rerender]);
    const theme = getTheme();
    const isAuthenticated = false;

    return (
        <>
            <header className="flex items-center justify-between text-white px-4 py-2 md:py-4" style={{
                backgroundImage: "url('/navbar1.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="flex items-center space-x-4 ">
                    <Link className="flex items-center space-x-2" to="/">
                        <img src="logo1.png" alt="Avatäide logo" width="150" height="100" className={"transform transition duration-500 ease-in-out hover:scale-110"}/>
                    </Link>
                </div>
                <div className="flex items-center space-x-8 ">
                    <Link className="space-x-2" to="/tooted">
                        <span className="text-lg font-bold">Tooted</span>
                    </Link>
                    <Link className="space-x-2" to="/firmast">
                        <span className="text-lg font-bold">Firmast</span>
                    </Link>
                    <Link className="space-x-2" to="/hinnapäring">
                        <span className="text-lg font-bold">Hinnapäring</span>
                    </Link>
                    <Link className="space-x-2" to="/kontakt">
                        <span className="text-lg font-bold">Kontakt</span>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="w-10 h-10 rounded-full border"
                                size="icon"
                                variant="ghost"
                                title="Theme selector"
                            >
                                <span className="sr-only">Teema valimine</span>
                                {!hydrated ? null : theme === "dark" ? (
                                    <MoonIcon/>
                                ) : theme === "light" ? (
                                    <SunIcon/>
                                ) : (
                                    <LaptopIcon/>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2">
                            <DropdownMenuLabel>Teema</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem asChild>
                                <button
                                    type="button"
                                    className="w-full"
                                    onClick={() => setTheme("light")}
                                    aria-selected={theme === "light"}
                                >
                                    Hele
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <button
                                    type="button"
                                    className="w-full"
                                    onClick={() => setTheme("dark")}
                                    aria-selected={theme === "dark"}
                                >
                                    Tume
                                </button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    );
}