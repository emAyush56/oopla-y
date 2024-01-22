const LayoutSettings = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen sticky top-0 bg-gray-50">
        <div className="mb-2">sidebar layout settings</div>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LayoutSettings;
