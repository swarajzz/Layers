import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 text-neutral-950">
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
                <form className="mx-auto mt-8 flex max-w-lg whitespace-nowrap rounded-full border border-white/15 p-2">
                    <input
                        type="email"
                        className="bg-transparent px-4 md:flex-1"
                        placeholder="Enter your email"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
