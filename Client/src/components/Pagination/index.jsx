const Pagination = (props) => {
  const { pageOffset, dataLength, itemPerPage, handleNext, handlePrev } = props

  const END_ITEM_RANGE =
    pageOffset + itemPerPage > dataLength
      ? dataLength
      : pageOffset + itemPerPage

  return (
    <div className='pagination flex-align-center gap-4'>
      <div className='flex gap-2'>
        <button
          className={`btn ${pageOffset !== 0 ? 'btn-primary' : 'btn-disabled'}`}
          onClick={handlePrev}
          disabled={pageOffset === 0}
        >
          Prev
        </button>
        <button
          className={`btn ${
            pageOffset + itemPerPage + 1 < dataLength
              ? 'btn-primary'
              : 'btn-disabled'
          }`}
          onClick={handleNext}
          disabled={pageOffset + itemPerPage + 1 >= dataLength}
        >
          Next
        </button>
      </div>
      <p>
        Showing {pageOffset + 1}-{END_ITEM_RANGE} from {dataLength} Data
      </p>
    </div>
  )
}

export default Pagination
