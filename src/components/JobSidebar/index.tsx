import { useParams } from "react-router";
import { jobs } from "../../data/jobs";
import { BusinessOutline, CashOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const JobSidebar = () => {
	const params = useParams();
	const id = Number(params.jobId) - 1;
	const job = jobs[id] ? jobs[id] : jobs[0];

	return (
		<div className="md:sticky relative md:top-10 md:w-[500px] w-full">
			<div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">
				<span className="text-indigo-500 font-medium text-lg">{job.title}</span>
				<span className="text-gray-600 font-medium text-[14px]">{job.location}</span>
				<div className="flex items-center gap-2">
					<BusinessOutline
						width={"18px"}
						height={"18px"}
						color="#555"
					/>
					<span className="text-[14px] font-medium text-gray-600">{job.company}</span>
				</div>
				<div className="flex items-center gap-2">
					<LocationOutline
						width={"18px"}
						height={"18px"}
						color="#555"
					/>
					<span className="text-[14px] font-medium text-gray-600">{job.workStatus}</span>
				</div>
				<div className="flex items-center gap-2">
					<NewspaperOutline
						width={"18px"}
						height={"18px"}
						color="#555"
					/>
					<span className="text-[14px] font-medium text-gray-600">{job.contractStatus}</span>
				</div>
				<div className="flex items-center gap-2">
					<CashOutline
						width={"18px"}
						height={"18px"}
						color="#555"
					/>
					<span className="text-[14px] font-medium text-gray-600">{job.salary}</span>
				</div>
				<button className="text-white font-bold text-lg rounded-md mt-5 bg-indigo-500 w-full h-10">
					Apply Now
				</button>
			</div>
		</div>
	);
};

export default JobSidebar;
