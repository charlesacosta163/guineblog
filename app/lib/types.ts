export type StarState = {
    isStarred: boolean;
    setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CommentState = {
    isShown: boolean;
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
    postID: string
}

export type Comment = {
    id: string,
    name: string,
    comment: string
}
