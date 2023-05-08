import {TableInterfaceProps} from "../../interface/table/table.interface"
import DataTable from 'react-data-table-component'
import qs from 'qs'
import {useLocation, useNavigate} from "react-router-dom"
import ReactPaginate from 'react-paginate'
import {ChevronUpIcon} from "@heroicons/react/24/outline"

export default function TableComponent({
                                           ref,
                                           data,
                                           totalCount,
                                           columns,
                                           currentPage,
                                           totalPages,
                                           size,
                                           ...rest
                                       }: TableInterfaceProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const startIndex = currentPage === 0 ? currentPage : (currentPage * 15)
    const lastIndex = startIndex + size

    // const handleSort = (column, sortDirection) => {
    //     const dataSort = [
    //         {
    //             field: column?.sortField,
    //             direction: sortDirection.toUpperCase()
    //         }
    //     ]
    //     if (query?.sorts) {
    //         dataSort.push(...query?.sorts)
    //         delete query.sorts
    //     }
    //
    //     navigate({
    //         search: qs.stringify({
    //             ...query,
    //             sorts: dataSort
    //         })
    //     })
    // }

    const handlePaginate = (page: number) => {
        navigate({
            pathname: location.pathname,
            search: qs.stringify({
                ...query,
                page: page || undefined
            })
        })
    }

    const CustomPagination = () => (
        <div className='mt-2 flex items-center justify-between'>
            <p>Ma`lumotlar {startIndex} dan {lastIndex} gacha, {totalCount} ta dan
            </p>
            <div>
                <ReactPaginate
                    previousLabel={''}
                    nextLabel={''}
                    forcePage={currentPage}
                    onPageChange={page => handlePaginate(page.selected)}
                    pageCount={totalPages}
                    breakLabel={'...'}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    activeClassName='active bg-blue-400 text-white'
                    pageClassName='page-item border p-2 px-3 rounded-[50%]'
                    breakClassName='page-item'
                    nextLinkClassName='page-link'
                    pageLinkClassName='page-link'
                    breakLinkClassName='page-link'
                    previousLinkClassName='page-link'
                    nextClassName='page-item next-item'
                    previousClassName='page-item prev-item'
                    containerClassName={'pagination react-paginate separated-pagination flex gap-2 pagination-sm justify-start pe-1'}
                />
            </div>
        </div>
    )

    return (
        <div className='react-dataTable'>
            <DataTable
                {...rest}
                noHeader
                actions={ref}
                data={data}
                // onSort={handleSort}
                columns={columns}
                noDataComponent={"Ma`lumotlar topilmadi"}
                className='react-dataTable'
                sortIcon={<ChevronUpIcon width={10}/>}
                paginationPerPage={size}
                paginationDefaultPage={currentPage + 1}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
            />
            <CustomPagination/>
        </div>
    );
}