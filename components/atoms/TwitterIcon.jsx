import {
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';


export default ({ shareUrl, title, size }) => (
  <TwitterShareButton url={shareUrl} quote={title} >
    <TwitterIcon size={size} round/>
  </TwitterShareButton>
)