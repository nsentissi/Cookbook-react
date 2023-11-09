import { createClient } from 'contentful';

const useContentful = () => {
  
    const client = createClient({
        space: 'keoycf6woddh',
        accessToken: '6m0v5_1qha6Motf9rVCEYFB99qu_5Vz2Gxs83krZqm4',
        host: 'preview.contentful.com'
    });

    const getRecipes = async () => {
        try{
            
            const entries = await client.getEntries({
                content_type: 'deserts',
                select: 'fields'
            });
            console.log(entries)
            // We are sanitizing the data from the entries to only get the fields we need
            const sanitizedEntries = entries.items.map((entry) => {
                const title = entry.fields.title
                const ingredients = entry.fields.ingredients
                const recipe = entry.fields.recipe
                const img = entry.fields.image.fields.file.url
                const icon = entry.fields.icon.fields.file.url

                return {
                    title,
                    ingredients,
                    recipe,
                    img,
                    icon
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