import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useTheme } from '@/components/theme-provider';


export function Toaster() {
  const { toasts } = useToast();
  const { theme } = useTheme();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div
              className={`absolute inset-0 blur-xl opacity-30 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500'
                  : 'bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'
              }`}
            ></div>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={`absolute top-2 right-2 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-200 hover:text-gray-800'
              } transition`}/>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
