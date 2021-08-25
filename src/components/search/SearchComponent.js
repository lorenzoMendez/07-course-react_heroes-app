
import React, { useMemo } from 'react';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeoresByName } from '../selectors/getHeroesByName';

import queryString from 'query-string';

export const SearchComponent = ({history}) => {

    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({search: q});

    const {search} = values;

    const heroesFiltered = useMemo(() => getHeoresByName(q), [q]);

    const handleSearch = (event) => {
        event.preventDefault();
        history.push(`?q=${search}`);
    }

    return (
        <div className="row">
            <div className="col-5">

                <h1>SearchScreen</h1>
                <hr />

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Find your hero"
                        className="form-control"
                        value={search}
                        autoComplete="off"
                        onChange={handleInputChange}/>
                    
                    <button
                        type="submit"
                        className="btn btn-block btn-outline-primary">
                            Search...
                    </button>
                </form>

            </div>
            <div className="col-7">
                <h4> Results </h4>
                <hr />
                {
                    (q === '') && <div className="alert alert-info">Search a hero</div>
                }
                {
                    (q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">There is not a hero with {q}</div>
                }
                {
                    heroesFiltered.map(hero => <HeroCard
                        key={hero.id}
                        {...hero}/>)
                }

            </div>
        </div>
    )
}
