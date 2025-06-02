import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="overflow-x-clip py-24">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image
                        src={designExample1Image}
                        alt="Design example 1 image"
                    />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="Design example 2 image"
                    />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute -top-4 right-80 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="lg:8xl inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 text-neutral-950">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl">
                    Impactful design created effortlessly{" "}
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
                    Design tools shouldn&apos;t keep you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="mx-auto mt-8 flex w-full max-w-lg rounded-full border border-white/15 p-2">
                    <input
                        type="email"
                        className="bg-transparent px-4 md:flex-1"
                        placeholder="Enter your email"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
