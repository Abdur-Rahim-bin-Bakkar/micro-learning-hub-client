"use client";


import {
    useEffect,
    useState
} from "react";


import AnnouncementCard,{
    Announcement
} from "./AnnouncementCard";



export default function AnnouncementContainer(){


    const [
        announcements,
        setAnnouncements
    ] = useState<Announcement[]>([]);



    const [
        loading,
        setLoading
    ] = useState(true);




    useEffect(()=>{


        const fetchAnnouncements = async()=>{


            try{


                const response =
                await fetch(

                    `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`

                );



                const result =
                await response.json();




                setAnnouncements(
                    result.data || []
                );



            }catch(error){


                console.log(
                    "Announcement fetch error:",
                    error
                );


            }finally{


                setLoading(false);


            }


        };



        fetchAnnouncements();


    },[]);






    if(loading){


        return (

            <section className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#0B0F14]
            text-white
            ">


                <h1 className="
                text-2xl
                font-bold
                ">

                    Loading Announcements...

                </h1>


            </section>

        );


    }







    if(!announcements.length){


        return (

            <section className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#0B0F14]
            text-white
            ">


                <h1 className="
                text-3xl
                font-bold
                ">

                    No Announcement Found

                </h1>


            </section>

        );


    }






    return (

        <section className="
        min-h-screen
        bg-[#0B0F14]
        py-20
        ">


            <div className="
            container
            mx-auto
            px-6
            ">


                <div className="
                mb-12
                text-center
                ">


                    <h1 className="
                    text-4xl
                    font-bold
                    text-white
                    ">

                        Latest Announcements

                    </h1>



                    <p className="
                    mt-3
                    text-gray-400
                    ">

                        Stay updated with our latest news and updates

                    </p>


                </div>






                <div className="
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
                ">


                    {
                        announcements.map(
                            (announcement)=>(

                                <AnnouncementCard

                                    key={
                                        announcement._id
                                    }

                                    announcement={
                                        announcement
                                    }

                                />

                            )
                        )
                    }



                </div>


            </div>


        </section>

    );

}