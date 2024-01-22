import { useEffect } from "react";

function Modal({
  isOpen,
  onClose,
  children,
  padding = "p-8",
  bg = "bg-white",
  type,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, handleKeyPress]);

  return (
    <div
      className={`modal-bg fixed inset-0 z-50 flex cursor-default items-center justify-center transition-all ${
        isOpen ? "visible bg-black/60" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          type === "profile-preview" ? `cc-preview-profile-mx w-full` : ``
        } rounded-2xl ${bg} ${padding} transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
