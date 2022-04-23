import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import useDebounce from "../../../hooks/use_debounce";
import './search_bar.style.scss';
import {I_search_bar_props} from "./search_bar.interfaces";

type Props = I_search_bar_props;

const SearchBar: FunctionComponent<Props> = (props) => {
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500)

    const handle_change_input = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }, [])

    useEffect(() => {
        props.on_change(debouncedValue)
    }, [debouncedValue])

    return (
        <div className={'wrap_search_bar'}>
            <input
                onChange={handle_change_input}
                placeholder={'Search for users'}
                className={'search_bar_input'}
            />
        </div>
    );
};

export default SearchBar;