function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 pb-3 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`}
    >
      <Icon className="h-5" />
      <p className="hidden sm:inline-block">{title}</p>
    </div>
  );
}

export default HeaderOption;
