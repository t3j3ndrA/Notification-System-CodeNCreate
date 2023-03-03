const Notifications = () => {
    return(
        <>
            <div className="p-4 w-full h-screen">
                <h1 className="text-2xl font-medium">Notifications</h1>
                <div className="h-1 mt-2 mb-4 rounded-full bg-black"></div>
                <div className="flex flex-col space-y-2 overflow-y-scroll h-[89vh]">
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
            <div className="border flex space-x-4 rounded-xl p-2">
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