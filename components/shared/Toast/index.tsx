import { createContext, useContext, useCallback } from "react";
import Toast from "react-native-toast-message";

// Define toast types for better type safety
type ToastType = "success" | "error" | "info" | "warning";

// Enhanced toast parameters
interface ToastParams {
  type: ToastType;
  message: string;
  title?: string;
  duration?: number;
  position?: "top" | "bottom";
  onPress?: () => void;
  props?: Record<string, any>;
}

// Context type definition
interface ToastContextType {
  showToast: (params: ToastParams) => void;
  showSuccess: (message: string, title?: string) => void;
  showError: (message: string, title?: string) => void;
  showInfo: (message: string, title?: string) => void;
  showWarning: (message: string, title?: string) => void;
  hideToast: () => void;
}

// Create context with default values
const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
  showSuccess: () => {},
  showError: () => {},
  showInfo: () => {},
  showWarning: () => {},
  hideToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const showToast = useCallback(
    ({
      type,
      message,
      title,
      duration = 3000,
      position = "top",
      onPress,
      props,
    }: ToastParams) => {
      Toast.show({
        type,
        text1: title,
        text2: message,
        visibilityTime: duration,
        position,
        onPress,
        props,
      });
    },
    []
  );

  const showSuccess = useCallback(
    (message: string, title?: string) => {
      showToast({ type: "success", message, title });
    },
    [showToast]
  );

  const showError = useCallback(
    (message: string, title?: string) => {
      showToast({ type: "error", message, title });
    },
    [showToast]
  );

  const showInfo = useCallback(
    (message: string, title?: string) => {
      showToast({ type: "info", message, title });
    },
    [showToast]
  );

  const showWarning = useCallback(
    (message: string, title?: string) => {
      showToast({ type: "warning", message, title });
    },
    [showToast]
  );

  const hideToast = useCallback(() => {
    Toast.hide();
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        showSuccess,
        showError,
        showInfo,
        showWarning,
        hideToast,
      }}
    >
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
