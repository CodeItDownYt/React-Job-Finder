import bg from "../../assets/images/bg.jpg";

const Hero = () => {
	return (
		<div
			className="w-full h-[80vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-coer bg-no-repeat bg-center relative"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex flex-col gap-8 z-50">
				<span className="text-5xl font-semibold text-indigo-100"> Welcome To Job Finder</span>
				<p className="text-gray-200 max-w-[600px] leading-7">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolore, ab
					consequuntur amet dolores itaque deserunt optio dicta odio sequi, ipsum debitis
					tempora quo quam? Et aliquid quibusdam dolor amet?
				</p>
				<button className="text-white rounded-full bg-indigo-500 w-40 p-3">
					Find Jobs Now
				</button>
			</div>
			<div className="w-full h-[calc(80vh-60px)] z-10 bg-indigo-900 opacity-60 absolute top-[60px] left-0"></div>
		</div>
	);
};

export default Hero;
