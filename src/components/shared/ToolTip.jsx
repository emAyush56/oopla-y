function ToolTip({ children, toolTip }) {
  return (
    <div className="group relative flex select-none justify-center">
      <div className="tiptext absolute bottom-6 hidden whitespace-nowrap rounded-md bg-gray-800 px-2 py-0.5 text-xs text-white opacity-0 transition group-hover:block group-hover:opacity-100">
        {toolTip}
      </div>
      {children}
    </div>
  );
}

export default ToolTip;
