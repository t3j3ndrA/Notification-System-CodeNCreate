const Notifications = () => {
    return(
        <>
            <div className="w-full h-screen overflow-hidden p-4 bg-gray-50 dark:bg-slate-700">
            <div className="p-4 flex justify-between items-center shadow-md bg-white dark:bg-black rounded-lg h-20">
                <h1 className="text-2xl font-medium">Notifications</h1>
                <button className="font-medium text-blue-300 hover:text-blue-400 hover:scale-105">Mark all as read</button>
            </div>
                {/* <div className="h-1 mt-2 mb-4 rounded-full bg-black"></div> */}
                <div className="flex flex-col overflow-y-scroll h-[78.5vh] mt-2 rounded-2xl">
                {
                    
                    [...Array(12)].map((val,idx)=> {
                        return(
                            <>
                                <NotificationCard/>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
};

const NotificationCard = () => {
    return(
        <>
            <div className="border-y flex space-x-4 p-2 bg-white">
                <img src="../images/avatar.jpg" className="w-12 h-12 rounded-full "/>
                <div>
                    <h4 className="font-medium">Ronak Shah</h4>
                    <h4>Hi hello from react app. Whatt's up. Lets go for a dinner tonight</h4>
                </div>
            </div>
        </>
    )
}

export default Notifications;