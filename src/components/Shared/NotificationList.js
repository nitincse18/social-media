const notifications = [
  {
    title: "Test1",
    content:
      "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
    type: "like",
  },
  {
    title: "Test1",
    content:
      "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
    type: "like",
  },
  {
    title: "Test1",
    content:
      "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
    type: "like",
  },
  {
    title: "Test1",
    content:
      "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
    type: "like",
  },
  {
    title: "Test1",
    content:
      "lorem ipsumElit excepteur irure culpa enim aliquip nulla nulla ut aliquip nostrud qui irure velit.",
    type: "like",
  },
];
const NotificationList = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-20 right-0 bg-white border border-gray-300 p-2 rounded-lg shadow w-[20%] mx-2">
      {/* Notification items go here */}
      {
        notifications.map(notification => (
            <div className="h-auto w bg-slate-400 m-1 p-2 rounded-lg">
                <h1 className="font-bold">{notification.title}</h1>
                <h1 className="font-thin">{notification.content}</h1>
            </div>
        ))
      }
    </div>
  );
};

export default NotificationList;
