
import { pGetProjects } from '@/sanity/sanity-utils'
import Testamonialswiper from './Testamonialswiper';


const Testamonials = async () => {
   const projects = await pGetProjects();

  return (
    <Testamonialswiper projects={projects} />
  )
} 

export default Testamonials
