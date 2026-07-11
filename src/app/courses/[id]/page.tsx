import CourseDetails from "./CourseDetails";


type Props = {
    params: Promise<{
        id: string;
    }>;
};


export default async function CourseDetailsPage({
    params,
}: Props) {


    const { id } = await params;



    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`,
        {
            cache: "no-store",
        }
    );


    const result = await response.json();


    const course = result.data;



    if (!course) {

        return (

            <section className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#0B0F14]
            text-white
            ">

                <h1 className="text-3xl font-bold">
                    Course Not Found
                </h1>

            </section>

        );

    }



    return (

        <CourseDetails course={course}/>

    );

}