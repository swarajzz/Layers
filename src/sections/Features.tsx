"use client";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import dynamic from "next/dynamic";

const VideoHover = dynamic(() => import("../components/VideoHover"), {
    ssr: false,
});

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="mx-auto mt-6 max-w-2xl text-center text-6xl font-medium">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description=" Work together seamlessly with conflict-free
                                editing"
                        className="group md:col-span-2 lg:col-span-1"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    className="rounded-full"
                                    src={avatar1}
                                    alt="Avatar 1"
                                />
                            </Avatar>
                            <Avatar className="z-30 -ml-6 border-indigo-500">
                                <Image
                                    className="rounded-full"
                                    src={avatar2}
                                    alt="Avatar 2"
                                />
                            </Avatar>
                            <Avatar className="z-20 -ml-6 border-amber-500">
                                <Image
                                    className="rounded-full"
                                    src={avatar3}
                                    alt="Avatar 3"
                                />
                            </Avatar>
                            <Avatar className="gr -ml-6 border-transparent transition group-hover:border-green-500">
                                <div className="relative inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700 opacity-0 transition group-hover:opacity-100">
                                    <Image
                                        src={avatar4}
                                        alt="Avatar 4"
                                        className="absolute size-full rounded-full"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react
                                to user actions
                            "
                        className="group md:col-span-2 lg:col-span-1"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <p className="text-center text-4xl font-extrabold text-white/20 transition group-hover:text-white/10">
                                We&apos;ve achieved{" "}
                                <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent duration-500">
                                    <span>incredible</span>
                                    <VideoHover />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create desings
                                more quickly"
                        className="group transition md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="flex aspect-video items-center justify-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                                shift
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent transition-all delay-150 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                                alt
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent transition-all delay-300 duration-500 group-hover:translate-y-1 group-hover:outline-lime-400">
                                C
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="mdgroup-[]: group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 transition duration-500 hover:scale-105 md:px-5"
                        >
                            <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950 transition duration-500 group-hover:rotate-45">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
