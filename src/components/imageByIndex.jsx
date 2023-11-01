import image1 from '../assets/mainDishes.jpg'
import image2 from '../assets/deserts.jpg'
import image3 from '../assets/cocktails.jpg'

export const images = [image1, image2, image3]
// export const url = ["useContentfulMain", "useContentfulDesserts", "useContentfulCocktails"]

const imageByIndex = (index) => images[index % images.length]
// const urlByIndex = (index) => url[index]

export default imageByIndex 
// urlByIndex

