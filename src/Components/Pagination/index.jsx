import React from 'react';
import PropTypes  from 'prop-types';
import { Button } from '@material-ui/core';

Pagination.propTypes = {
    pagination:PropTypes.object.isRequired,
    onPageChange:PropTypes.func,
}
Pagination.defaultProps = {
    onPageChange:null,
}


function Pagination(props){
    const {pagination,onPageChange} = props;
    const {soTrang,soPhanTuTrenTrang,total} = pagination;
    const totalPages = Math.ceil(total/soTrang)
    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return (
        <div>
            <Button
            disable = {soTrang <= 1}
            onClick={()=>handlePageChange(soTrang-1)}
            >
                Prev
            </Button>
            <Button
            disable = {soTrang >= totalPages}
            onClick={()=>handlePageChange(soTrang+1)}
            >
                Prev
            </Button>
        </div>
    );
}

export default Pagination;
