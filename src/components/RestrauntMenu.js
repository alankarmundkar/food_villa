import {useParams} from 'react-router-dom'

const RestrauntMenu =() =>{
    const {id} = useParams()
    return(
        <div>
          <h1>Menu Id :{id}</h1>
        </div>
    )
}

export default RestrauntMenu

