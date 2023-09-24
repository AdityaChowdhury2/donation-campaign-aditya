const SearchSection = () => {
	return (
		<div className="flex flex-col items-center py-16 md:py-32">
			<h1 className="capitalize font-bold text-lg  md:text-3xl lg:text-5xl mb-2 md:mb-4 lg:mb-10">
				I grow by helping people in need
			</h1>
			<div className="join px-2">
				<input
					className="input input-bordered w-full join-item focus:outline-0"
					placeholder="Search by Category"
				/>
				<button className="btn join-item rounded-lg bg-red-500 text-white">
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchSection;
