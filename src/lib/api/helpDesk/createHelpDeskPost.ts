'use server'
import { getUserToken } from "@/lib/sessions/token";
import { ICreateHelpDeskPost } from "./helpDesk";
import { revalidatePath } from "next/cache";

export const createHelpDeskPost = async (
    payload: ICreateHelpDeskPost
) => {
    console.log(payload, 'etai to mone mone khouji')
    const token = await getUserToken()
    console.log(token, 'token')
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/helpdesk/create-post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          }
        );

        const result = await response.json();
        if(result.success){
          revalidatePath('/help-desk')
        }

        if (!response.ok) {
          throw new Error(result.message || "Failed to create post.");
        }
        console.log(result,'post result server')

        return result;
      } catch (error) {
        throw error;
      }
};