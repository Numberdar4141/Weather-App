import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);

    // Function to show a notification
    function showToast(message, type) {
        // Add the new notification to the notifications array
        setNotifications(prevNotifications => [...prevNotifications, { id: Date.now(), message, type, duration: 3000 }]);
    }

    // Use effect to remove notifications after duration
    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications(prevNotifications => prevNotifications.map(notification => {
                // Decrease the duration of each notification
                const updatedNotification = {
                    ...notification,
                    duration: notification.duration - 1000
                };
                // Remove the notification when its duration is zero
                if (updatedNotification.duration <= 0) {
                    return null;
                }
                return updatedNotification;
            }).filter(notification => notification !== null)); // Filter out null values
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Function to get icon based on notification type
    function getIcon(type) {
        switch (type) {
            case 'success':
                return <FaCheckCircle />;
            case 'error':
                return <FaExclamationCircle />;
            case 'invalid':
                return <FaExclamationTriangle />;
            default:
                return null;
        }
    }

    // Function to get color class based on notification type
    function getColorClass(type) {
        switch (type) {
            case 'success':
                return ' text-green-600';
            case 'error':
                return ' text-red-600';
            case 'invalid':
                return ' text-yellow-500';
            default:
                return 'bg-yellow-600 text-gray-800';
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-400">
            {/* Button container */}
            <div className="flex gap-4">
                {/* Button to trigger a success notification */}
                <button onClick={() => showToast('Successfully submited', 'success')} className="w-32 h-12 bg-green-600 text-white rounded-lg text-lg">Success</button>
                {/* Button to trigger an error notification */}
                <button onClick={() => showToast('Please fix the error', 'error')} className="w-32 h-12 bg-red-600 text-white rounded-lg text-lg">Error</button>
                {/* Button to trigger an invalid notification */}
                <button onClick={() => showToast('Invalid input , check again', 'invalid')} className="w-32 h-12 bg-yellow-500 text-white rounded-lg text-lg">Invalid</button>
            </div>
            {/* Notification container */}
            <div className="fixed bottom-0 right-0 p-6">
                {/* Render each notification */}
                {notifications.map((notification, index) => {
                    // Calculate the width of the progress bar dynamically
                    const progressWidth = `${(notification.duration / 3000) * 100}%`;
                    return (
                        <div key={notification.id} className={`relative mb-2 rounded-lg bg-white p-4 shadow-md ${getColorClass(notification.type)}`} style={{ height:'60px', width: '300px' }}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {getIcon(notification.type)}
                                    <div className="ml-2">{notification.message}</div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-300  shadow-2xl rounded-b-lg">
                                    <div style={{ width: progressWidth }} className={`h-full rounded-b-lg ${getColorClass(notification.type)}`}></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NotificationPage;
