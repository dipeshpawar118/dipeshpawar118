import Categories from '@/components/organisms/categories'
import Pagination from '@/components/atoms/Pagination'
import Popular from '@/components/molecules/popular'
import IndustrialUniform from '@/components/industrialUniform'
import { industrialLabels } from '@/utils/labels/industrialLabels'
import { getAPI } from '@/utils/api'
export const metadata = {
    title: 'Categories',
}

const Clp =  async () => {


   const { data } =  await getAPI('categories') ;
    // console.log(data)

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={industrialLabels.heading} description={industrialLabels.description}/>
                <div className="h-px w-full mt-40 bg-black border-0 "></div>
                <Categories data={data} />
                <Pagination totalPage={10} currPage={1} />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular />
            </main>
        </div>
    )
}

export default Clp
