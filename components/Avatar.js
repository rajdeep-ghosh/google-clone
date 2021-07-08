function Avatar() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="bg-red-500 rounded-full cursor-pointer transform transition duration-150 hover:scale-110"
      src="/avatar/panda.png"
      width={33}
      height={33}
      loading="lazy"
      alt="avatar"
    />
  );
}

export default Avatar;
