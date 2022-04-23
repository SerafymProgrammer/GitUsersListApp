export interface I_user_list_item {
    id: number,
    avatar_url: string | null,
    login: string,
    public_repos: number
}

export interface I_user_list_item_props {
    item_data: I_user_list_item
}

