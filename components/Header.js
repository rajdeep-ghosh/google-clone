function Header() {
  return (
    <div className="flex justify-between p-5">
      <div className="flex space-x-6">
        <p className="cursor-pointer hover:underline hover:text-gray-900">About</p>
        <p className="cursor-pointer hover:underline hover:text-gray-900">Store</p>
      </div>
      <div className="flex space-x-6">
        <p className="cursor-pointer hover:underline hover:text-gray-900">Gmail</p>
        <p className="cursor-pointer hover:underline hover:text-gray-900">Images</p>
      </div>
    </div>
  );
}

export default Header;
