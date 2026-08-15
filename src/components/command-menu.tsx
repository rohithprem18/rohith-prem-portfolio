"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
    LayoutDashboard,
    Search,
    Moon,
    Sun,
    Laptop,
    Code,
    Copy,
    Briefcase,
    BookOpen
} from "lucide-react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="relative group cursor-pointer transition-all duration-300 active:scale-95"
            >
                {/* Outer border wrapper matching View All style */}
                <div className="absolute -inset-[4.5px] border border-black/5 dark:border-white/5 rounded-[9px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />

                <div className="relative flex items-center justify-center w-7 h-7 sm:w-auto sm:h-auto sm:px-3 sm:py-1 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[5px] text-[11px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
                    <Search className="w-3.5 h-3.5" />
                </div>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                {/* Header Section */}
                <div className="flex items-center gap-4 p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Navigation Menu</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Quickly jump to sections or actions</p>
                    </div>
                </div>

                <CommandInput placeholder="Search for actions..." className="border-none focus:ring-0" />

                <CommandList className="p-2">
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Sections">
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#experience")} className="rounded-lg py-3 cursor-pointer">
                            <Briefcase className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Experience</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#projects")} className="rounded-lg py-3 cursor-pointer">
                            <Code className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Projects</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => window.location.hash = "#skills")} className="rounded-lg py-3 cursor-pointer">
                            <BookOpen className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Skills</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="General">
                        <CommandItem onSelect={() => runCommand(() => {
                            navigator.clipboard.writeText(window.location.href)
                        })} className="rounded-lg py-3 cursor-pointer">
                            <Copy className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Copy Link</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator className="my-2" />

                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))} className="rounded-lg py-3 cursor-pointer">
                            <Sun className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Light Mode</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))} className="rounded-lg py-3 cursor-pointer">
                            <Moon className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>Dark Mode</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))} className="rounded-lg py-3 cursor-pointer">
                            <Laptop className="mr-2 h-4 w-4 text-zinc-500" />
                            <span>System</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
