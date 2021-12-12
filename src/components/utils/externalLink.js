import {Link} from '@chakra-ui/react'

const ExternalLink=({href, text}) => {
    return <Link rel="noopener nofollow" target="_blank" color="teal.500" href={href}>{text}</Link>
}

export default ExternalLink;