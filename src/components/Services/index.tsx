const Services = () => {
	const servicesList = [
		{
			title: "Service",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.",
		},
		{
			title: "Service",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.",
		},
		{
			title: "Service",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.",
		},
	];
	return (
		<div className="w-full flex flex-col items-center gap-8 mt-16 mb-24 md:px-0 px-5">
			<div className="flex flex-col gap-1 text-center">
				<span className="font-semibold text-2xl text-indigo-500">Our Services</span>
				<p className="text-[15px] text-gray-600 max-w-[500px] leading-7">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi
					aspernatur eum quod.
				</p>
			</div>
			<div className="flex md:w-[65%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col">
				{servicesList.map((service, index: number) => {
					return (
						<div
							className="w-full bg-white hover:bg-indigo-50 transition-all duration-300 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3 items-start"
							key={index}
						>
							<span className="text-indigo-500 font-semibold">{service.title}</span>
							<p className="text-[15px] leading-7 text-gray-700">{service.desc}</p>
							<a
								href="#"
								className="text-indigo-500 text-[15px]"
							>
								Learn More
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
