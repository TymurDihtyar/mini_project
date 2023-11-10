import {FC, PropsWithChildren} from 'react';

import {urls} from "../../constants/urls";
import {ICast} from "../../interfaces";
import css from "./CharectersContainer.module.css";

interface IProps extends PropsWithChildren {
    item: ICast
}

const CharactersInMovieInfo:FC<IProps> = ({item}) => {

    return (
        <div className={css.character} key={item.id}>
            {
                item.profile_path ?
                    <img src={urls.poster(item.profile_path)} alt={item.character}/>
                    :
                    <img src="https://www.trendzbd.com/web/images/miscellaneous/no_image_found.jpg"
                         alt={item.character}/>
            }
            <div>{item.name}</div>
        </div>
    );
};

export {CharactersInMovieInfo};