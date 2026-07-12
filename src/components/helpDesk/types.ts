export interface HelpPost {
  _id: string;
  userId: string;

  user: {
    name: string;
    role: "student" | "teacher" | "admin";
    photo: string;
  };

  issue: string;
  description: string;
  image: string;

  reactions: {
    like: string[];
    love: string[];
    necessary: string[];
  };

  comments: {
    userId: string;
    name: string;
    photo: string;
    comment: string;
    createdAt: string;
  }[];

  createdAt: string;
  updatedAt: string;
}

export interface HelpDeskProps {
  PostData: HelpPost[];
}