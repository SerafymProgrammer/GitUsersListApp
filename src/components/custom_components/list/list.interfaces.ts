import {FunctionComponent, ReactNode} from "react";
import {I_user_list_item} from "../../user_list_page/interface_components/user_list_item/user_list_item.interfaces";

export interface I_list_props {
    list: [],
    render_item: (item:any, index: number)=>ReactNode
}