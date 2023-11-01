import { createClient } from 'contentful';

const useContentful = () => {
  
    const client = createClient({
        space: 'keoycf6woddh',
        accessToken: 'JmqtAqhaj3EFaiT5NVJjmdCvEtGPdkVlNY2_VcSC9P8',
        host: 'preview.contentful.com'
    });

    const getRecipes = async () => {
        try{
            
            const entries = await client.getEntries({
                content_type: 'cocktails',
                select: 'fields'
            });
            console.log(entries)
            // We are sanitizing the data from the entries to only get the fields we need
            const sanitizedEntries = entries.items.map((entry) => {
                const title = entry.fields.title
                const ingredients = entry.fields.ingredients
                const recipe = entry.fields.recipe
                const img = entry.fields.image.fields.file.url

                return {
                    title,
                    ingredients,
                    recipe,
                    img
                }
            })

            // return entries
            return sanitizedEntries

        }catch(err){
            console.log('Contentful error: ', err);
        }
    }

    return {getRecipes};
};

export default useContentful;