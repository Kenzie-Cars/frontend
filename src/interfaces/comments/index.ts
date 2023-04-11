export interface ICommnentsRequest {
    id: string
    content: string
}

export interface ICommnetsResponse {
    id: string
    content: string
    created_at: Date
    updated_at: Date
    user_id: string
    advertisement_id: string
}