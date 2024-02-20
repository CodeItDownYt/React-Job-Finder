import { useEffect, useState } from "react";
import { SearchOutline } from "react-ionicons";

interface SearchbarProps {
	onSearch: (query: string) => void;
}

const Searchbar = ({ onSearch }: SearchbarProps) => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	useEffect(() => {
		onSearch(searchQuery);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	return (
		<div className="w-full">
			<div className="w-full flex items-center gap-5">
				<div className="w-full flex items-center gap-3 bg-white rounded-lg px-4 shadow-sm border border-gray-200">
					<SearchOutline color="#6366f1" />
					<input
						type="text"
						placeholder="Search for Job Title"
						className="w-full h-14 bg-white rounded-lg outline-none text-gray-700"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
