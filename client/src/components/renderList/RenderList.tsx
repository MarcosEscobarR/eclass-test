import {Item} from "../../models/SpotifyModel";
// @ts-ignore
import styles from "./RenderList.module.scss";
import React from "react";

interface IProps {
    items?: Item[],
    title: string
}

const RenderList = ({items, title}: IProps) => {
    if (!items) return <></>;

    return <div>
        <p className={styles.title}>{title}</p>
        <div className={styles.itemsContainer}>
            {items?.map(item => (
                <div className={styles.coverContainer} key={item.id}>
                    {item.images?.length ? <img width={"100%"} src={item.images[0].url} alt=""/> :
                        <p>No Image</p>
                    }
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    </div>
}

export default RenderList