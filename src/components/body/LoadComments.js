import React from 'react'
import dateFormat from 'dateformat'

const LoadComments = ({comments}) => {

    const comment = comments.map(comment=> {
        return (
            <div className='mt-3' key={comment.id}>
                <p>{comment.rating} out of 5</p>
                <h6><i>{comment.comment}</i></h6>
                <small className="text-muted">
                    {comment.author}
                </small>
                <br />
                <small className="text-muted">
                    {dateFormat(comment.date, 'dddd, mmmm ds, yyyy')}
                </small>
            </div>
        )
    })
  return (
    <div>{comment}</div>
  )
}

export default LoadComments