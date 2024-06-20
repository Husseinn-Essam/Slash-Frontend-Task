import React, { useEffect } from "react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 mt-5 mr-4 p-4 bg-green-700 text-white rounded-md shadow-md
                   animate-notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
