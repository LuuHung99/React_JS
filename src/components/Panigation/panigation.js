import React from 'react';

function Panigation(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage);
        }
    }


    return (
        <div>
            <button
                disable={_page <= -1}
                onClick={()=> handlePageChange(_page - 1)}
            >
                Prev

            </button>
            <button
                 disable={_page >= totalPages}
                 onClick={()=> handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Panigation;