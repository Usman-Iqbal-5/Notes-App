function DeleteIcon({onHandleDeleteNote}){
  return(
    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="button"
            onClick={onHandleDeleteNote}
          >
            {" "}
            <path d="M3 7h18" /> <path d="M8 7a4 4 0 0 1 8 0" />{" "}
            <path d="M19 7l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7" />{" "}
            <path d="M10 11v6" /> <path d="M14 11v6" />{" "}
          </svg>
  )
}

export default DeleteIcon;