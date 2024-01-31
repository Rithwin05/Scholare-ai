"use client";

import Image from "next/image";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

import {ImageIcon,
     LayoutDashboard,
     MessageSquare,
     Music,
    VideoIcon,
    Code,
    Settings,
    SubscriptIcon
     } from "lucide-react";
import { FreeCounter } from "@/components/free-counter";

const montserrat = Montserrat({
    weight:"600",
    subsets: ["latin"]
})

const routes = [
    {
        label:"Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label:"Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "<text-orange-700",
    },
    {
        label:"Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label:"Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
    },
    {
        label:"Settings",
        icon: Settings,
        href: "/settings",
    },
];

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
};

const Sidebar = ({
    apiLimitCount= 0,
    isPro = false,
}: SidebarProps) => {
    const pathname = usePathname();
    return(
        <div className="space-y-4 py-4 flex flex-col h-full
        bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex 
                items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                       <Image
                        fill
                        alt="Logo"
                        src="data:image/png;base64,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"
                       /> 
                    </div>
                    <h1 className={cn("text-2xl font-bold",
                    montserrat.className)}>
                        Scholare
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                        pathname === route.href ? "text-white bg-white/10" :
                        "text-zinc-400"
                        )} 
                        >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3", route.
                            color)}/>
                            {route.label}
                        </div>
                        </Link>
                    ))}
                     <a
            href="https://www.buymeacoffee.com/bollabathic"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            )}
          >
            <div className="flex items-center flex-1">
              <SubscriptIcon
                className={cn("h-5 w-5 mr-3 text-blue-500")}
              />{" "}
              {/* Adjust color as needed */}
              Subscribe
            </div>
          </a>
                </div>
            </div>
            <FreeCounter
                isPro={isPro}
                apiLimitCount={apiLimitCount}            />
        </div>
    );
}

export default Sidebar;