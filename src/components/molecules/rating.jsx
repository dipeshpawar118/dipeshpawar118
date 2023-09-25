import { memo } from 'react'
import { ChatIcon } from '@svgs/index'
import { Star } from '@svgs/index'

const Rating = (props) => {
    let { rating = 5, review = 0 } = props?.productRating
    let ratingStar = [ 1,2,3,4,5 ]
    return (
        <div className="flex content-center items-center">
            <div className="flex flex-row w-35 mx-2">
                {ratingStar.map(( item, index) => {
                    return <Star key={item} fill={( index < rating ? '#E9DB15' : '#4b5563') } />
                })}
            </div>
            <div className="flex-initial text-sm font-semibold">{rating}</div>
            <div className="flex-initial  ms-5">
                <ChatIcon />
            </div>
            <div className="flex-initial mx-2 font-medium text-xs">
                {review} reviews
            </div>
        </div>
    )
}

export default memo(Rating)
