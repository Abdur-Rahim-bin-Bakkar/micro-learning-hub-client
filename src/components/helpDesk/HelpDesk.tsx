"use client";

import { HelpDeskProps } from "./types";
import CreatePostCard from "./CreatePostCard";
import PostList from "./PostList";

const HelpDesk = ({ PostData }: HelpDeskProps) => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#111827] to-[#1E293B] dark:bg-[#0B1120] py-10">
            <div className="mx-auto max-w-7xl px-5">

                {/* Header */}
                <CreatePostCard />


              

                {/* Create Post */}


                {/* Posts */}

                <PostList PostData={PostData} />

            </div>
        </section>
    );
};

export default HelpDesk;