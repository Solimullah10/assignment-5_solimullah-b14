
import heroImg from '../assets/banner-stack.png'
const HeroSection = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start space-y-6">

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    {/* Subtitle Description */}
                    <p className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        {/* Primary Button */}
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium text-sm rounded-xl px-6 py-3 transition duration-200 shadow-sm focus:outline-none">
                            Explore Technologies
                        </button>

                        {/* Secondary Button */}
                        <button className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 font-medium text-sm rounded-xl px-8 py-3 transition duration-200 focus:outline-none">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Right Column: Illustration */}
                <div className="flex justify-center lg:justify-end">
                    <img src={heroImg} alt="" />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;