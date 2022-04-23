
export interface I_user_info_block_data {
    id: number,
    avatar_url?: string | null,
    login: string,
    email: string | null,
    location: string | null,
    created_at: string | null,
    followers: number,
    following: number,
    bio?: string | null
}

export interface I_user_info_block_props {
    info_data: I_user_info_block_data
}

export interface I_personal_info_array {
    label: string,
    value_key: string
}