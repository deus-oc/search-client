import React from "react";
import './SearchOptions.css';

export const SearchOptions= ({options, clickedOptions, searchStr}) => {
    const formatName = (nameStr) => {
        const idx = nameStr.toLowerCase().indexOf(searchStr.toLowerCase())
        const len = searchStr.length;
        const n = nameStr.length;
        if(idx !== -1){
            const str1 = nameStr.substring(0,idx);
            const str2 = nameStr.substring(idx,idx+len);
            const str3 = nameStr.substring(idx+len, n);        
            return <span>{str1}<b>{str2}</b>{str3}</span>
        }  
        else {
            return <span>{nameStr}</span>
        }
    }
    return(
        <div className="search-box">
            {options.length > 0 ? 
            <div>
                {options.map((companyData) => {
                    return(
                    <div className="entry" key={companyData._id} onClick={() => clickedOptions(companyData._id)}>
                        <div>
                            {formatName(companyData.Name)}
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