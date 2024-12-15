import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { motion } from 'framer-motion';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1.05, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: -20 }}
          transition={{ type: 'spring', stiffness: 500, duration: 0.5 }}
          className="fixed w-auto -translate-x-1/2 top-5 left-1/2"
        >
          <Toast
            {...props}
            className="flex items-center p-3 space-x-2 bg-white rounded-lg shadow-lg"
          >
            {title && (
              <ToastTitle className="text-sm font-bold text-gray-900">
                {title}
              </ToastTitle>
            )}
            {description && (
              <ToastDescription className="mt-1 text-xs text-gray-700">
                {description}
              </ToastDescription>
            )}
            {action}
            <ToastClose />
          </Toast>
        </motion.div>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
