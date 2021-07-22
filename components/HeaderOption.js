function HeaderOption({ Icon, title, selected }) {
  return (
    <div>
      <Icon className="h-5" />
      <p>{title}</p>
    </div>
  );
}

export default HeaderOption;
