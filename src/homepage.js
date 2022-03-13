
import './style/homepage.css';
import singles from './pseudoDB/singlesData'
import PopUp from './components/albumPopup';
import albums from './pseudoDB/albumData';
import livePerformance from './pseudoDB/livePeformanceData'
import { useHorizontalScroll } from './components/useHorizontalScroll';
import { useState } from 'react';



const pictures = ["/img_data/01.png", "/img_data/02.png", "/img_data/03.jpg"];

function Home() {

    const albumSideScroll = useHorizontalScroll();
    const singleSideScroll = useHorizontalScroll();

    const [isShowed, setIsShowed] = useState(false);
    const [num,setNum] = useState(0) ;
    const [source, setSource] = useState(albums);

    const showPopUp = (index,type) => {
        setNum(index);
        setSource(type);
        setIsShowed(true);

    };
    const {Album, Artist, Date:date,cover, Tracklist, spotifyID, ytmusicID} = source[num];
    

    return(
        <body className="max-w-screen max-h-screen">
    
        {isShowed && <PopUp handleClose={ () => setIsShowed(false)}
                            album={Album}
                            artist={Artist}
                            date={date}
                            isLive={source === livePerformance ? "Setlist" : "Tracklist"}
                            
                            tracklist={Tracklist.map((track, index) => {
                                
                                return(
                                    <ol className="list-decimal list-outside">

                                        <li value={index + 1}>
                                            {track.substring((track.indexOf('.') + 2 ))}
                                        </li>

                                    </ol>
                                )
                            })
                        }
                            image={cover}
                            spotifyID={`https://open.spotify.com/album/${spotifyID}`}
                            ytmusicID={`https://music.youtube.com/playlist?list=${ytmusicID}`}></PopUp>}

        <div className="h-100% bg-gradient-to-b from bg-white via-blue-300 to-blue-700">
            <div className="header-wrapper">
                <div className="w-100% ">
                    <img className="w-full" src="/img_data/header.png" alt=""/>
                    <h1>
                        
                    </h1>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="bio-wrapper flex justify-center">
                    <article className="sm:flex mx-10 mt-40 sm:mx-16 md:mx-28 lg:mx-36 xl:mx-52 2xl:mx-80 md:md-40 mb-28 h-2/5 max-w-max relative bg-gradient-to-br from-gray-100 to-red-100 p-5 sm:rounded-xl md:rounded-3xl shadow filter drop-shadow-xl gray-200 ">
                    <img src={pictures[1]} alt="" className= "mx-auto shadow w-3/5 h-3/5 rounded-md sm:hidden"/>
                        <div className="ml-1 sm:ml-0 mt-6 sm:mt-0 max-w-4xl">
                        <h3 className="text-3xl 2xl:text-4xl 3k:text-5xl mb-5 font-semibold text-red-700">
                            エメ
                        </h3>
                        <p className="text-justify sm:text-left 2xl:text-xl 3k:text-2xl">
                            Aimer (エメ, pronounced eh-meh), born July 9, 1990 in Kumamoto, Japan, is a Japanese recording artist signed to 
                            Sony Music Entertainment Japan and attached to the talent agency FOURseam. 
                            She played piano in elementary school and picked up the guitar in junior high school. 
                            She writes music in both Japanese and English and has a good command of English from her experiences living abroad.
                            <br></br>
                        </p>
                        <p className="hidden lg:contents 2xl:text-xl 3k:text-2xl">
                            <br></br>
                            As a child, Aimer was constantly surrounded by music, mainly of the jazz and blues variety loved by her father, who was a bassist for a jazz band. 
                            In elementary school, she learned to play the piano. And as a middle school student influenced by the likes of Avril Lavigne's music, 
                            Aimer picked up the guitar and starting incorporating English into her lyrics. At the age of 15, 
                            she damaged her vocal chords and thus ended up with the unique voice she is known for today.
                        </p>
                        </div>
                        <img src={pictures[2]} alt="" className="hidden shadow float-right max-w-xl max-h-xl 3k:max-w-2xl 3k:max-h-2xl w-2/5 h-2/5 rounded-full sm:block ml-4 sm:mt-10 xl:mt-8 2xl:mt-6 3k:ml-6"/>
                    </article>
                </div>

                <div className="album-wrapper">
                    <div className="flex flex-col bg-white m-auto p-auto">
                        <h3 className="text-center mb-16 text-3xl md:mb-20 lg:mt-24 md:text-7xl font-Montserrat font-bold text-indigo-700 subpixel-antialiased filter drop-shadow-xl gray-200 select-none">
                            Discography
                        </h3>

                        <div className="bg-red-300 mx-10 py-20 rounded-full select-none">
                            

                            <main className="md:mt-10">
                            <h1 className="font-sans text-3xl ml-24 md:text-5xl sm:ml-64 font-semibold text-red-700 tracking-wide subpixel-antialiased">Albums</h1>
                            <div className="flex hide-scroll-bar">
                            
                            <div ref={albumSideScroll} className="noSelect flex flex-nowraps overflow-x-scroll hide-scroll-bar py-10 mx-8 sm:mx-20 sm:mt-6 lg:ml-64 lg:mr-64 md:mx-28 cursor-pointer">
                                
                                
                                {albums.map((album,index) => {
                                    return(
                                        <div key={index} className="inline-block px-3 transition duration-300 ease-in-out hover:-translate-y-4 transform hover:scale-105" onClick={ () => showPopUp(index,albums)} >
                                            <div className=" w-44 h-52 sm:w-56 sm:h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                                <article className="tile">
                                                <img src={album['cover']} alt="" className=" max-h-60 rounded-t-xl"/>
                                                <h4 className=" ml-2 mt-1 sm:ml-3 sm:mt-2 text-xs font-Montserrat font-semibold text-indigo-500">{(album['Album'].includes('(') ? album['Album'].slice(0, album['Album'].indexOf('(') - 1) :album['Album'])}</h4>
                                                <p className=" ml-2 sm:ml-3 mt-1 text-sm text-gray-700">{album['Date']}</p>
                                                </article>
                                            </div>
                                        </div>
                                    )})
                                }
                                </div>          
                            </div>
                            </main>

                            <main>
                            <h1 className="font-sans text-3xl mt-6 ml-24 md:text-5xl sm:ml-64 font-semibold text-red-700 tracking-wide subpixel-antialiased">Singles</h1>
                            <div className=" flex sm:pb-10 hide-scroll-bar">
                                <div ref={singleSideScroll} className=" noSelect flex flex-nowraps overflow-x-scroll hide-scroll-bar py-10 mx-8 sm:mx-20 sm:mt-6 lg:ml-64 lg:mr-64 md:mx-28 cursor-pointer">
                                {singles.map((single,index) => {
                                    return(
                                        <div key={index} className="noSelect inline-block px-3 transition duration-300 ease-in-out hover:-translate-y-4 transform hover:scale-105" onClick={ () => showPopUp(index,singles) }>
                                            <div className="w-44 h-52 sm:w-56 sm:h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                                <article className="tile">
                                                <img src={single['cover']} alt="" className="w-full max-h-36 sm:max-h-60 rounded-t-xl object-cover sm:h-48"/>
                                                <h4 className="ml-2 mt-2 sm:ml-3 sm:mt-2 text-xs font-Montserrat font-semibold text-indigo-500">{single['Album'].includes('/') ? 
                                                    single['Album'].slice(0, single['Album'].indexOf('/') - 1) : 
                                                    (single['Album'].includes('(') ? single['Album'].slice(0, single['Album'].indexOf('(') - 1) :single['Album'])}</h4>


                                                <p className="ml-2 sm:ml-3 mt-1 text-sm text-gray-700">{single['Date']}</p>
                                                </article>
                                            </div>
                                        </div>
                                    )})
                                }
                                </div>
                            </div>
                            </main>
                        </div>    
                    </div>
                </div>

                <section className="livePerformance-wrapper text-center">
                        <h1 className="text-3xl my-16 md:mb-28 md:text-7xl text-center font-Montserrat font-bold text-pink-700 subpixel-antialiased filter drop-shadow-xl gray-200 select-none">
                            Live Performance
                        </h1>
                        <h1 className="text-xl text-center text-red-700 drop-shadow-xl">This project is on halt due to lack of consistent resource and design. will be back in the future</h1>
                        
                        <div>

                            
                        </div>

                </section>

            </div>
            <div className="footer-wrapper">

            </div>
        </div>
        </body>

    )

    
} 


export default Home;

