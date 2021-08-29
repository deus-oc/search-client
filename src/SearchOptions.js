import React from "react";
import './SearchOptions.css';

export const SearchOptions= ({options, clickedOptions}) => {
    return(
        <div className="search-box">
            {options.length > 0 ? 
            <div>
                {options.map((companyData) => {
                    return(
                    <div className="entry" key={companyData._id} onClick={() => clickedOptions(companyData._id)}>
                        <div>
                            <span>{companyData.Name}</span>
                            <span className="dot green"></span>
                            <span className="dot blue"></span>
                            <span className="dot orange"></span>               
                            <span className="dot pink"></span>
                        </div> 
                        <div className="website-name">{companyData.website}</div>
                    </div>
                    );
                })}
            </div>
        :   <div className="no-data">            
                No data matching
            </div>}
        </div>
    );
}