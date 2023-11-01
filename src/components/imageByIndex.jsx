import image1 from '../assets/deserts.jpg'
import image2 from '../assets/deserts.jpg'
import image3 from '../assets/deserts.jpg'
import image4 from '../assets/deserts.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
