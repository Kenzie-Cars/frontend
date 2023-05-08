export interface ICommentRequest {
    comment: string
}

export interface ICommentObj {
    id: string,
    name: string,
    description: string
}

export interface ICommentsResponse {
    id: string
    comment: string
    created_at: Date
    updated_at: Date
    user_id: string
    advertisement_id: string
    user: ICommentObj
}