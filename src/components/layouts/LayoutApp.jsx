import HomeSidebar from "../App/AppSidebar";

const LayoutApp = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-[400px]">
        <HomeSidebar />
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LayoutApp;
