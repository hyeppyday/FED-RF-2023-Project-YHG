
import { useContext } from 'react';
import {List} from '../modules/List';
import { bnbCon } from '../modules/bnbContext';

export function MainCont(){
    const myCon = useContext(bnbCon);

    return(
        <>
            <List cat={myCon.menuCat} />
        </>
    )
}