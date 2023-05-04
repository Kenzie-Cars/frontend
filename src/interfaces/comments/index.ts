export interface ICommnentsRequest {
    comment: string
}

export interface ICommentsResponse {
    id: string
    comment: string
    created_at: Date
    updated_at: Date
    user_id: string
    advertisement_id: string
}