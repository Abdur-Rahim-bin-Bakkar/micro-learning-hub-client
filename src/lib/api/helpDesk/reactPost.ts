const handleReaction = async (
  reaction: "like" | "love" | "necessary"
) => {
  if (!session?.user) return;

  try {
    const res = await reactPost({
      postId: post._id,
      userId: session.user.id,
      reaction,
    });

    if (res.success) {
      router.refresh();
    }
  } catch (error) {
    console.error(error);
  }
};