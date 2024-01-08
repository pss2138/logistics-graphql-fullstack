import { useEffect } from "react";
import { toast } from "react-toastify";

export const toastInfo = (text) => {
  toast.info(text, { autoClose: 3000, icon: false, toastId: text });
};

export const toastWarn = (text) => {
  toast.warn(text, { autoClose: 4000, toastId: text });
};

export const toastSuccess = (text) => {
  toast.success(text, { autoClose: 3000, toastId: text });
};

export const toastError = (text) => {
  toast.error(text, { autoClose: 5000, toastId: text });
};

export const useClickOutside = (modalRef, closeModal) => {
  const clickOutsideListener = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // reference exists && clicking outside of the modalRef
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideListener);

    return () => {
      document.removeEventListener("mousedown", clickOutsideListener);
    };
  }, []);
};
