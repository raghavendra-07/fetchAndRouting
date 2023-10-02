// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div className="li-con">
          <img className="image-url" src={imageUrl} alt={`item${id}`} />
          <div className="inner-li-con">
            <p className="topic">{topic}</p>
            <p className="title">{title}</p>
            <div className="avatar-con">
              <img className="avatar-url" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
