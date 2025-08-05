const ProjectsFilter = ({
  handleFilter,
  category,
}: {
  handleFilter: (e: string) => void;
  category: string[];
}) => {
  return (
    <aside>
      <nav>
        <ul className="flex items-center justify-center lg:justify-end flex-wrap sm:gap-4 gap-2 *:text-[10px] *:lg:text-base">
          {category.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleFilter(`${item}`)}
                className="sm:px-4 p-2 sm:py-2  cursor-pointer hover:text-[var(--highlight)] hover:bg-neutral-800 transition duration-75 shadow-lg rounded-[12px] border-[1px] focus:text-[var(--highlight)] focus:bg-neutral-800"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button
              type="reset"
              onClick={() => handleFilter("")}
              className="px-4 py-2 cursor-pointer text-[var(--highlight)] hover:border-b hover:border-[var(--highlight)] transition-all duration-75 shadow-lg rounded-lg"
            >
              Reset
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ProjectsFilter;
