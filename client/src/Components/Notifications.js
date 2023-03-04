import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

const Notifications = () => {
  const userId = localStorage.getItem("_id");
  const username = localStorage.getItem("username");
  const [notifications, setNotifications] = useState([]);
  const [key, setKey] = useState(Math.random());
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [selectedNotifications, setSelectedNotifications] = useState(new Set());

  console.log(selectedNotifications);

  const fetchUsersNotifications = async () => {
    axios
      .get(`http://localhost:5000/api/noti/of/${userId}`)
      .then(({ data }) => {
        setNotifications(data.data);
        setKey(Math.random());
      })
      .catch((err) => console.log(err));
  };

  const handleMarkRead = (e) => {
    e.preventDefault();

    const data = { notifications: Array.from(selectedNotifications) };
    axios
      .put(`http://localhost:5000/api/noti/mark-read/${userId}`, data)
      .then(({ data }) => {
        setSelectedNotifications(new Set());
        fetchUsersNotifications();
        setKey(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsersNotifications();

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("new-msg", () => {});

    socket.on("new-noti", (notification) => {
      fetchUsersNotifications();
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("new-noti");
      socket.off("new-msg");
    };
  }, []);

  const showToastMessage = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <>
      <div className="p-4 w-full h-screen">
        <h1 className="text-2xl font-medium">Notifications</h1>
        <div className="h-1 mt-2 mb-4 rounded-full bg-black"></div>
        <div className="flex flex-col  overflow-y-scroll h-[89vh]" key={key}>
          <div className="flex flex-row gap-2 justify-start items-center mb-4">
            <div>
              <input
                type={"checkbox"}
                checked={notifications?.length === selectedNotifications.size}
                onClick={() => {
                  let s = new Set();
                  if (selectedNotifications.size == notifications?.length) {
                    setSelectedNotifications(s);
                  } else {
                    notifications.forEach((item) => {
                      s.add(item._id);
                    });
                    setSelectedNotifications(s);
                  }
                  setKey(Math.random());
                }}
              />
              <span className="ml-1">All</span>
            </div>
            <button
              type="button"
              onClick={handleMarkRead}
              className="bg-pink-500 text-white rounded-md px-2 py-[1px]"
            >
              Mark As Read
            </button>
          </div>

          {notifications?.map(({ msg, forUsers, _id }, idx) => {
            return (
              <>
                <NotificationCard
                  _id={_id}
                  msg={msg}
                  read={forUsers[0].read}
                  createdAt={forUsers[0]?.createdAt}
                  selectedNotifications={selectedNotifications}
                  setSelectedNotifications={setSelectedNotifications}
                  setKey={setKey}
                />
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer onClick={() => {}} />
    </>
  );
};

const NotificationCard = ({
  _id,
  msg,
  read,
  createdAt,
  selectedNotifications,
  setSelectedNotifications,
  setKey,
}) => {
  const dt = new Date(createdAt);

  return (
    <>
      <div
        className={`border-b  flex space-x-4  p-2 ${
          read ? "" : "bg-slate-200"
        }`}
      >
        <input
          type={"checkbox"}
          checked={selectedNotifications.has(_id)}
          onClick={() => {
            let s = selectedNotifications;
            if (s.has(_id)) {
              s.delete(_id);
            } else {
              s.add(_id);
            }
            // setCheckKey(Math.random());
            setSelectedNotifications(s);
            setKey(Math.random());
          }}
        />
        <img src="../images/avatar.jpg" className="w-12 h-12 rounded-full " />
        <div>
          {/* <h4 className="font-medium">{read ? "read" : "unread"}</h4> */}
          <p className="text-gray-600 text-sm">
            {dt ? `${dt.getHours()}:${dt.getMinutes()}` : ""}
          </p>
          <h4>{msg}</h4>
        </div>
      </div>
    </>
  );
};

export default Notifications;
