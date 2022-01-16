const popUp = props => {

    return (

        <div className="fixed flex overflow-y-scroll hide-scroll-bar justify-center items-center h-full w-full m-0 bg-gray-400 bg-opacity-30 backdrop-filter backdrop-blur-sm z-10">

                <div className="relative flex flex-col justify-center lg:justify-between lg:flex-row rounded-md bg-white shadow-xl 
                 p-4 md:p-8 w-screen h-auto max-w-screen-2xl mt-44 sm:mt-48 md:mt-52 lg:mt-0 mx-8 md:mx-20 xl:mx-44 2xl:mx-80">
                    
                    <span className="flex items-center justify-center absolute w-8 h-8 -top-4 -right-4 leading-2 bg-red-500 hover:bg-red-400 transition-colors duration-150
                    ease-in rounded-full shadow-md cursor-pointer" onClick={props.handleClose}>X</span>


                        <div className="p-2 max-w-2xl lg:mr-10">
                        <img className="lg:hidden block mx-auto mb-8 w-auto h-auto min-w-0 shadow-xl" src={props.image} alt=""/>
                            <div className="w-full 2xl:text-2xl 3k:text-2xl ">
                                <h1 className="album-name font-Montserrat font-bold 3k:text-3xl">{props.album}</h1>
                                <h2 className="artist">{props.artist}</h2>
                                <h2 className="date">{props.date}</h2>
                            </div>
                            <div className="pt-4 2xl:text-xl 3k:text-2xl">
                                <h3 className="font-medium text-gray-700 ">{props.isLive}</h3>
                                <div className="whitespace-pre-line font-sans text-sm 2xl:text-xl pl-4">{props.tracklist}</div>
                            </div>
                        </div>

                        <div className="relative flex flex-col ">
                                <img className="hidden lg:block w-auto h-auto min-w-0  max-w-[10rem] max-h-[10rem] 
                                sm:max-w-xs sm:max-h-xs xl:max-w-md xl:max-h-md 2xl:max-h-xl 2xl:max-w-xl 3k:max-w-2xl max-h-2xl shadow-xl" src={props.image} alt=""/>
                                
                                <h3 className="m-2 font-medium text-gray-700 2xl:text-xl 3k:text-2xl 3k:mt-6 ">Listen on</h3>
                                <div className="w-1/2 flex justify-start">

                                    <a href={props.spotifyID} onmouseover="window.status=' '; return true;" className="noSelect py-2 px-4 w-28 h-full block border border-gray-300 rounded-3xl hover:bg-pink-200 active:bg-pink-300">
                                        <img className="w-28 h-auto" src="/img_data/spotify.png" alt="spotify logo"/>
                                    </a>

                                    <a href={props.ytmusicID} className="noSelect py-2 px-4 h-full block border border-gray-300 rounded-3xl hover:bg-pink-200 active:bg-pink-300">
                                        <img className="w-24 h-auto" src="/img_data/ytmusic.png" alt="ytmusic logo"/>
                                    </a>
                                </div>
                                
                            
                        </div>

            </div>


        </div>
    )
}

export default popUp;

