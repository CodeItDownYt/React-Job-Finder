import { useNavigate, useParams } from "react-router";
import { jobs } from "../../data/jobs";
import { BusinessOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const JobDescription = () => {
	const params = useParams();
	const job = jobs[Number(params.jobId)] ? jobs[Number(params.jobId)] : jobs[0];
	const navigate = useNavigate();

	return (
		<div className="w-full flex flex-col gap-8">
			<div className="w-full flex items-start gap-5 bg-white rounded-lg p-9 shadow-sm border border-gray-200 flex-col">
				<span className="text-indigo-500 font-semibold text-xl">Job Description</span>
				<p
					className="text-gray-600 leading-7"
					dangerouslySetInnerHTML={{ __html: job.description || "" }}
				></p>
				<p className="text-indigo-500 text-[15px] font-medium">Job Requirements</p>
				<p
					className="text-gray-600 leading-7"
					dangerouslySetInnerHTML={{ __html: job.rquirements || "" }}
				></p>
				<p className="text-indigo-500 text-[15px] font-medium">About Us</p>
				<p
					className="text-gray-600 leading-7"
					dangerouslySetInnerHTML={{ __html: job.about || "" }}
				></p>
			</div>
			<div className="w-full flex flex-col gap-4 items-center">
				<div className="w-full text-indigo-500 font-semibold text-xl text-center bg-white rounded-lg p-3 mb-4 border border-gray-200">
					Similar Jobs
				</div>
				<div className="w-full flex md:flex-row flex-col items-center justify-between">
					{jobs.slice(0, 3).map((job) => {
						return (
							<div
								key={job.title}
								className="md:w-[430px] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200"
							>
								<div className="flex flex-col items-start gap-3">
									<img
										src={job.logo}
										alt={job.title}
										className="w-[70px]"
									/>
									<span className="font-semibold text-indigo-500 text-[22px] w-full">
										{job.title}
									</span>
									<div className="flex flex-col gap-[6px]">
										<div className="flex items-center gap-2">
											<BusinessOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{job.company}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<LocationOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{job.workStatus}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<NewspaperOutline
												width={"18px"}
												height={"18px"}
												color="#555"
											/>
											<span className="text-[14px] font-medium text-gray-600">
												{job.contractStatus}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-4 self-end">
									<button
										onClick={() => navigate(`/jobs/${job.id}`)}
										className="text-white font-bold text-lg rounded-md bg-indigo-500 w-40 h-10"
									>
										Apply
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default JobDescription;
