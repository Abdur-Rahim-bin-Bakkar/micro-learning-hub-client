export const getApplicationStatus = async (
    userId: string
) => {

    try {

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/applications/status/${userId}`
        );

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            alreadyApplied: false,
        };

    }

};