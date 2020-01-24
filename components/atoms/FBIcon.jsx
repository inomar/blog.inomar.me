import {
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';


export default ({ shareUrl, title, size }) => (
  <FacebookShareButton url={shareUrl} quote={title} >
    <FacebookIcon size={32} round/>
  </FacebookShareButton>
)