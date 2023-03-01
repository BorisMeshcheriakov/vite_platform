import SVG from 'react-inlinesvg';
import {useMemo} from 'react';

import patients from 'resources/icons/header/patients.svg'
import programs from 'resources/icons/header/programs.svg'
import consultations from 'resources/icons/header/consultations.svg'
import learning from 'resources/icons/header/learning.svg'
import articles from 'resources/icons/header/articles.svg'
import store from 'resources/icons/header/store.svg'
import statistics from 'resources/icons/header/statistics.svg'
import profile from 'resources/icons/header/profile.svg'
import privacy from 'resources/icons/header/privacy.svg'
import terms from 'resources/icons/header/terms.svg'
import exit from 'resources/icons/header/exit.svg'
import specialists from 'resources/icons/header/specialists.svg'
import support from 'resources/icons/header/support.svg'

const Icon = ({icon}) => {
    const icons = useMemo(()=>{
        return {
            patients,
            programs,
            consultations,
            learning,
            articles,
            store,
            statistics,
            profile,
            privacy,
            terms,
            exit,
            specialists,
            support
        }

    },[])

    return <SVG  src={icons[icon] ?? ''} alt=''/>
}

export default Icon;