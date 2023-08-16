import React from 'react'

function blog() {
  return (
    <>
        <h1>Blog Page</h1> <br/>
        <h2> example of nested routes</h2>
        <p>this is http://localhost:3000/blog</p>
        <p>this is nested route within blog directory/folder http://localhost:3000/blog/first</p>
        <p>this is nested route within blog directory/folder http://localhost:3000/blog/second</p>
    </>
  )
}

export default blog